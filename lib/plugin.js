'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YuHtmlFormat = {
    //阐述含有功能
    help: function help() {
        var keyword = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        var functions = [{
            name: 'xss(html)',
            desc: '简单防止XSS攻击'
        }, {
            name: 'HTMLEncode(html)',
            desc: 'html2转义字符'
        }, {
            name: 'HTMLDecode(text)',
            desc: '转义字符2html'
        }, {
            name: 'removeHtmlTab(tab)',
            desc: '去掉html标签'
        }, {
            name: 'html2Escape(sHtml)',
            desc: '普通字符转换成转意符'
        }, {
            name: 'escape2Html(str)',
            desc: '转意符换成普通字符'
        }, {
            name: 'nbsp2Space(str)',
            desc: '&nbsp;转成空格'
        }, {
            name: 'return2Br(str)',
            desc: '回车转为br标签'
        }, {
            name: 'trimBr(str)',
            desc: '去除开头结尾换行,并将连续3次以上换行转换成2次换行'
        }, {
            name: 'mergeSpace(str)',
            desc: '将多个连续空格合并成一个空格'
        }];
        if (keyword) {
            var show = '';
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(functions), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    if (item.desc.includes(keyword)) {
                        show += '\u8BF7\u4F7F\u7528\u65B9\u6CD5' + item.name + '[' + item.desc + ']';
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        } else {
            console.log(functions);
        }
    },

    //简单防止XSS攻击
    xss: function xss(html) {
        var s = html[0];
        for (var i = 1; i < arguments.length; i++) {
            var arg = String(arguments[i]);
            // Escape special characters in the substitution.
            s += arg.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            // Don't escape special characters in the template.
            s += html[i];
        }
        return s;
    },

    //html2转义字符
    HTMLEncode: function HTMLEncode(html) {
        var temp = document.createElement("div");
        temp.textContent != null ? temp.textContent = html : temp.innerText = html;
        var output = temp.innerHTML;
        temp = null;
        return output;
    },

    //转义字符2html
    HTMLDecode: function HTMLDecode(text) {
        var temp = document.createElement("div");
        temp.innerHTML = text;
        var output = temp.innerText || temp.textContent;
        temp = null;
        return output;
    },

    //去掉html标签
    removeHtmlTab: function removeHtmlTab(tab) {
        return tab.replace(/<[^<>]+?>/g, ''); //删除所有HTML标签
    },

    //普通字符转换成转意符
    html2Escape: function html2Escape(sHtml) {
        return sHtml.replace(/[<>&"]/g, function (c) {
            return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c];
        });
    },

    //转意符换成普通字符
    escape2Html: function escape2Html(str) {
        var arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"' };
        return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) {
            return arrEntities[t];
        });
    },

    //&nbsp;转成空格
    nbsp2Space: function nbsp2Space(str) {
        var arrEntities = { 'nbsp': ' ' };
        return str.replace(/&(nbsp);/ig, function (all, t) {
            return arrEntities[t];
        });
    },

    //回车转为br标签
    return2Br: function return2Br(str) {
        return str.replace(/\r?\n/g, "<br />");
    },

    //去除开头结尾换行,并将连续3次以上换行转换成2次换行
    trimBr: function trimBr(str) {
        str = str.replace(/((\s|&nbsp;)*\r?\n){3,}/g, "\r\n\r\n"); //限制最多2次换行
        str = str.replace(/^((\s|&nbsp;)*\r?\n)+/g, ''); //清除开头换行
        str = str.replace(/((\s|&nbsp;)*\r?\n)+$/g, ''); //清除结尾换行
        return str;
    },

    //将多个连续空格合并成一个空格
    mergeSpace: function mergeSpace(str) {
        str = str.replace(/(\s|&nbsp;)+/g, ' ');
        return str;
    }
};

exports.default = YuHtmlFormat;