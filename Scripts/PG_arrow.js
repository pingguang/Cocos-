var Global = require('PG_module');

cc.Class({
    extends: cc.Component,

    properties: {
        arrow:cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
    creatArrow()
    {
        if(Global.PG_canThrow)
        {
            var newArrow = cc.instantiate(this.arrow);
            this.node.addChild(newArrow);
            Global.PG_IsClick = true;
            Global.IsLine = true;
            Global.PG_canThrow = false;
            cc.log("newArrow");
        }
    },
});
