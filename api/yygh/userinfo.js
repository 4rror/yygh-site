import request from '@/utils/request'

const api_name = '/api/user'

export default {
  login(userinfo) {
    return request({
      url: `${api_name}/login`,
      method: 'post',
      data: userinfo
    })
  }
}
