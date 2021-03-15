
var Global = require('PG_module');

cc.Class({
    extends: cc.Component,

    properties: {
        id:0,
        answer:0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
         var path = cc.find("Canvas/PG_UpChoice/PG_Problem");
         var n = path.getComponent("PG_problem").n;

         this.node.getComponent(cc.Label).string = Global.PG_answer[(this.id + n)%3];
         this.answer = Global.PG_answer[(this.id + n)%3];
    },

    // update (dt) {},
});
