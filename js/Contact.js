/*
 * @Author: 冰彦糖
 * @Date: 2020-08-25 10:16:02
 * @LastEditTime: 2020-08-27 10:30:57
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
let navia = 0;
vi = $('.vi');
timer = setInterval(func, 1500);
function func() {
    clearInterval(timer);
    navia -= 40;
    if(navia < -120){
        navia = 0;
    }
    vi.animate({"top":navia},1000)
    
    timer = setInterval(func, 1500);
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
rili(d);
var tableInfo = document.getElementById("tableInfo");  // 获取table中的内容
var totalRow = tableInfo.rows.length;  // 获取table行数
//var cells = departmentsInfo.rows[0].cells.length;  // 获取列数
var pagesize = 24;   // 每页两条
var totalPage = Math.ceil(totalRow/pagesize);  // 计算出总页数=总条数/每页条数
var currentPage;   // 当前页
var startRow;
var lastRow;

// 定义一个换页的函数
function pagination(i){
currentPage = i;
  startRow = (currentPage-1)*pagesize;  //每页显示第一条数据的行数
  lastRow = currentPage*pagesize;  // 每页显示的最后一条数据的行数
document.getElementById("numPage").innerHTML="第"+currentPage+"页";

if(lastRow>totalRow){
    lastRow=totalRow;// 如果最后一页的最后一条数据显示的行数大于总条数，就让最后一条的行数等于总条数
}
  //将数据遍历出来
for(var i=0; i<totalRow; i++){
    var hrow = tableInfo.rows[i];
    if( i>=startRow && i<lastRow ){
    hrow.style.color="#000";
      hrow.style.display="table-row";   // 将循环出来的每一行信息作为一个tr显示到页面
    }else{
    hrow.style.display="none";
    }
}
}

$(function(){ firstPage(); });

function firstPage(){
var i = 1;
pagination(i);
}
function prevPage(){
var i= currentPage-1;
if(i<1) i=currentPage;
pagination(i);
}
function pnextPage(){
var i= currentPage+1;
if(i>totalPage) i= currentPage;
pagination(i);
}
function lastPage(){
var i = totalPage;
pagination(i);
}