import request from '@/utils/request'

const api_name = `/api/hosp/hospital`
export default {
  //查询医院列表
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  //根据输入关键词模糊查询
  getByHosname(hosname) {
    return request({
      url: `${api_name}/findByHosname/${hosname}`,
      method: 'get'
    })
  },
  //根据医院编号查询基本信息和预约规则信息
  show(hoscode) {
    return request({
      url: `${api_name}/${hoscode}`,
      method: 'get'
    })
  },
//根据医院编号查询（大）科室列表
  findDepartment(hoscode) {
    return request({
      url: `${api_name}/department/${hoscode}`,
      method: 'get'
    })
  }
}
