var Global = require('PG_module');

cc.Class({
    extends: cc.Component,

    properties: {
        reward:cc.Prefab,
        errorMsg:cc.Prefab,
        errorSound:
        {
            type:cc.AudioClip,
            default:null,
        },
        rightSound:
        {
            type:cc.AudioClip,
            default:null,
        },
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
      if(self.tag == 2 && other.tag == 3)
      {
        Global.PG_IsLine = true;
        var label = other.node.getChildByName("PG_label");
        var a = label.getComponent("PG_answer").answer;
        var path = cc.find("Canvas/PG_Cross");
        if(Global.PG_IsLine)
        {
            Global.PG_drawLine.clear();
        }

        if(a == Global.PG_theAnswer)
        {
            if(Global.PG_canSound)
            {
                cc.audioEngine.play(this.rightSound,false,0.5);
            }

            Global.PG_IsRight = true;
            Global.PG_CurrentScore += 1;
            var newReward = cc.instantiate(this.reward);
            newReward.x = other.node.x;
            newReward.y = other.node.y;
            path.addChild(newReward);
        }
        else
        {
            if(Global.PG_canSound)
            {
                cc.audioEngine.play(this.errorSound,false,0.5);
            }
            Global.PG_IsRight = false;
            var newError = cc.instantiate(this.errorMsg);
            newError.x = other.node.x;
            newError.y = other.node.y;
            path.addChild(newError);

            var btn_path = cc.find("Canvas/PG_UpChoice/PG_Next");
            btn_path.active = true;
        }
        self.node.destroy();
        other.node.destroy();
      }
    },

    // update (dt) {},
});
