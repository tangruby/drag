/**
 * Position 对象
 */
  export default class Position{
    constructor(){
      let hf = lib.flexible.px2rem(document.body.offsetHeight);
      let wf = lib.flexible.px2rem(document.body.offsetWidth);

      let pos = {width:wf,height:hf};
      pos.subWFull = pos.width / 3;
      pos.subW = pos.width * 0.99 / 3;
      pos.spaceW = pos.width * 0.005 / 3; //有左右
      pos.subHFull = pos.height / 4;
      pos.subH = pos.height * 0.99 / 4;
      pos.spaceH = pos.height * 0.005 /4; //有上下

      this._pos = pos;
      
    }

    get pos(){
        return this._pos;
    }
    set pos(v){

    }

    getPosition(index) {
        // //3*4规格
        let pos = {w: this._pos.subW, h: this._pos.subH};
        pos.x = (index % 3) * this._pos.subWFull;
        pos.y = Math.trunc(index / 3) * this._pos.subHFull;
        
        return pos;
    }

}
