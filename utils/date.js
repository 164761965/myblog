//对日期的封装


const initDate = (dateValue,type='all') => {
    var _date = new Date(dateValue);
    var year =  _date.getFullYear();
    var month = _date.getMonth()<9? '0' + (_date.getMonth()+1) : _date.getMonth()+1;
    var date = _date.getDate()<10? '0'+_date.getDate() : _date.getDate();
    if(type=='all'){
        // var t = dateValue.split(" ")[0];
        // return t.split('-')[0]+'年'+t.split('-')[1]+'月'+t.split('-')[2]+'日';
        return year+'年'+month+'月'+date+'日'
    }else if(type=='year'){
        return year
    }else if(type== 'month'){
        return _date.getMonth()+1
    }else if(type == 'date'){
        return date
    }else if(type== 'newDate'){
        return year+'年'+month+'月'+date+'日';
    }
}



/**
 * 将date类型转化为String类型
 * @param {*} date Date类型的参数
 * @param {*} format 转化的格式  yyyy-MM-dd HH:mm:ss
 */
const formatDate = function (date, format = 'yyyy-MM-dd HH:mm:ss') {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    if (format.indexOf('yyyy') != -1) {
      format = format.replace('yyyy', year)
    }
    if (format.indexOf('MM') != -1) {
      format = format.replace('MM', getFormatDate(month))
    }
    if (format.indexOf('dd') != -1) {
      format = format.replace('dd', getFormatDate(day))
    }
    if (format.indexOf('HH') != -1) {
      format = format.replace('HH', getFormatDate(hour))
    }
    if (format.indexOf('mm') != -1) {
      format = format.replace('mm', getFormatDate(minute))
    }
    if (format.indexOf('ss') != -1) {
      format = format.replace('ss', getFormatDate(second))
    }
    return format
  }


  // 日期月份/天的显示，如果是1位数，则在前面加上'0'
function getFormatDate (arg) {
    if (arg == undefined || arg == '') {
      return '00'
    }
    var re = arg + ''
    if (re.length < 2) {
      re = '0' + re
    }
    return re
  }

  

export {
    initDate,
    formatDate
}