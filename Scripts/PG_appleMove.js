

cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
          this._speedMove = 100;
    },

    update (dt) {
        this.node.y -= dt * this._speedMove;
        if(this.node.y < -cc.winSize.height/2 + this.node.width/2)
        {
            this.node.destroy();
        }
    },
});
