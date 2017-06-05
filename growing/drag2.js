;(function(){

    var ctrlpage = {
        wbaseNum:0,
        hbaseNum:0,
        elems:null,
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
            }

            
        }
    }

    function drag(){}
    drag.prototype = {
        ctrl:null,
        elem:null,
        left:0,
        top:0,
        index:-1,
        init:function(ctrl,elem,index){
            var self = this;
            self.ctrl = ctrl;
            self.elem = elem;
            self.index = index;
            var mul = Math.floor(index/3);    
            var left = (index%3) * ctrlpage.wbaseNum;
            var top = mul * ctrlpage.hbaseNum;
            console.log(`${left},${top}`);
            self.elem.style.left = left + 'rem';
            self.elem.style.top = top + 'rem';

            self.elem.style.position = 'absolute';
            self.elem.style.width = (ctrlpage.wbaseNum - 0.1) + 'rem';
            self.elem.style.height = (ctrlpage.hbaseNum -0.1)+ 'rem';

            // document.addEventListener('touchmove', touch, false);
            // document.addEventListener('touchstart', touch, false);
            // document.addEventListener('touchend', touch, false);
        }
    }
        

        function drag2(elem,index) {
            this.elem = elem;
            //先横排
            this.innit(index);
            // this.move();
        }
        
        drag2.prototype = {
            innit: function (index) {
                var parent = this.elem.parentNode,
					// list = parent.children,
					pos=[];
                var mul = Math.floor(index/3);    
                var top = mul * hbaseNum;
                var left = (index%3) * wbaseNum;

                // this.elem.style.left = this.elem.offsetLeft + 'rem';
                // this.elem.style.top = this.elem.offsetTop + 'rem';
                this.elem.style.left = left + 'rem';
                this.elem.style.top = top + 'rem';
                // console.log(`${left},${top}`);
                this.elem.style.position = 'absolute';
                this.elem.style.width = (wbaseNum - 0.1) + 'rem';
                this.elem.style.height = (hbaseNum -0.1)+ 'rem';

                // for (var i = list.length; i--;) {
				// 	pos[i]={'left':list[i].offsetLeft,'top':list[i].offsetTop};
                // };
				this.pos=pos;
                // this.elems = list;//存储元素列表
                // console.log(pos);
            },
            stopPrevent: function (e) {
                e = e || window.event;
                if (e.preventDefault) {
                    e.preventDefault();
                    e.stopPropagation();
                } else {
                    e.returnValue = false;
                    e.cancelBubble = true;
                }
            },
            /*
			检测碰撞
			@cause 主动元素(就是被拖动的那个)
			@passive 被动元素(被撞的那个)
			*/
            collision: function (cause, passive) {
                var ct = cause.offsetTop,
					cl = cause.offsetLeft,
					cb = ct + cause.offsetHeight,
					cr = cl + cause.offsetWidth;
                var pt = passive.offsetTop,
					pl = passive.offsetLeft,
					pb = pt + passive.offsetHeight,
					pr = pl + passive.offsetWidth;
                /*
				@碰撞原理
				主动元素 A 被动元素 B
				A.top < B.bottom &&
				A.left < B.right &&
				A.right > B.left &&
				A.bottom > B.top
				当这些条件全部成立时，两个元素就碰撞了
				*/
                if (ct < pb && cl < pr && cb > pt && cr > pl) {
                    return true;
                }
                return false;
            },
            /*
			测量距离
			@orgin 比较元素
			@list  被比较元素列表
			*/
            meter: function (orgin, list) {
                var ol = orgin.offsetLeft,
					ot = orgin.offsetTop,
					min_l = 99999999,
					min_t = 99999999,
					_l = 0,
					_t = 0,
					result = null;
                for (var i in list) {
                    _l = Math.abs(ol - list[i].offsetLeft);
                    _t = Math.abs(ot - list[i].offsetTop);
                    //console.log(_l+"  "+_t);
                    if (_l < min_l || _t < min_t) {
                        //console.log("if "+_l+"  "+_t);
                        min_l = _l;
                        min_t = _t;
                        result = list[i];
                    }
                }
                return result;
            },
			/*
			@获取元素在列表中所在的位置
			*/
			curIndex:function(obj,list){
				var list=list || [];//为了防止list为空报错
				for(var i=0,len=list.length;i<len;i++){
					if(obj==list[i]){
						return i;
					}
				}
				return false;
			},
			getStyle:function(obj,prop){
				if(obj.currentStyle){
					//IE支持 currentStyle
					return obj.currentStyle[prop];
				}else{
					//chrome firefox 支持 getComputedStyle
					return getComputedStyle(obj,null)[prop];
				}
			},
			startMove:function(obj,style){
				var getStyle=this.getStyle;
				clearInterval(obj.timer);
				obj.timer=setInterval(function(){
					obj.style.zIndex=99;
					var bStop=true;
					for(var prop in style){
						//1取当前样式
						var cur=parseInt(getStyle(obj,prop));
						//2算速度
						var speed=(style[prop]-cur)/8;
						speed=speed>0?Math.ceil(speed):Math.floor(speed);
						//timer end
						if(cur!=style[prop]){
							bStop=false;
						}

						obj.style[prop]=cur+speed+'px';
					}
					if(bStop){
						clearInterval(obj.timer);
						obj.style.zIndex="";
					}
				},30)
			},
            move: function (e) {
                var element = this.elem,
					// lists = this.elems,
                    lists = elems;
					that=this,
					result = null,
					startMove=this.startMove;
					stopPrevent = this.stopPrevent,
					curIndex=this.curIndex,
					pos=this.pos;
                collision = this.collision,
                meter = this.meter;
                element.onmousedown = function (e) {
                    e = e || window.event;
                    var mousex = e.x || e.pageX,
						mousey = e.y || e.pageY,
						moveIndex=curIndex(element,lists),
						style = pos[moveIndex];//
					
                    element.style.zIndex = 99;
                    stopPrevent(e);
					
                    document.onmousemove = function (e) {
                        e = e || window.event;
                        var movex = e.x || e.pageX,
							movey = e.y || e.pageY;
                        stopPrevent(e);
                        element.style.left = (movex - mousex + style['left']) + 'px';
                        element.style.top = (movey - mousey + style['top']) + 'px';
                        var zeroList = [];//存储撞到了几个元素
                        for (var j = lists.length; j--;) lists[j].style.border = ''; //去除元素列表中所有的边框
                        for (var i = lists.length; i--;) {
                            if (lists[i] != element) {
                                if (collision(element, lists[i])) {
                                    zeroList.push(lists[i]);
                                }
                            }
                        };
                        result = meter(element, zeroList);
                    };
                    document.onmouseup = function (e) {
                        document.onmouseup = null,
						document.onmousemove = null;
						if (result) {
							//如果碰到元素，则交换位置
							var activeIndex=curIndex(result,lists);
							startMove.call(that,element,pos[activeIndex]);
							startMove.call(that,result,style);
							//交换存储定位信息
							var zeroData=pos[activeIndex];
							pos[activeIndex]=pos[moveIndex];
							pos[moveIndex]=zeroData;
							
                        } else {
							//如果没有撞到任何元素，则返回原点
							//因为函数在document.onmouseup 中执行，所以会导致this在执行startMove变成window,而不是drag,所以使用了call方法,指定了执行环境。
							startMove.call(that,element,style);
                        }
						element.style.zIndex="";
                        stopPrevent(e);
                    };
                }
            }
        }
        
        function $(id) {
            return id ? document.getElementById(id) : null;
        }
        function getRem(v){
            return v/100;
        }

        // var $wraper;
        // var wbaseNum ;
        // var hbaseNum;
        // var elems;


        // window.onload=function(){ 
        //     $wraper = $('wraper');
        //     console.log($wraper);
        //     $wraper.style.position = 'relative';
        //     $wraper.style.width = "100%";
        //     $wraper.style.height = "100%";
        //     wbaseNum = getRem($wraper.offsetWidth)/3.0;
        //     hbaseNum = getRem($wraper.offsetHeight)/4.00;

        //     elems = $wraper.children;

        //     for (var i = 0;i<elems.length; i++) {
        //         new drag(elems[i],i);
        //     }

        //     document.addEventListener('touchmove', touch, false);
        //     document.addEventListener('touchstart', touch, false);
        //     document.addEventListener('touchend', touch, false);
        // }


        function touch (event){  
            var event = event || window.event;  
            
            var oInp = document.getElementById("inp"); 
            // var x = Number(event.touches[0].clientX).toFixed(2);
            // var y = Number(event.touches[0].clientY).toFixed(2);
            // console.log(`${event.type},${x},${y}`);
            console.log(`${event.type},${event.touches[0]}`);
            console.log(event.touches[0]);
            return;
    
            switch(event.type){  
                case "touchstart":  
                    oInp.innerHTML = "Touch started (" 
                        + Number(event.touches[0].clientX).toFixed(2) + "," 
                        + Number(event.touches[0].clientY).toFixed(2) + ")";  
                    break;  
                case "touchend":  
                    oInp.innerHTML = "<br/>Touch end (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")";  
                    break;  
                case "touchmove":  
                    event.preventDefault();  
                    oInp.innerHTML = "<br/>Touch moved (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")";  
                    break;  
            }  
            
        } 
        
        window.onload = function(){
            ctrlpage.init();
        }
    
})();
        
