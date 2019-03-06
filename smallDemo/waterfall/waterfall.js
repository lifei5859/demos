// var arr=[
//     {title:'哎呦，还可以呀1',url:'http://t2.hddhhn.com/uploads/tu/201801/9999/c63fb8c291.jpg'},
//     {title:'哎呦，还可以呀2',url:'http://t2.hddhhn.com/uploads/tu/201707/521/85.jpg'},
//     {title:'哎呦，还可以呀3',url:'http://t2.hddhhn.com/uploads/tu/201707/571/106.jpg'},
//     {title:'哎呦，还可以呀4',url:'http://t2.hddhhn.com/uploads/tu/201707/521/84.jpg'},
//     {title:'哎呦，还可以呀5',url:'http://t2.hddhhn.com/uploads/tu/201707/200/9.jpg'},
//     {title:'哎呦，还可以呀6',url:'http://www.qqssly.com/uploads/allimg/161225/1-161225194222-50.jpg'},
//     {title:'哎呦，还可以呀7',url:'http://www.qqssly.com/uploads/allimg/161225/1-161225194223.jpg'},
//     {title:'哎呦，还可以呀8',url:'http://www.qqssly.com/uploads/allimg/161225/1-161225194223-50.jpg'},
//     {title:'哎呦，还可以呀9',url:'http://www.qqssly.com/uploads/allimg/161225/1-161225194225.jpg'},
//     {title:'哎呦，还可以呀10',url:'0.png'},
//     {title:'哎呦，还可以呀11',url:'1.png'},
//     {title:'哎呦，还可以呀12',url:'2.png'},
//     {title:'哎呦，还可以呀13',url:'3.png'},
//     {title:'哎呦，还可以呀14',url:'4.jpg'},
//     {title:'哎呦，还可以呀15',url:'5.jpg'},
//     {title:'哎呦，还可以呀16',url:'6.jpg'},
//     {title:'哎呦，还可以呀17',url:'7.png'},
//     {title:'哎呦，还可以呀18',url:'8.jpg'},
//     {title:'哎呦，还可以呀19',url:'9.jpg'},
//     {title:'哎呦，还可以呀20',url:'10.jpg'},
//     {title:'哎呦，还可以呀21',url:'http://www.qqssly.com/uploads/allimg/150702/1-150F220591O55.jpg'},

// ]
// var arr1=[
//     {title:'哎呦，还可以呀1',url:'http://t2.hddhhn.com/uploads/tu/201801/9999/c63fb8c291.jpg'},
//     {title:'哎呦，还可以呀2',url:'http://t2.hddhhn.com/uploads/tu/201707/521/85.jpg'},
//     {title:'哎呦，还可以呀3',url:'http://t2.hddhhn.com/uploads/tu/201707/571/106.jpg'},
//     {title:'哎呦，还可以呀4',url:'http://t2.hddhhn.com/uploads/tu/201707/521/84.jpg'},
//     {title:'哎呦，还可以呀5',url:'http://t2.hddhhn.com/uploads/tu/201707/200/9.jpg'},
//     {title:'哎呦，还可以呀6',url:'http://www.qqssly.com/uploads/allimg/161225/1-161225194222-50.jpg'},
//     {title:'哎呦，还可以呀7',url:'http://www.qqssly.com/uploads/allimg/161225/1-161225194223.jpg'},
//     {title:'哎呦，还可以呀8',url:'http://www.qqssly.com/uploads/allimg/161225/1-161225194223-50.jpg'},
//     {title:'哎呦，还可以呀9',url:'http://www.qqssly.com/uploads/allimg/161225/1-161225194225.jpg'},
//     {title:'哎呦，还可以呀10',url:'0.png'},
//     {title:'哎呦，还可以呀11',url:'1.png'},
//     {title:'哎呦，还可以呀12',url:'2.png'},
//     {title:'哎呦，还可以呀13',url:'3.png'},
//     {title:'哎呦，还可以呀14',url:'4.jpg'},
//     {title:'哎呦，还可以呀15',url:'5.jpg'},
//     {title:'哎呦，还可以呀16',url:'6.jpg'},
//     {title:'哎呦，还可以呀17',url:'7.png'},
//     {title:'哎呦，还可以呀18',url:'8.jpg'},
//     {title:'哎呦，还可以呀19',url:'9.jpg'},
//     {title:'哎呦，还可以呀20',url:'10.jpg'},
//     {title:'哎呦，还可以呀21',url:'http://www.qqssly.com/uploads/allimg/150702/1-150F220591O55.jpg'},

// ]
function init(imge) {
    var liArr = [];
    function gain(imgs) {
        var len = imgs.length;
        var str = '';
        for (var i = 0; i < len; i++) {
            str += " <li class='.itmer'><img src=" + imgs[i].image + "><p>" + imgs[i].title + "</p></li>"
        }
        $('.wapper').append($(str));
        $('img').last().on('load', function () {
            $('li').each(function (i, ele) {
                if (i < 4) {
                    liArr[i] = ($('li').eq(i).outerHeight(true));
                } else {
                    var min = Math.min.apply(Math, liArr);
                    var minIndex = liArr.indexOf(min);
                    $('li').eq(i).css({ position: 'absolute', top: min + 'px', left: (minIndex) * $('li:eq(0)').outerWidth(true) });
                    liArr[minIndex] += $('li').eq(i).outerHeight(true);
                }
            })
        });

    }
    var num = 1;
    function scorllEvent() {
        $(window).on('scroll', function () {
            var scrTop = $(window).scrollTop(),
                lastLi = $('li').last(),
                lastLiH = lastLi.offset().top + lastLi.height(),
                documentH = $(window).height();
            if (lastLiH < documentH + scrTop) {
                ++num
                ajax('GET', './getPics.php', 'cpage=' + num, function (data) {
                    var arr = $.parseJSON(data);
                    console.log(arr)
                    gain(arr);
                }, true)
            }
        })
    }
    gain(imge);
    return {
        gain: gain,
        scorllEvent: scorllEvent
    }
}
ajax('GET', './getPics.php', 'cpage=1', function (data) {
    var arr = $.parseJSON(data);
    console.log(arr)
    var liInit = init(arr);
    liInit.scorllEvent();
}, true)
function ajax(method, url, data, callback, fl) {
    var xhr,
        fl = fl || true;
        method=method.toUpperCase();
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHttp');
    }
    method = method.toUpperCase();
    if (method == 'GET') {
        xhr.open(method, url + '?' + data, fl)
        xhr.send();
    } else if (method == 'POST') {
        xhr.open(method, url, fl);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                callback(xhr.responseText);
                console.log(data);
            }
        }
    }
}
