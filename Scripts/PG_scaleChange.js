var Global = require('PG_module');

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        var path = cc.find("Canvas/PG_UpChoice/PG_Score");
        this._y = path.y;
        this._x = path.x;
        this._moveSpeed = 200;
        this._dir = cc.v2(path.x - this.node.x, path.y - this.node.y);
        this._dir.normalizeSelf();  //方向向量归一化
        var seq = cc.sequence(cc.scaleBy(1.2,1.2,1.2),cc.scaleBy(0.5,0.5,0.5));
        this.node.runAction(seq);
        if(Global.PG_IsLine)
        {
            Global.PG_drawLine.clear();
        }
    },

    update (dt) {
        if(this._y != this.node.y && Global.PG_IsRight)
        {
            this.node.x += dt * this._dir.x * this._moveSpeed;
            this.node.y += dt * this._dir.y * this._moveSpeed;
        }
    },
});
