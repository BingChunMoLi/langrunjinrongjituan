/*
 * @Author: 冰彦糖
 * @Date: 2020-08-25 10:16:02
 * @LastEditTime: 2020-08-26 11:01:42
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
        // navi.css('marginLeft',navia+'px');
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
        // navi.css('marginLeft',navia+'px');
        if(navia == -2580){
            navia = 0;
        }
    }
    
function formatDate(time,format='YY-MM-DD hh:mm:ss'){
    var date = new Date(time);
    var year = date.getFullYear(),
        month = date.getMonth()+1,
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
    var preArr = Array.apply(null,Array(10)).map(function(elem, index) {
        return '0'+index;
    });
    var newTime = format.replace(/YY/g,year)
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
    fun();
    