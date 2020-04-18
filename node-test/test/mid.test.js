//用来测试http请求的
const request = require('supertest')
//node中自带的模块 assert模块提供了断言测试的函数，用于测试不变式
const assert = require('assert')
const Koa = require('koa')


describe('测试中间件，洋葱圈,app.use的功能',()=>{
  it('中间件被compose一个函数',async ()=>{
    const app = new Koa()
    const calls = []

    app.use( async (ctx,next)=>{
      calls.push(1)
      await next()
      calls.push(6)
    })
    app.use( async (ctx,next)=>{
      calls.push(2)
      await next()
      calls.push(5)
    })
    app.use( async (ctx,next)=>{
      calls.push(3)
      await next()
      calls.push(4)
    })
    //启动服务
    let server = app.listen()
    await request(server)
          .get('/')  //访问根路径
          //查找的状态码是404（返回的结果）
          .expect(404)

    //断言结果
    assert.equal(calls.join(','),'1,2,3,4,5,6')
  })
})