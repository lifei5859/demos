(function ($, root) {
    var audio = new Audio();
    var body = $(document.body);
    function addAuido(src) {
        body.append(audio);
        audio.src = src;
        body.find('.play').addClass('loading');
        $(audio).on('canplay', function () {
            setTimeout(function () {
                body.find('.play').removeClass('loading');
            }, 500)
        })

    }
    function player() {
        if (audio.paused) {
            audio.play();
            body.find('.play').toggleClass('pause');
            audio.autoplay = true;
        } else {
            audio.pause();
            body.find('.play').toggleClass('pause');
            audio.autoplay = false;
        }
    }
    root.cerAuido = {
        audio: audio,
        addAuido: addAuido,
        player: player
    }

}(window.Zepto, window.player));