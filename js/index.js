/*
 * @Author: 冰彦糖
 * @Date: 2020-08-25 10:16:02
 * @LastEditTime: 2020-08-28 15:25:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \浪润金融集团\js\index.js
 */
    const path = window.location.href;
    let nav = $('.nav');
    let lis = nav.children("a");
    for (const iterator of lis) {
        if(path == iterator.href){
            $(iterator).addClass('activer');
        }
    }
    const navImgLeft = $('#navImgLeft');
    const navImgRight = $('#navImgRight');
    const navi = $('.navi');
    let navia = 0;
    navImgLeft.on("click",function () {
        navia -= 860;
        // navi.css('marginLeft',navia+'px');
        navi.animate({"marginLeft":navia},1000)
        if(navia == -2580){
            navia = 0;
        }
    })
    navImgRight.on("click",function () {
        navia += 860;
        if(navia == 860){
            navia = -2580;
        }
        navi.animate({"marginLeft":navia},1000);
        if(navia == 2580){
            navia = 0;
        }
    })
    timer = setInterval(func, 1500);
    function func() {
        clearInterval(timer);
        navia -= 860;
        navi.animate({"marginLeft":navia},1000)
        if(navia == -2580){
            navia = 0;
        }
    }

function formatDate(time,format='YY-MM-DD hh:mm:ss'){
    let date = new Date(time);
    let year = date.getFullYear(),
        month = date.getMonth()+1,
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
    let preArr = Array.apply(null,Array(10)).map(function(elem, index) {
        return '0'+index;
    });
    let newTime = format.replace(/YY/g,year)
        .replace(/MM/g,preArr[month]||month)
        .replace(/DD/g,preArr[day]||day)
        .replace(/hh/g,preArr[hour]||hour)
        .replace(/mm/g,preArr[min]||min)
        .replace(/ss/g,preArr[sec]||sec);
    return newTime;
};
    const dateTime = $(".dateTime");
    let ff = null;
    function fun() {
        let time = new Date();
        let localtime = time.getTime();
        let localOffset = time.getTimezoneOffset()*60000;
        let utc = localtime + localOffset;
        let beijing = new Date(utc + (3600000*8));
        $(dateTime[0]).html(formatDate(new Date(utc + (3600000*8)),'DD日hh:mm:ss'));
        $(dateTime[1]).html(formatDate(new Date(utc + (3600000*-4)),'DD日hh:mm:ss'));
        $(dateTime[2]).html(formatDate(new Date(utc + (3600000*-5)),'DD日hh:mm:ss'));
        $(dateTime[3]).html(formatDate(new Date(utc + (3600000*1)),'DD日hh:mm:ss'));
        $(dateTime[4]).html(formatDate(new Date(utc + (3600000*9)),'DD日hh:mm:ss'));
        $(dateTime[5]).html(formatDate(new Date(utc + (3600000*2)),'DD日hh:mm:ss'));
        clearInterval(ff);
        ff = setInterval(fun, 1000);
    }
    
    let d = new Date();
    function rili(d) {
        var month_olympic = [31,29,31,30,31,30,31,31,30,31,30,31];
        var month_normal = [31,28,31,30,31,30,31,31,30,31,30,31];
        // 当前年份
        year = d.getFullYear();
        // 当前月份
        month = d.getMonth();
        // 当前天数
        day = d.getDay();
        // 当月首天
        let da = new Date();
        da.setFullYear(year,month,1);
        // 上一月
        let dat = new Date();
        dat.setMonth(month - 1);
        // 下一月
        let datt = new Date();
        datt.setMonth(month + 1);
        let str = "";
        $('.now').html(year+ '年' + (month + 1) + '月');
        $('#rili').html('<tr><th><strong>日</strong></th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th><strong>六</strong></th></tr>');
        str += '<tr>';
        // 当月天数
        let days = daysMonth(year,month);
        // 上月天数
        let dy = daysMonth(year,dat.getMonth());
        let temp = 0;
        // dy:上月天数 da.getDay(): 当月首日星期几
        for (let i = dy-da.getDay()+1; i <= dy; i++) {
            str += "<td>"+ i +"</td>";
            temp++;
        }
        for(let i=1; i<=days; i++){
            if(i ==d.getDate()){
                if(new Date().getMonth() == d.getMonth()){
                    str += "<td class='m'>" + i + "</td>";
                }else{
                    str += "<td>" + i + "</td>";
                }
            }else{
                str += "<td>" + i + "</td>";
            }
            temp++;
            if(temp % 7 ==0){
                str+="</tr><tr>";
            }
        }
        if(temp != 42){
            let tt = 1;
            for (let i = temp; i < 42; i++) {
                str +="<td>" + tt +"</td>";
                tt++;
                temp++;
                if(temp % 7 ==0){
                    str+="</tr><tr>";
                }
            }
        }
        str +="</tr>"
        $('#rili').append(str);
        function daysMonth(year,month){
            if(year % 100 == 0){
                if(year % 400==0){
                    return (month_olympic[month]);
                }else{
                    return (month_normal[month]);
                }
            }else{
                if(year % 4 == 0){
                    return (month_olympic[month]);
                }else{
                    return (month_normal[month]);
                }
            }
        }
    }
    $('.leftRili').on('click',function () {
        d.setMonth(d.getMonth()-1);
        rili(d);
    })
    $('.rigthRili').on('click',function () {
        d.setMonth(d.getMonth()+1);
        rili(d);
    })
    $(function() {
        $(".newTable1 .ta1 .t1").click(function() {
            $(this).addClass("active").siblings().removeClass("active");
            $(".tb1 .table1").eq($(this).index()).show().siblings().hide();
        })
    })
    $(function() {
        $(".newTable2 .ta2 .t2").click(function() {
            $(this).addClass("active").siblings().removeClass("active");
            $(".tb2 .table2").eq($(this).index()).show().siblings().hide();
        })
    })
    window.onload = function(){
        
        rili(d);
        fun();
    }
