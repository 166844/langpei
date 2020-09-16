/**
 * Created by TT on 16/8/11.
 rem  他的父级是html 谷歌：16px  1rem=16px;  火狐：15px 1rem=15px;
 em   他的父级是自己定义当前的div的字体大小
 */
//js动态获取屏幕宽度,并设置根元素大小 设计图规格为750px
    document.addEventListener('DOMContentLoaded', function () {
        var html = document.documentElement;
        var windowWidth = html.clientWidth;
        html.style.fontSize = windowWidth / 7.5 + 'px';
    }, false);
