(function ($, root) {
    var index = 0;
    var body = $(document.body);
    // function getIndex(len){
    //     var index =0;
    //
    // }
    function next(len, num) {
        if (num != undefined) {
            index = num;
        } else {
            if (index >= len - 1) {
                index = 0;
            } else {
                index++;
            }
        }
        actvie(index);
        return index;
    }
    function prev(len) {
        if (index <= 0) {
            index = len - 1;
        } else {
            index--;
        }
        actvie(index);
        return index;
    }
    function actvie(index) {
        body.find('.list-itme').removeClass('active').eq(index).addClass('active');

    }
    console.log(root);
    root.ctrlAuido = {
        next: next,
        prev: prev
    }

}(window.Zepto, window.player));