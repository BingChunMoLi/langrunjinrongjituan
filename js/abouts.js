/*
 * @Author: 冰彦糖
 * @Date: 2020-08-25 10:16:02
 * @LastEditTime: 2020-08-27 17:12:28
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

$('.nerFont').on('mousemove',function () {
    $('.span').css('display','none');
    $('.h2').css('color','#ffffff');
    $('.nerFont').css('backgroundImage','url(http://futures.longrun.com.hk/img/1_part_1_font_over.png)');
});
$('.nerFont').on('mouseout',function () {
    $('.span').css('display','inline');
    $('.h2').css('color','#1ABFEF');
    $('.nerFont').css('backgroundImage','url(http://futures.longrun.com.hk//img/1_part_1_font.png)');
});
$($('.nerFont2')[0]).on('mousemove',function () {
    $($('.span2')[0]).css('display','none');
    $($('.h22')[0]).css('color','#ffffff');
    $($('.nerFont2')[0]).css('backgroundImage','url(http://futures.longrun.com.hk/img/1_part_2_font_over.png)');
});
$($('.nerFont2')[0]).on('mouseout',function () {
    $($('.span2')[0]).css('display','inline');
    $($('.h22')[0]).css('color','#1ABFEF');
    $($('.nerFont2')[0]).css('backgroundImage','url(http://futures.longrun.com.hk/img/1_part_2_font.png)');
});
$($('.nerFont2')[1]).on('mousemove',function () {
    $($('.span2')[1]).css('display','none');
    $($('.h22')[1]).css('color','#ffffff');
    $($('.nerFont2')[1]).css('backgroundImage','url(http://futures.longrun.com.hk/img/1_part_2_font_over.png)');
});
$($('.nerFont2')[1]).on('mouseout',function () {
    $($('.span2')[1]).css('display','inline');
    $($('.h22')[1]).css('color','#1ABFEF');
    $($('.nerFont2')[1]).css('backgroundImage','url(http://futures.longrun.com.hk/img/1_part_2_font.png)');
});
$($('.nerFont3')[0]).on('mousemove',function () {
    $($('.span3')[0]).css('display','none');
    $($('.h23')[0]).css('color','#ffffff');
    $($('.nerFont3')[0]).css('backgroundImage','url(http://futures.longrun.com.hk/img/1_part_2_font_over.png)');
});
$($('.nerFont3')[0]).on('mouseout',function () {
    $($('.span3')[0]).css('display','inline');
    $($('.h23')[0]).css('color','#1ABFEF');
    $($('.nerFont3')[0]).css('backgroundImage','url(http://futures.longrun.com.hk/img/1_part_2_font.png)');
});
$($('.nerFont3')[1]).on('mousemove',function () {
    $($('.span3')[1]).css('display','none');
    $($('.h23')[1]).css('color','#ffffff');
    $($('.nerFont3')[1]).css('backgroundImage','url(http://futures.longrun.com.hk/img/1_part_2_font_over.png)');
});
$($('.nerFont3')[1]).on('mouseout',function () {
    $($('.span3')[1]).css('display','inline');
    $($('.h23')[1]).css('color','#1ABFEF');
    $($('.nerFont3')[1]).css('backgroundImage','url(http://futures.longrun.com.hk/img/1_part_2_font.png)');
});

