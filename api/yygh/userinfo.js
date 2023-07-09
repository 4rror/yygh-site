import request from '@/utils/request'

const api_name = '/api/user'

export default {
  login(userinfo) {
    return request({
      url: `${api_name}/login`,
      method: 'post',
      data: userinfo
    })
  },
  //查询用户信息
  getUserInfo() {
    return request({
      url: `${api_name}/auth/getUserInfo`,
      method: `get`
    })
  },
  //用户认证接口
  saveUserAuth(userAuth) {
    return request({
      url: `${api_name}/auth/userAuth`,
      method: 'post',
      data: userAuth
    })
  }
}
