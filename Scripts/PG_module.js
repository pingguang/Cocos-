

module.exports = {
     PG_IsRight : false,   //判断答案是否正确
     PG_CurrentScore : 0,  //当前的分数
     PG_IsLine : false,    //是否画线
     PG_IsClick : false,   //是否点击发射
     PG_canThrow : true,   //是否能发射子弹
     PG_canMove : true,    //判断篮子是否能移动
     PG_drawLine : null,   //绘图
     PG_canSound : true,   //是否禁用声音
     PG_timer : 3,         //玩家剩余次数
     PG_theAnswer : 0,     //题目的正确答案
     PG_answer :[cc.Integer],  //根据题目随机生成的答案，其中只有一个正确
     PG_yourChoice : 0,    //选择的场景

};