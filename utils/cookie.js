/**
 * 存储，读取，删除cookie的方法
 */


/**
 * 保存信息到cookie
 * @param {*} c_name 属性名
 * @param {*} c_value 值
 * @param {*} exHours 保存时间  （单位：小时）
 */
export function setCookie(c_name, c_value, exHours) {
    var exdate = new Date()  //初始化时间
    exdate.setTime(exdate.getTime + exHours * 3600 * 1000)
    document.cookie = c_name + "=" + escape(c_value) + ";expries=" + exdate.toGMTString() + ";path=/"
}

/**
 * 获取cookie
 * @param {*} c_name 属性名
 */
export function getCookie(c_name) {
    //判断document.cookie对象里面是否有cookie
    if (document.cookie.length > 0) {
        let c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            //说明cookie中存在要查找的信息
            c_start = c_start + c_name.length + 1
            let c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) {
                c_end = document.cookie.length
            }
            return unescape(document.cookie.substring(c_start, c_end))
        }
        return null
    }
}

/**
 * 删除cookie
 * @param {*} c_name 
 */
export function clearCookie(c_name) {
    setCookie(c_name, "", -1)
}