import clone from './clone'

(function (win, C) {

    // 解决路由多次请求问题
    C.clone = clone;

    // 创建 script 标签
    C.createScript = function (src = '', id = 'app') {
        if (document.querySelector('#' + id)) {
            return;
        }
        var script = document.createElement('script');
        script.src = src;
        script.id = '#' + id;
        document.getElementsByTagName('head')[0].appendChild(script);
    }


})(window, window['C'] = window['C'] || {});