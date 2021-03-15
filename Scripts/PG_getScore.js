var Global = require('PG_module');

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.node.getComponent(cc.Label).string = Global.PG_CurrentScore;
    },

    // update (dt) {},
});
