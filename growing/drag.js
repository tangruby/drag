;var a=null;(function(){
    function $(id) {
        return id ? document.getElementById(id) : null;
    }
    function getRem(v){
        return v/100;
    }

    //页面控制
    var ctrlpage = {
        wbaseNum:0,
        hbaseNum:0,
        elems:null,
        elemCurr:null,
        drags:[],
        dragCurr:null,
        init:function(){
            var $wraper = $('wraper');
            $wraper.style.position = 'relative';
            $wraper.style.width = "100%";
            $wraper.style.height = "100%";
            this.wbaseNum = getRem($wraper.offsetWidth)/3.0;
            this.hbaseNum = getRem($wraper.offsetHeight)/4.00;

            this.elems = $wraper.children;

            for (var i = 0;i<this.elems.length; i++) {
                var d = new drag();
                d.init(this,this.elems[i],i);
                this.drags.push(d);
            }

            document.addEventListener('touchmove', this.touchmove, false);
            // document.addEventListener('touchstart', touchstart, false);
            // document.addEventListener('touchend', touchend, false);
        },
        // touchmove:function(event){
        //     // console.log(`${event.type},${event.touches[0].clientX}`);
        // },
        /*
        @获取元素在列表中所在的位置
        */
        curDrag:function(obj){

            for (var i = 0;i<this.elems.length; i++) {
                if(obj == this.elems[i]){
                    return this.drags[i];
                    // return i;
                }
            }

            return false;
        },
        touchmove:function(event){
            var d  = ctrlpage.curDrag(event.target);
            if(d)
                d.touchmove(event);
        },
        touchstart:function(event){
            var d  = ctrlpage.curDrag(event.target);
            if(d)
                d.touchstart(event);
        },
        touchend:function(event){
            var d  = ctrlpage.curDrag(event.target);
            if(d)
                d.touchend(event);
        },
        findAreaElem:function(x,y){
            x = getRem(x);
            y = getRem(y);
            // console.log(x +",==" + y)
            for(var i=0;i<this.drags.length;i++){
                var d = this.drags[i];
                        // console.log(d.posiCurr.x +"," + d.posiCurr.y + ","+ d.posiCurr.w);
                if(x > d.posiCurr.x &&
                    y > d.posiCurr.y &&
                    x < (d.posiCurr.x + d.posiCurr.w) &&
                    y < (d.posiCurr.y + d.posiCurr.h)){
                        return d;

                    }
            }
        }
    }

    function position(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
    }
    position.prototype={x:0,y:0,w:0,h:0};

    //一个元素显示
    function drag(){}
    drag.prototype = {
        ctrl:null,
        elem:null,
        left:0,
        top:0,
        //正确位置
        posiRight:null,
        //当前位置
        posiCurr:null,
        //当前位置
        posiMove:null,
        index:-1,
        zIndex:-1,
        init:function(ctrl,elem,index){
            var self = this;
            self.ctrl = ctrl;
            self.elem = elem;
            self.index = index;
            var mul = Math.floor(index/3);    
            var left = (index%3) * ctrlpage.wbaseNum;
            var top = mul * ctrlpage.hbaseNum;
            var wid = (ctrlpage.wbaseNum - 0.1);// + 'rem';
            var heig = (ctrlpage.hbaseNum -0.1);//+ 'rem';

            self.posiCurr = new position(left,top,wid,heig);
            self.posiRight = new position(left,top,wid,heig);

            self.elem.style.left = self.posiCurr.x + 'rem';
            self.elem.style.top = self.posiCurr.y + 'rem';

            self.elem.style.position = 'absolute';
            self.elem.style.width = self.posiCurr.w + 'rem';
            self.elem.style.height = self.posiCurr.h + 'rem';
            self.zIndex=index;

            // document.addEventListener('touchmove', touchmove, false);
            self.elem.addEventListener('touchstart', ctrlpage.touchstart, false);
            self.elem.addEventListener('touchmove', ctrlpage.touchmove, false);            
            self.elem.addEventListener('touchend', ctrlpage.touchend, false);

        },
        touchmove:function(event){

            this.elem.style.left = getRem(event.touches[0].clientX)+'rem';
            this.elem.style.top = getRem(event.touches[0].clientY)+'rem';
            // console.log(this.elem.style.left);
            // console.log(getRem(event.touches[0].clientX));
            
        },
        touchstart:function(event){
            // console.log(a=this.elem);
            this.elem.style.zIndex= 100;
            // console.log(this.elem.style["z-index"]);
        },
        touchend:function(event){
            var self = this;
            self.elem.style.zIndex=self.zIndex;
            // console.log(`${event.type},${event.changedTouches[0].clientX}`);

            var other = ctrlpage.findAreaElem(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
            // console.log(other);
            if(!other || other.index === self.index){
                // console.log(1);
                self.changePos(self.posiCurr.x,self.posiCurr.y);
            }else{
                // console.log(other.posiCurr);
                // console.log(self.posiCurr);
                var pos = clone(other.posiCurr);
                other.posiCurr = clone(self.posiCurr);
                self.posiCurr = pos;
                // console.log(other.posiCurr);
                // console.log(self.posiCurr);

                self.changePos(self.posiCurr.x,self.posiCurr.y);
                other.changePos(other.posiCurr.x,other.posiCurr.y)
            }
        },
        changePos:function(x,y){
            this.elem.style.left = x + 'rem';
            this.elem.style.top = y + 'rem';
        },
    }

    function clone(obj) {  
        var o;  
        if (typeof obj == "object") {  
            if (obj === null) {  
                o = null;  
            } else {  
                if (obj instanceof Array) {  
                    o = [];  
                    for (var i = 0, len = obj.length; i < len; i++) {  
                        o.push(clone(obj[i]));  
                    }  
                } else {  
                    o = {};  
                    for (var j in obj) {  
                        o[j] = clone(obj[j]);  
                    }  
                }  
            }  
        } else {  
            o = obj;  
        }  
        return o;  
    } 
    
    window.onload = function(){
        ctrlpage.init();
    }
    
})();
        
