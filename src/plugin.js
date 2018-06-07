const YuHtmlFormat = {
    //阐述含有功能
    help(keyword = ''){
        let functions = [
            {
                name:'xss(html)',
                desc:'简单防止XSS攻击',
            },
            {
                name:'HTMLEncode(html)',
                desc:'html2转义字符',
            },
            {
                name:'HTMLDecode(text)',
                desc:'转义字符2html',
            },
            {
                name:'removeHtmlTab(tab)',
                desc:'去掉html标签',
            },
            {
                name:'html2Escape(sHtml)',
                desc:'普通字符转换成转意符',
            },
            {
                name:'escape2Html(str)',
                desc:'转意符换成普通字符',
            },
            {
                name:'nbsp2Space(str)',
                desc:'&nbsp;转成空格',
            },
            {
                name:'return2Br(str)',
                desc:'回车转为br标签',
            },
            {
                name:'trimBr(str)',
                desc:'去除开头结尾换行,并将连续3次以上换行转换成2次换行',
            },
            {
                name:'mergeSpace(str)',
                desc:'将多个连续空格合并成一个空格',
            }
        ]
        if(keyword){
            let show = ``;
            for (let item of functions){
                if(item.desc.includes(keyword)){
                    show += `请使用方法${item.name}[${item.desc}]`;
                }
            }
        }else{
            console.log(functions);
        }
    },
    //简单防止XSS攻击
    xss(html){
        let s = html[0];
        for (let i = 1; i < arguments.length; i++) {
            let arg = String(arguments[i]);
            // Escape special characters in the substitution.
            s += arg.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
            // Don't escape special characters in the template.
            s += html[i];
        }
        return s;
    },
    //html2转义字符
    HTMLEncode(html) {
        let temp = document.createElement("div");
        (temp.textContent != null) ? (temp.textContent = html) : (temp.innerText = html);
        let output = temp.innerHTML;
        temp = null;
        return output;
    },
    //转义字符2html
    HTMLDecode(text) {
        let temp = document.createElement("div");
        temp.innerHTML = text;
        let output = temp.innerText || temp.textContent;
        temp = null;
        return output;
    },
    //去掉html标签
    removeHtmlTab(tab) {
        return tab.replace(/<[^<>]+?>/g,'');//删除所有HTML标签
    },
    //普通字符转换成转意符
    html2Escape(sHtml) {
        return sHtml.replace(/[<>&"]/g,function(c){return {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c];});
    },
    //转意符换成普通字符
    escape2Html(str) {
        let arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'};
        return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];});
    },
    //&nbsp;转成空格
    nbsp2Space(str) {
        let arrEntities = {'nbsp' : ' '};
        return str.replace(/&(nbsp);/ig, function(all, t){return arrEntities[t]})
    },
    //回车转为br标签
    return2Br(str) {
        return str.replace(/\r?\n/g,"<br />");
    },
    //去除开头结尾换行,并将连续3次以上换行转换成2次换行
    trimBr(str) {
        str=str.replace(/((\s|&nbsp;)*\r?\n){3,}/g,"\r\n\r\n");//限制最多2次换行
        str=str.replace(/^((\s|&nbsp;)*\r?\n)+/g,'');//清除开头换行
        str=str.replace(/((\s|&nbsp;)*\r?\n)+$/g,'');//清除结尾换行
        return str;
    },
    //将多个连续空格合并成一个空格
    mergeSpace(str) {
        str=str.replace(/(\s|&nbsp;)+/g,' ');
        return str;
    }
}

export default YuHtmlFormat;
