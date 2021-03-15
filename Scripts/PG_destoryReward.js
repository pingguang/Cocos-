var Global = require('PG_module');

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;
    },

    onCollisionEnter:function(other,self)
    {
         if(self.tag == 4 && other.tag == 1)
         {
             other.node.destroy();

             if(cc.isValid(other.node))
             {
                 var label = self.node.getChildByName("PG_label");
                 label.getComponent(cc.Label).string = Global.PG_CurrentScore;
             }
             var btn_path = cc.find("Canvas/PG_UpChoice/PG_Next");
             btn_path.active =true;
         }
    },

    // update (dt) {},
});
