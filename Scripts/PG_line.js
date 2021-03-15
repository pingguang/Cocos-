
var Global = require('PG_module');
cc.Class({
    extends: cc.Component,

    properties: {
        pg_currentX:-1000,


        pg_Dx:0,   //二次函数的对称轴
        pg_a:0,    //二次函数的开口
        pg_h:200,  //二次函数顶点的y坐标值
        pg_mNum:30, //答案的个数
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

        Global.PG_drawLine = this.node.getComponent(cc.Graphics);

        this.node.on(cc.Node.EventType.TOUCH_MOVE,function(event)
        {
            var location  = event.getLocation();
            cc.log("Global.isLine");
            cc.log(Global.PG_IsLine);
            cc.log("Global.isClickButton");
            cc.log(Global.PG_IsClick);
            cc.log("location.x");
            cc.log(location.x);
            if(!Global.PG_IsLine && !Global.PG_IsClick && location.x > 220)
            //if(!Global.PG_IsLine && !Global.PG_IsClick &&  location.x > 220 )
            {
                if(this.pg_currentX != location.x)
                  Global.PG_drawLine.clear();

                this.pg_currentX = location.x;
                var startx = - cc.winSize.width/2;
                var starty = - cc.winSize.height/2;
                var changeTo = location.x - cc.winSize.width/2;
               // var changeTo = location.getPreviousLocationInView();
                this.pg_Dx = (startx + changeTo)/2;
                this.pg_a = (starty - this.pg_h)/((startx-this.pg_Dx)*(startx-this.pg_Dx));

                var x = changeTo - startx;
                var targetX =startx,targetY=starty;
                var dx = x/this.pg_mNum;
                for (let index = 0; index < this.pg_mNum; index++) 
                {
                     targetX = startx + dx * index;
                     targetY = this.pg_a * (targetX - this.pg_Dx) * (targetX - this.pg_Dx) + this.pg_h;
                     Global.PG_drawLine.circle(targetX,targetY,5);
                     Global.PG_drawLine.fill();
                     cc.log("targetX ");
                     cc.log(targetX);
                     cc.log("targety ");
                     cc.log(targetY);
                }
             }
            
        },this);                 
    },

    // update (dt) {},
});
