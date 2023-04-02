const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('欢迎使用微信云托管！')
})

const port = process.env.PORT || 80
app.listen(port, () => {
  console.log('服务启动成功，端口：', port)
})
// 一个用户发什么消息，就反弹什么消息的消息回复功能
router.post('/message/post', async ctx => {    
  const { ToUserName, FromUserName, Content, CreateTime } = ctx.request.body;

  ctx.body = {
    ToUserName: FromUserName,
    FromUserName: ToUserName,
    CreateTime: +new Date(),
    MsgType: 'text',
    Content: `反弹你发的消息：${Content}`,
  };
});
