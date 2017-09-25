// import '../css/list.css';
import './jquery.niceScroll.min.js';
const theme = {
    touchbehavior: true,
    cursorcolor: "#0096ce",
    cursorwidth: "8px",
    // cursorborder:"0",
    background: "#a0ffa0",
    cursoropacitymin: 1
}

let nice = $(".scroll-box .scroll").niceScroll(theme);

import diy_select from './select.js';

let TTDiy_select = new diy_select({ //参数可选
    TTContainer: 'diy_select', //控件的class
    TTDiy_select_input: 'diy_select_input', //用于提交表单的class
    TTDiy_select_txt: 'diy_select_txt', //diy_select用于显示当前选中内容的容器class
    TTDiy_select_btn: 'diy_select_btn', //diy_select的打开按钮
    TTDiv_select_list: 'diy_select_list', //要显示的下拉框内容列表class
    TTFcous: 'focus', //得到焦点时的class
    TTActive: 'active' //得到焦点时的class
}); //如同时使用多个时请保持各class一致.
let theme2 = {
    touchbehavior: false,
    cursorcolor: "#666",
    cursorwidth: "6px",
    background: "#ccc",
    cursoropacitymin: 1
}

let nice2 = $(".diy_select_list").niceScroll(theme2);

