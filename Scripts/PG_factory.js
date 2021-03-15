var Global = require('PG_module');
cc.Class({
    extends: cc.Component,

    properties: {
        bottle:cc.Prefab,
        bottleNum:3,
        nextSound:
        {
            type:cc.AudioClip,
            default:null,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        if(Global.PG_yourChoice == 1)
            this.answer_and_problem();
        if(Global.PG_yourChoice == 2)
            this.creatAnswerProblem();
    },

    // update (dt) {},
    answer_and_problem()
    {
       if(Global.PG_canSound)
       {
           cc.audioEngine.play(this.nextSound,false,0.5);
       }
       Global.PG_IsClick = false;
       Global.PG_IsLine = false;
       Global.PG_canThrow = true;
        //若factory下面的子节点不为空，则清空子节点，防止下一关是上一关的物体还在
        if(this.node.getChildrenCount())
        {
            this.node.destroyAllChildren();
        }
        var btn_path = cc.find("Canvas/PG_UpChoice/PG_Next");
        btn_path.active = false;

        var path = cc.find("Canvas/PG_UpChoice/PG_Problem");
           path.getComponent("PG_problem").newProblem();

        for (let index = 0; index < this.bottleNum ; index++) 
        {   
            var newBottle = cc.instantiate(this.bottle);
            newBottle.x = (1.2*index +1.8) * this.bottle.data.width - cc.winSize.width/2;
            newBottle.y = - cc.winSize.height/2 + this.bottle.data.height/2;
            var label = newBottle.getChildByName("PG_label");
            label.getComponent("PG_answer").id = index;
            this.node.addChild(newBottle);
        }
    },

    creatAnswerProblem()
    {
        if(Global.PG_canSound)
        {
            cc.audioEngine.play(this.nextSound,false,0.5);
        }
        Global.PG_canMove = true;
        Global.PG_IsLine = false;
        if(this.node.getChildrenCount())
        {
            this.node.destroyAllChildren();
        }
        var btn_path = cc.find("Canvas/PG_UpChoice/PG_Next");
           btn_path.active = false;
        var path = cc.find("Canvas/PG_UpChoice/PG_Problem");
           path.getComponent("PG_problem").newProblem();
        for (let index = 0; index < this.bottleNum; index++) {
            var newBottle = cc.instantiate(this.bottle);
            newBottle.x = (2*index +3) * this.bottle.data.width - cc.winSize.width/2;
            newBottle.y = - cc.winSize.height/2 + 6 * this.bottle.data.height/2;
            var label = newBottle.getChildByName("PG_label");
            label.getComponent("PG_answer").id = index;
            this.node.addChild(newBottle);    
        }
    },
});
