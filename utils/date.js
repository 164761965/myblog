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

export {
    initDate,
}