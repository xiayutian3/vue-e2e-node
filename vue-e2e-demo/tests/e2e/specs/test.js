// https://docs.cypress.io/api/introduction/api.html

// e2e测试，模拟用户测试，相当于浏览器端，点击操作测试

describe('My First Test', () => {
  it('Visits the app root url', () => {
    // 访问根路径
    cy.visit('/')
    // 第一个空可以是class、id、元素选择器，第二个空是元素的内容
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
  it('Visits 根路径', () => {
    cy.visit('/')
    cy.contains('a', 'vue-cli documentation')
  })
  it('test组件渲染的结果', () => {
    cy.visit('/') // 访问的路径
    // 获取id为message的元素，，第二个空是元素的内容（初始化渲染后）
    cy.contains('#message', 'e2e测试')
    // 获取class为btn的元素，触发click事件
    cy.get('.btn').click()
    // 输出id为message的元素的内容
    cy.contains('#message', '按钮点击')
  })
})
