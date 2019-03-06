(function ($, root) {
    var audio = root.cerAuido.audio;
    var body = $(document.body);
    function timeText(oTime) {
        var time = '',
            s, S, m, M;
        m = Math.floor(oTime % 3600 / 60);
        M = m < 10 ? '0' + m : m;
        s = Math.floor(oTime % 3600 % 60);
        S = s < 10 ? '0' + s : s;
        time = M + ':' + S;
        return time;
    }
    function getDuration() {
        audio.oncanplay = function () {
            var duration = audio.duration;
            var totalTime = timeText(duration);
            body.find('.aggr-time').html(totalTime);
        }
    }
    function getNowTime() {
        // $(audio).on('timeupdate', function () {
        //     var currentTime = audio.currentTime;
        // var nowTime = timeText(currentTime);
        // body.find('now-time').html(nowTime);
        return audio.currentTime;
        // })
    }
    function getPro(currentTime) {
        var duration = audio.duration;
        var nowPro = Math.round(currentTime / duration * 100) + '%';
        return nowPro;
    }
    function renderTime(time, key) {
        var tStr = '';
        key = key || 'true';
        console.log(key == 'true');
        $(audio).on('timeupdate', function () {
            if (time) {
                console.log(time);
                audio.currentTime = time;
                time = '';
            }
            var currentTime = getNowTime();
            var nowTime = timeText(currentTime);

            body.find('.now-time').html(nowTime);
            var nowPro = getPro(currentTime);
            tStr = nowPro;
            // console.log(tStr);
            body.find('.now-pro').css('width', tStr);
            body.find('.pro-btn').css('left', tStr)

        })
        if (key == 'false') {
            $(audio).off('timeupdate');
        }
    }
    function getPro1(upWidth, duration) {
        var w = body.find('.aggr-pro').width();
        var scale = upWidth / w;
        var time = duration * scale;
    }
    function stop(key) {
        if (key == 'true') {
            return 'false'
        } else {
            return 'true'
        }
    }
    root.ctrlPro = {
        getDuration: getDuration,
        renderTime: renderTime,
        stop: stop,
        getPro1: getPro1
    };
    // console.log(nowTime,duration);
}(window.Zepto, window.player));