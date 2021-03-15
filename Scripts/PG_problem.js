var Global = require('PG_module');

cc.Class({
    extends: cc.Component,

    properties: {
        n:0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
       this._count1 = 0;
       this._count2 = 0;
       this._sum = 0;
       this._answerNum = 3;
       this.newProblem();
    },

    // update (dt) {},
    newProblem()
    {
        var path = cc.find("Canvas/PG_UpChoice/PG_Problem/PG_label");

        this._count1 = Math.round(Math.random() * 10);
        this._count2 = Math.round(Math.random() * 10);
        Global.PG_theAnswer = this._sum = this._count1 + this._count2;
        path.getComponent(cc.Label).string = this._count1 + " + " + this._count2 + " = ";
        this.getAnswer();
        this.n = Math.floor(Math.random() * 3);
    },

    getAnswer()
    {
        for (let index = 0; index < this._answerNum; index++) 
        {
            Global.PG_answer[index] = this._sum + Math.round(Math.random() * 2 + 1) * (index - 1); 
        }
    },

});
