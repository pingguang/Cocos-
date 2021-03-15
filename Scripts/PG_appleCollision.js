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
        if(self.tag == 5 && other.tag == 6)
        {
            var label = other.node.getChildByName("PG_label");
            var path = cc.find("Canvas/PG_Cross");
            var a = label.getComponent("PG_answer").answer;
            other.node.destroy();
            Global.PG_canMove = false;
            if(Global.PG_theAnswer == a)
            {
                //if(Global.PG_canSound)
                //{
                    cc.audioEngine.play(this.rightSound,false,0.5);
               // }
                Global.PG_IsRight = true;
                Global.PG_CurrentScore += 1;
                var newReward = cc.instantiate(this.reward);
                newReward.x = self.node.x;
                newReward.y = self.node.y;
                path.addChild(newReward);
            }
            else
            {
                if(Global.PG_canSound)
                {
                    cc.audioEngine.play(this.errorSound,false,0.5);
                }
                Global.PG_IsRight = false;
                Global.PG_timer--;
                var newError = cc.instantiate(this.errorMsg)
                newError.x = self.node.x;
                newError.y = self.node.y;
                path.addChild(newError);
                var btn_path = cc.find("Canvas/PG_UpChoice/PG_Next");
                btn_path.active = true;
                var timer_label = cc.find("Canvas/PG_ButtomChoice/PG_Timer/PG_label");
                timer_label.getComponent(cc.Label).string = Global.PG_timer;
                if(Global.PG_timer <= 0)
                {
                    cc.director.loadScene('PG_Scence3');
                }
            }

        }
    },
    // update (dt) {},
});
