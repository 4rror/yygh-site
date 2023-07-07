import request from '@/utils/request'

const api_name = '/admin/cmn/dict'
export default {
  //根据dictCode查询数据字典列表（Hostype Beijin）
  findByDictCode(dictCode) {
    return request({
      url: `${api_name}/findByDictCode/${dictCode}`,
      method: 'get'
    })
  },
  //根据id查询下级数据字典列表（首页并没有用到）
  findByParentId(parentId) {
    return request({
      url: `${api_name}/findChildData/${parentId}`,
      method: 'get'
    })
  }
}
