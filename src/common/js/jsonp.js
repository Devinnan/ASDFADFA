import originJSONP from 'jsonp'

/**
 * @export
 * @param {String} url 
 * @param {Object} data 
 * @param {Object} option 
 * @returns 
 */
export default function jsonp(url, data, option) { /* 这个是自己定义的一个jsonp */
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
  /* 这里把jsonp封装成了一个promise对象，回调函数中如果成功的话会把数据带回来然后resolve出去 */
}

function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''/* 这里的substring保证不会有多余的& */
}