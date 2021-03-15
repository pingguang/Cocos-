var Global = require('PG_module');

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.node.on(cc.Node.EventType.TOUCH_MOVE,function(event)
        {
            if(Global.PG_canMove)
            {
                var location = event.getLocation();
                //var startLocation = event.getStartLocation();
                var startLocation = event.getPreviousLocation();
                this.node.x += location.x - startLocation.x;

                if(this.node.x < -200)
                    this.node.x = -200;
                if(this.node.x > 300)
                    this.node.x = 300;
            }
        },this);
    },

    // update (dt) {},
});
