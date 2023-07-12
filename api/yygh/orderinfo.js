import request from '@/utils/request'

const api_name = `/api/order/orderInfo`
export default {
  //订单服务下的提交订单接口
  submitOrder(scheduleId, patientId) {
    return request({
      url: `${api_name}/auth/submitOrder/${scheduleId}/${patientId}`,
      method: 'post'
    })
  },
  //订单列表
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/auth/${page}/${limit}`,
      method: `get`,
      params: searchObj
    })
  },

//订单状态列表
  getStatusList() {
    return request({
      url: `${api_name}/auth/getStatusList`,
      method: 'get'
    })
  },
  //订单详情
  getOrder(orderId) {
    return request({
      url: `${api_name}/auth/getOrder/${orderId}`,
      method: `get`
    })
  },
}
