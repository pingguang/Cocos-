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

    setToScence1()
    {
        Global.PG_CurrentScore = 0;
        Global.PG_theAnswer = 0;
        Global.PG_yourChoice = 1;
        cc.director.loadScene('PG_Scence1');
    },

    setToScence2()
    {
        Global.PG_CurrentScore = 0;
        Global.PG_timer = 5;
        Global.PG_theAnswer = 0;
        Global.PG_canMove = true;
        Global.PG_yourChoice = 2;
        cc.director.loadScene('PG_Scence2');
    },

    setToScence3()
    {
        cc.director.loadScene('PG_Scence3');
    },

    setToSence4()
    {
        cc.director.loadScene('PG_Scence4');
    },
});
