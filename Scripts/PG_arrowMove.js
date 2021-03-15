var Global = require('PG_module');

cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
       this._speed = 200;
       this.node.x = -cc.winSize.width/2;
       this.node.y = -cc.winSize.height/2;
       this._path = cc.find("Canvas/PG_Cross");
    },

    update (dt) {
        var dx = this._path.getComponent("PG_line").pg_Dx;
        var a = this._path.getComponent("PG_line").pg_a;
        var h = this._path.getComponent("PG_line").pg_h;
        this.node.x += this._speed * dt;
        var x = this.node.x - dx;
        this.node.y = a * x * x + h;
        cc.log(this.node.x);
        cc.log(this.node.y);
       /* if(this.node.x > dx && this.node.y < -cc.winSize.height/2 + this.node.width/2)
        {
            this.node.destroy();
        }*/
    },
});
