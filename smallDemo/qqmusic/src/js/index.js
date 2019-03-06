var $ = window.Zepto;
window.player = {};
var root = window.player;
var body = $(document.body);
var list;
var audio;
function bindClick(len) {
    var index;
    body.find('.next,.prev').on('click', function () {
        if ($(this).hasClass('next')) {
            index = root.ctrlAuido.next(len);
            console.log(index);
        } else if ($(this).hasClass('prev')) {
            index = root.ctrlAuido.prev(len);
        }
        root.cerAuido.addAuido(list[index].audio);
        root.render(list[index]);
    });
    body.find('.play').on('click', function () {
        root.cerAuido.player();

    });
    audio.onended = function () {
        index = root.ctrlAuido.next(len);
        root.cerAuido.addAuido(list[index].audio);
        root.render(list[index]);
    }
    body.find('.show-list').on('click', function () {
        body.find('.list-box').addClass('show');
    });
    body.find('.colse-btn').on('click', function () {
        body.find('.list-box').removeClass('show');
    })
    body.find('.list-itme').on('click', function () {
        var i = $(this).index()
        index = root.ctrlAuido.next(len, i);
        root.cerAuido.addAuido(list[i].audio);
        root.render(list[i]);
        // root.cerAuido.player();
    });
}
function bindTouch() {
    var aggrPro = body.find('.aggr-pro');
    var btn = body.find('.pro-btn');
    var btn1 = body.find('.pro-all');
    var left = aggrPro.offset().left,
        width = aggrPro.offset().width;
    btn.on('touchstart', function () {
        root.ctrlPro.renderTime('', root.ctrlPro.stop('true'));
    }).on('touchmove', function (e) {
        e.preventDefault();
        var x = e.changedTouches[0].clientX;
        var percent = x - left;
        if (percent >= width) {
            percent = width;
        } else if (percent <= 0) {
            percent = 0;
        }
        body.find('.pro-btn').css('left', percent);
    }).on('touchend', function (e) {
        e.preventDefault()
        var x = e.changedTouches[0].clientX;
        var percent = x - left;
        if (percent >= width) {
            percent = width;
        } else if (percent <= 0) {
            percent = 0;
        }
        var time = audio.duration * percent / width;
        root.ctrlPro.renderTime(time, root.ctrlPro.stop('false'))
    });
    btn1.on('touchstart', function (e) {
        e.preventDefault()
        var x = e.changedTouches[0].clientX;
        var percent = x - left;
        if (percent >= width) {
            percent = width;
        } else if (percent <= 0) {
            percent = 0;
        }
        var time = audio.duration * percent / width;

        root.ctrlPro.renderTime(time, root.ctrlPro.stop('false'))
    })
}
function getData(url) {
    $.ajax({
        type: 'GET',
        url: url,
        success: function (data) {
            list = data;
            audio = root.cerAuido.audio;
            console.log(data);
            root.render(data[0]);
            root.list(data);
            root.cerAuido.addAuido(list[0].audio);
            console.log(root);
            bindClick(data.length);
            bindTouch();
            root.ctrlPro.getDuration();
            root.ctrlPro.renderTime();
        },
        error: function () {
            console.log('wocao');
        }
    })
}
getData('mock/data.json');