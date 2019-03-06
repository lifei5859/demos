(function ($, root) {
    var body = $(document.body);

    function renDescribe(des) {
        var desBox = body.find('.describe');
        var str = ' <p class="song">' + des.song + '</p>\
            <p class="singer">'+ des.singer + '</p>\
            <p class="album">'+ des.album + '</p>';
        desBox.html(str);
    }
    function renImg(src) {
        var img = body.find('.img-wrpper').find('img')[0];
        img.src = src;
        img.onload = function () {
            root.blurImg(img, body);
        }

    }
    function list(itme, index) {
        var len = itme.length;
        var lists = '';
        var listBox = body.find('.song-list');
        for (var i = 0; i < len; i++) {
            lists += '<li>' + itme[i].song + '</li>'
        }
        listBox.html(lists);
        listBox.find('li').addClass('list-itme');
        if (index) {
            listBox.find('li').removeClass('active').eq(index).addClass('active');
        }
    }
    root.render = function (data) {
        renDescribe(data);
        renImg(data.image);
    }
    root.list = list;

}(window.Zepto, window.player));