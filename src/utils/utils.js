export default {
  formateDate(time) {
    if (!time) return null;
    let date = new Date(time)
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  },
  pagination(data, callback) {
    return {
      onChange: (page) => {
        callback(page)
      },
      current: parseInt(data.result.page),
      pageSize: data.result.page_size,
      total: data.result.total,
      showTotal: ()=>{
        return `共${data.result.total}條数据`
      },
      showQucikJumper: true
    }
  }
}