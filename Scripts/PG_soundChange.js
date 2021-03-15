var Global = require('PG_module');

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // update (dt) {},
    setSound()
    {
        if(Global.PG_canSound)
        {
            var self = this;
            cc.loader.loadRes("pic/pic13",cc.SpriteFrame,function(err,spriteFrame)
            {
                self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                Global.PG_canSound = false;
            });
        }
        else
        {
            var self = this;
            cc.loader.loadRes("pic/pic05",cc.SpriteFrame,function(err,spriteFrame)
            {
                self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                Global.PG_canSound = true;
            });
        }
    },
});
