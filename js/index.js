/*
 * @Author: 冰彦糖
 * @Date: 2020-08-25 10:16:02
 * @LastEditTime: 2020-08-26 09:45:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \浪润金融集团\js\index.js
 */
(window.onload = function () {
    // 判断当前页面的导航栏
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
    const dateTime = $(".dateTime");

})()