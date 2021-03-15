# 20以内的加法运算
游戏内容：进入游戏，玩家可选择：无尽模式或挑战模式。无尽模式情况下玩家可以无限做题，挑战模式下，玩家有五次生命，每做错一题，生命次数减少一次，生命次数用完，游戏结束。

# 类中各方法的功能：
1） PG_answer.js:   start():更改label子节点上数值；

2） PG_line.js:     start():根据屏幕触点绘制抛物线；

3） PG_problem.js:  newProblem():生成新的题目；getAnswer():生成三个新的答案，存储在Global.PG_answer中；

4） PG_scaleChange.js:  start():改变reward和error消息的大小；

5） PG_soundChange.js:  setSound():通过canSound的值，关闭，开启声音；

6） PG_playerMove.js:   start():通过触摸事件控制篮子移动；

7） PG_factory.js:    answer_and_problem():用于无尽模式下的题目和答案的生成； creatAnswerProblem():用于闯关模式下的题目和答案的生成；

8） PG_destroyReward.js: onCollisionEnter():实现“赞”碰到得分卡后自动消失；

9） PG_arrowCollision.js: onCollisionEnter():实现火箭碰到瓶子后瓶子和火箭消失，以及奖励，错误的生成；

