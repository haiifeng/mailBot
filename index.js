/*
 * @Author: haiifeng
 * @Date: 2020-12-11 18:20:08
 * @LastEditors: haiifeng
 * @LastEditTime: 2020-12-22 17:49:25
 * @FilePath: \code\mailBot\index.js
 */
const nodemailer = require("nodemailer");
const {
    default: Axios
} = require("axios");
const schedule = require("node-schedule");

//获取彩虹屁接口
const getHoneyedWords = () => {
    var url = "https://chp.shadiao.app/api.php";
    return Axios.get(url);
}

let infoList = [
    `<h2>所爱隔山海，山海皆可平</h2>
    
    <div>
        <p>亲爱的小姑娘：</p>
        <p style="text-indent: 28px;">见字如人。</p>
        <p style="text-indent: 28px;">下周得这个时候就是你得生日啦！就像双十一之前得预热一样，我们也提前一周开始预热你的生日呀。嘻嘻🤭🤭</p>
        <p style="text-indent: 28px;">现在时间是下午 5点21分 哦，忙忙碌碌得一天快要结束了，不管今天工作怎么样，都要保持好心情哦。</p>
        <div style="width:100%;overflow:hidden;">
        <img src="https://file.haiifeng.com/cp62.jpg" alt="所爱隔山海"/>
        <img src="https://file.haiifeng.com/cp61.jpg" alt="山海皆可平"/>
    </div>
    <p style="text-align:right">爱你得胖胖</p>`,
    `<h2>喜欢你又凶又美，又甜又烈</h2>
    
    <div>
        <p>亲爱的小姑娘：</p>
        <p style="text-indent: 28px;">见字如人。</p>
        <p style="text-indent: 28px;">嗨，手机边亲爱的你，这会在排课嘛，别着急，咱慢慢来，胆大心细，机智果敢，说的就是你啦，哈哈哈哈哈。晚上加班也没关系，有老公等你呢，别慌，稳住我们能赢。不过要记得按时吃饭哦，工作再忙也要照顾好咱娇贵的身体！</p>
        <p style="text-indent: 28px;">悄咪咪告诉你，中午没忍住又装了王者荣耀，打了一把排位，终于上王者了，然后果断卸载了，机智如我。😋😋</p>
        <p style="text-indent: 28px;">呐，我希望你每天都能开开心心健健康康快快乐乐美美好好的，爱你呦，笔芯。</p>
        <div style="width:100%;overflow:hidden;">
            <img src="https://file.haiifeng.com/cp72.jpg" alt="又凶又美"/>
            <img src="https://file.haiifeng.com/cp71.jpg" alt="又甜又烈"/>
        </div>
        <p style="text-align:right">爱你得胖胖😘😘</p>
        <p style="text-align:right">2020年12月16日下午5点21分</p>
    </div>`,
    `<h2>我看什么都像你，我看月亮，像你，看星星，也像你。那些白亮透澈、温柔冷清的光，它们都让我想起你。其实我不太懂喜欢，可我想走向你。</h2>
    
    <div>
        <p>亲爱的小姑娘：</p>
        <p style="text-indent: 28px;">见字如人。</p>
        <p style="text-indent: 28px;">嗨，手机边亲爱的你，今天怎么样？看你中午吃饭挺晚的，估计今儿应该超级忙了，辛苦我的小姑娘了，抱抱💑💑。忙碌碌的生活呢，会使人很充实的过完这一天。晚上我还是等你一起下班回家哦。</p>
        <p style="text-indent: 28px;">关于考研这事儿，今儿闲了我又想了下，我觉得花两年时间去准备考研，然后再花两年时间去读研，还是可以的。如果从投入回报这个角度来讲，我觉得回报是完全大于投入的，准备考研，读研期间这些时间是和现在完全不同的生活，而且研究生毕业大概率还会让自己的人生再上一个台阶。所以我觉得还是很不错的。抛开投入回报，我个人还是希望你能去读研，毕竟研究生也是我曾经考过但是失败了的经历，不过目前这状态，如果你能去读研于你于我都是一件很美好的事情。</p>
        <p style="text-indent: 28px;">刚跟海云姐聊天，聊到她也准备买车，但是纠结于上拍照上哪的，她现在跟她老公都在广东惠州，买了车她觉得应该上家里的牌照，毕竟以后还要回家，但是在惠州很少见外地车，纠结到底是上惠州的牌还是上新乡的牌。然后我总结了下，果断下了结论，在惠州买车上惠州牌照，如果以后真的回老家了，那就改成新乡的牌照。她纠结牌照这个事情，还有一点是，明年她准备把新乡的房子装修下，到时候免不了用车，所以也在考虑上新乡的牌照。说这个事儿呢，就是我大约明白了一个道理，就是说我们处在一个动荡的时代，很难去真的规划好后面的事情，甚至是三年后的规划我们都做不了。如果我们总是想着现在怎么样，以后怎么样，纠结于现在和将来，往往让自己很难受，不敢去做决定，不敢去尝试。就像动漫里说的，如果什么都不愿意舍弃，那就什么都得不到。真的，如果我们真的想去做一件事情，那就去做吧，无论最后怎么样。</p>
        <p style="text-indent: 28px;">嗨，那些都扯远了，哈哈哈哈哈。</p>
        <p style="text-indent: 28px;">今天又是风和日丽的一天，不晓得你中午下楼在外面有没有晒到太阳，再没有什么能比得上在寒冷冬季里晒太阳来的美好了。</p>
        <div style="width:100%;overflow:hidden;">
            <img src="https://file.haiifeng.com/cp52.jpg" width="100%" alt="其实我不太懂喜欢"/>
            <img src="https://file.haiifeng.com/cp51.jpg" width="100%" alt="可我想走向你"/>
            </div>
        <p style="text-align:right">爱你得胖胖😘😘</p>
        <p style="text-align:right">2020年12月17日下午5点21分</p>
    </div>`,
    `<h2>最近体重上升了，绝对没有偷吃，只是把你偷偷放在了心里</h2>
    
    <div>
        <p>亲爱的小姑娘：</p>
        <p style="text-indent: 28px;">见字如人。</p>
        <p style="text-indent: 28px;">嗨，手机边亲爱的你，现在还好嘛？不晓得这会你睡醒没睡醒，哈哈哈哈哈。人生难得几回睡，往事无忧梦中去。</p>
        <p style="text-indent: 28px;">早上听你说你晚上2点才睡，心疼你。我估计再晚也就是一点吧，不会太晚。抱抱我的小姑娘。有啥我能帮你得，尽管提，没事儿得。咱早点弄完早点去支配自己得时间。</p>
        <p style="text-indent: 28px;">突然想起来这个关于下午睡觉得事儿，其实吧，我觉得只要是休息日，就我们自己得时间，想什么时候睡就什么时候睡，不用觉得快到饭点了自己不能睡了，而挺着。生活是自己得，时间是自由得，尤其是休息得时候，想吃吃，想睡睡，哪怕下午6点了，自己感觉困了，那也能睡。只要自己觉得舒服，觉得开心就好。</p>
        <p style="text-indent: 28px;">中午那会，跟爸爸视频说了下周去合肥得事儿，他觉得4S店都是坑人得，把车放在停车场不安全。视频得时候还跟爸爸争论了一会，没啥结论。后来想想，其实我们只是观念不同，爸爸见到得都是路边得修理厂之类的，可能他从来没去过4S店，只是听别人说去一趟4S店花很多钱。可能爸爸觉得刚买的车直接就放到停车场，怕丢怕被人弄坏或者怎么样得。我们跟他们处在不同得世界里一样。后来挂了视频之后，我冷静想了想，也仔细再跟爸爸交流了下。还是阔以得。</p>
        <p style="text-indent: 28px;">晚上吃不吃好烤肉呢，哈哈哈哈哈哈。别慌，稳住我们能赢。</p>
        <div style="width:100%;overflow:hidden;">
            <img src="https://file.haiifeng.com/cp21.jpg" width="100%" alt="最近体重上升了，绝对没有偷吃"/>
            <img src="https://file.haiifeng.com/cp22.jpg" width="100%" alt="只是把你偷偷放在了心里"/>
        </div>
        <p style="text-align:right">爱你得胖胖😘😘</p>
        <p style="text-align:right">2020年12月18日下午5点21分</p>
    </div>`,
    `<h2>为什么我脸皮那么厚还是包不住对你的喜欢，一不小心就露馅了</h2>
    
    <div>
        <p>亲爱的小姑娘：</p>
        <p style="text-indent: 28px;">见字如人。</p>
        <p style="text-indent: 28px;">嗨，手机边亲爱的你，现在还好嘛？哈哈哈哈哈，现在的时间是下午5点21分，我刚开始给你写信。感觉一整天忙忙碌碌，只有在给你写信的这个时刻，内心才是安静的，带上耳机，安安静静的想你，想你在做什么，想你今天累不累，想你中午吃了什么晚上又准备吃什么，想你现在有没有想我，想我现在到底能不能猜到你在想我。</p>
        <p style="text-indent: 28px;">中午去楼下吃饭的时候，饺子店排了老多人，当时心里想着，吃个饺子得排那么久，何必呢。买好饭回到了工位，跟旁边的同事聊到这个事儿，突然明白了一个道理，他们愿意去排那么久的队，可能是因为他们真的很在意每一个可以让自己感到喜悦和满足的日子，无论是真的。冬至于我而言，就是这一年里白天最短，晚上最长的日子，过了今天，以后慢慢的白天就越来越长，晚上越来越短了，隐隐约约感觉像是夏天要来了。</p>
        <p style="text-indent: 28px;">早上蹲坑和下午蹲坑的时候，我又想了想考研的事儿，哈哈哈哈哈，觉得你考研还是极好的，不说以后毕业了怎么样，单单是准备考研的过程，就能够让你收获很多，比如英语成绩肯定能提高很多，至于说来年的共三考试。更是不在话下。话说公三考试又快要报名了，回头我们商量下，真的要认真准备英语考试了。放心，有老公陪你，我们一起复习。</p>
        <p style="text-indent: 28px;">日子一天天的，其实过的很快，我希望每一天都能够有所收获，有所成长。</p>
        <p style="text-indent: 28px;">晚上我可能会加班，不晓得你加班不加班，哈哈哈哈。</p>
        <p style="text-indent: 28px;">哈哈哈哈哈哈，其实昨晚你那个饼，我也挺想吃的，我心里想着你要是吃不完，给我剩多少我就吃多少，哈哈哈哈，结果你全吃完了。其实吃的东西，我还好，只要能吃饱我就满足了。昨晚能忍住没吃你的饼，我感觉大概率是我晚上吃饱了，而且旁边还有好多水果，我嘴巴也没闲着。嗯，大致应该是这样。</p>
        <p style="text-indent: 28px;">终于到周一了，左等又盼得，再有一周就去看车了，每每想到这，心里都觉得痒痒得，有点心猿意马。话说昨晚咱俩聊那个车祸视频得事儿，其实最开始我是知道得，一旦超过了高速出口就不能再退回去，退回去太容易发生事故了。我看那些车祸事故视频，更多得是研究他们为什么那么做，我自己要怎么做，怎么样才能够在那短暂得几秒钟内做出正确得决定。也是我最近在思考得防御性驾驶，哈哈哈哈哈，机智如我。</p>
        <p style="text-indent: 28px;">嗨，不知不觉就说了挺多得，你呢，小姑娘，今儿过的怎么样？想你，么么哒😉😉</p>
        <div style="width:100%;overflow:hidden;">
            <img src="https://file.haiifeng.com/cp92.jpg" width="100%" alt="最近体重上升了，绝对没有偷吃"/>
            <img src="https://file.haiifeng.com/cp91.jpg" width="100%" alt="只是把你偷偷放在了心里"/>
        </div>
        <p style="text-align:right">爱你得胖胖😘😘</p>
        <p style="text-align:right">2020年12月21日下午5点21分</p>
    </div>`
]

//生日倒计时
const timer = () => 22 - (new Date()).getDate();

// 发送邮件函数
const user = "1485540731@qq.com"; // 自己的邮箱
const pass = "rhusmkseoplofgie"; //qq邮箱授权码
async function sendMail(text) {
    let transporter = nodemailer.createTransport({
        host: "smtp.qq.com",
        port: 587,
        secure: false,
        auth: {
            user,
            pass
        },
    });
    let info = await transporter.sendMail({
        from: `爱你的胖胖<${user}>`, // sender address
        to: "1693633049@qq.com,1485540731@qq.com", //对方的邮箱
        // to: "1485540731@qq.com", //对方的邮箱
        subject: `生日倒计时${timer()}天`, // Subject line
        // text: text, // plain text body
        html: text
    });
    console.log("发送成功", info);
}

//执行函数
sendMail(`<h2>看到你我就就怦然心动了💓</h2>
    
<div>
    <p>亲爱的小姑娘：</p>
    <p style="text-indent: 28px;">见字如人。</p>
    <p style="text-indent: 28px;">嗨，手机边亲爱的你，现在还好嘛？哈哈哈哈哈，现在的时间是下午5点21分，我刚开始给你写信。今天就是农历庚子年(鼠年)戊子月己亥日，是小姑娘的生日啦，生日快乐，我最爱的小宝贝儿！记得以前你有个昵称，叫After24，记得很清楚，时光荏苒，我们在一起也三年多了。</p>
    <p style="text-indent: 28px;">今儿估计宝贝忙坏了，辛苦辛苦，抱抱小姑娘。早上我们出门，感觉你都好没精神，累的不行，抱抱你，咱今儿晚上早点睡，谁不早点睡谁是小狗！！！汪汪汪。</p>
    <p style="text-indent: 28px;">共三报名是在2021年1月5号早上9点开始，正好是个周二，我们都上班，搞一搞。接下来我们慢慢准备复习英语，我们俩一起复习，互相提问，共同成长。周末了我找个时间去农大瞅瞅，看校外人员能不能进去，能进去的话，我去找找图书馆或者自习室，咱休息了就去准备准备。慢慢来，积硅步以致千里。至于说考研的事儿，等明年回来了再说，不着急，咱时间多的是。</p>
    <p style="text-indent: 28px;">哈哈哈哈，话说昨儿吃到了那个饼，嗯，真鸡儿香。本来我以为你只点了一个，顿时一阵失落，我都自己安慰好自己了，没事儿，晚上不吃正好。结果取回来了原来是两个，哈哈哈哈哈，我太爱你了，哈哈哈哈哈。再没有什么事儿能跟我们一起分享美食来的好了。爱你，么么哒🤗🤗</p>
    <p style="text-indent: 28px;">你呢，今天怎么样，有没有吃新瓜，或者是吃昨天的瓜？哈哈哈哈哈</p>
    <p style="text-indent: 28px;">晚上我们一起回家，回到只属于我们自己的自由的小天地。</p>
    <div style="width:100%;overflow:hidden;">
        <img src="https://file.haiifeng.com/cp81.jpg" width="100%" alt="最近体重上升了，绝对没有偷吃"/>
        <img src="https://file.haiifeng.com/cp82.jpg" width="100%" alt="只是把你偷偷放在了心里"/>
    </div>
    <p style="text-align:right">爱你得胖胖😘😘</p>
    <p style="text-align:right">2020年12月22日下午5点21分</p>
</div>`);

//执行彩虹屁函数
// getHoneyedWords().then(res => {
//     console.log(res.data)
//     //发送邮件
//     sendMail(res.data);
// })

//每天下午5点21分发送
// schedule.scheduleJob({
//     hour: 17,
//     minute: 21
// }, function () {
//     console.log("启动任务:" + new Date());
//     getHoneyedWords().then((res) => {
//         // console.log(res.data);
//         sendMail(res.data);
//     });
// });