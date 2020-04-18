//用来测试http请求的
const request = require('supertest')
//node中自带的模块 assert模块提供了断言测试的函数，用于测试不变式
const assert = require('assert')
const Koa = require('koa')

describe('测试koa',()=>{
  let app1 = new Koa()
  app1.context.msg = 'hello test koa'

  it('测试ctx的信息',()=>{
    app1.use((ctx,next)=>{
      //用assert来断言
      assert.equal(ctx.msg,'hello test koa')
      ctx.body= 'test koa'
    })
    //node启动koa
    //listen里边不写端口号会自动分配，访问‘/’
    return request(app1.listen())
    .get('/')  //访问‘/’
    .expect('test koa') //.expect()　　用来断言，返回的一个结果
  })
})