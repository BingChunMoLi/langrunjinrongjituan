/*
 * @Author: 冰彦糖
 * @Date: 2020-08-25 10:16:02
 * @LastEditTime: 2020-08-25 16:36:33
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
    const navImg = $('#navImg');
    const navImgLeft = $('#navImgLeft');
    const navImgRight = $('#navImgRight');
    $("#slider").easySlider({});
})()