import request from '@renderer/utils/request'

//用户登录
export const loginByJson = (data) => {
  return request({
    url: '/u/loginByJson',
    method: '请求方式'
  })
}
