(function ($) {
    function Option(par) {
        this.wrap = par.far;
        this.but = par.buts;
        this.card = par.cards;
        this.butClass = par.butClass || 'dome';
        this.optionClass = par.optionClass || 'option-box';
        this.actionClass = par.actionClass || 'option';
        this.cardClass = par.cardClass || 'card-box';
        this.optionTitle = par.optionTitle || '';
        this.optionWay = par.optionWay || 'switcher';
        this.init();
    }
    Option.prototype = {
        init: function () {
            var that = this;
            this.len = this.but.length;
            if (this.optionWay == 'switcher') {
                this.createDom();
                $('.' + that.optionClass).children().not('.optionTitle').eq(0).addClass(that.butClass);
                $('.' + that.cardClass).children().eq(0).css('display', 'block');
                $('.' + that.cardClass).children().eq(0).nextAll().css('display', 'none');
                this.butOption();
            } else if (this.optionWay == 'slide') {
                this.createDom1();
                $('.' + that.optionClass).children().not('.optionTitle').eq(0).addClass(that.butClass);
                $('.' + that.cardClass).children().children().css('left', '0px');
                this.butOption1();
            }
        },
        createDom: function () {
            var that = this;
            var str = '';
            var oDiv = $('<div class="' + that.cardClass + '"></div>'),
                oUl = $('<ul class=' + that.optionClass + '></ul>');
            $(this.wrap).append($(oUl)).append($(oDiv));
            if (that.optionTitle) {
                var title = $('<span class="optionTitle">' + that.optionTitle + '</span>');
                $(oUl).append($(title));
            }
            for (var i = 0; i < this.len; i++) {
                if (typeof (this.but[i]) == 'string') {
                    str += '<li class=' + that.actionClass + ' index="' + i + '">' + this.but[i] + '</li>';
                    $(oDiv).append($(this.card[i]));
                } else {
                    $(oUl).append($(this.but[i]));
                    $(oDiv).append($(this.card[i]));
                }
            }
            if (typeof (this.but[0]) == 'string') {
                $(oUl).append($(str));
                if (this.butClass == 'dome') {
                    $(oUl).children().css('width', $(oUl).width() / that.len);
                }
            }
        },
        createDom1: function () {
            var that = this;
            var str = '';
            console.log('aiyou');
            var oDiv = $('<div class="' + that.cardClass + '"></div>'),
                oUl = $('<ul class=' + that.optionClass + '></ul>');
            $(oDiv).html('<div class="slide-wra">')
            $(this.wrap).append($(oUl)).append($(oDiv));

            if (that.optionTitle) {

                var title = $('<span class="optionTitle">' + that.optionTitle + '</span>');
                $(oUl).append($(title));
            }

            for (var i = 0; i < this.len; i++) {

                if (typeof (this.but[i]) == 'string') {
                    str += '<li class=' + that.actionClass + ' index="' + i + '">' + this.but[i] + '</li>';
                } else {
                    $(oUl).append($(this.but[i]));

                }
            }
            $(oDiv).children().append($(this.card));
            if (typeof (this.but[0]) == 'string') {
                $(oUl).append($(str));
                if (this.butClass == 'dome') {
                    $(oUl).children().css('width', $(oUl).width() / that.len);
                }
            }
        },
        butOption: function () {
            var that = this;
            $('.' + that.optionClass).children('.' + that.actionClass).on('click', function () {
                $('.' + that.butClass).removeClass(that.butClass);
                $(this).addClass(that.butClass);
                var index = $(this).attr('index');
                $('.' + that.cardClass).children().css('display', 'none');
                $('.' + that.cardClass).children().eq(index).css('display', 'block');
            })
        },
        butOption1: function () {
            var key = true;
            var that = this;
            var wi = $('.' + that.cardClass).children().children().children().width();
            $('.' + that.optionClass).children('.' + that.actionClass).on('click', function () {
                var index = $(this).attr('index');
                if (key) {
                    if (index == '0') {
                        if ($('.' + that.cardClass).children().children().position().left == -wi) {
                            key = false;
                            $('.' + that.butClass).removeClass(that.butClass);
                            $(this).addClass(that.butClass);
                            $('.' + that.cardClass).children().children().animate({ left: 0 }, 500, function () {
                                key = true;
                            });
                        }
                    } else if (index == '1') {
                        if ($('.' + that.cardClass).children().children().position().left == 0) {
                            key = false;
                            $('.' + that.butClass).removeClass(that.butClass);
                            $(this).addClass(that.butClass);
                            $('.' + that.cardClass).children().children().animate({ left: -wi }, 500, function () {
                                key = true;
                            });
                        }

                    }
                }
            })
        }
    }
    $.fn.extend({
        tabCon: function (variable) {
            variable.far = this || $('body');
            new Option(variable);
        }
    })
}(jQuery))






