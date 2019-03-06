(function () {
    var arr = [
        {
            src: 'https://img1.doubanio.com/view/sitesong/small/public/1531674738.jpg',
            title: 'half space, backspace',
            des: 'DVC / 2345次播放'
        },
        {
            src: 'https://img1.doubanio.com/view/site/small/public/28f3a69d8925227.jpg',
            title: 'Nothing is Awkward in Outer Space ',
            dwc: '窗台烟灰缸 Windowsill & Ashtray / 2312次播放'
        },
        {
            src: 'https://img1.doubanio.com/view/site/small/public/69012f1f266e51a.jpg',
            title: 'Is This Love',
            des: 'The Twenties乐队 / 1111次播放'
        },
        {
            src: 'https://img3.doubanio.com/view/sitesong/small/public/1531971586.jpg',
            titile: '04.行星消失的夜空（live in UK）',
            des: 'The Twenties乐队 / 1111次播放',
        },
        {
            src: 'https://img1.doubanio.com/view/sitesong/small/public/1533022079.jpg',
            title: '浪漫手机 ',
            des: '蓝色的小刀 / 1341次播放'
        },
        {
            src: 'http://img3.doubanio.com/view/sitesong/small/public/1531971586.jpg',
            title: '喜欢',
            des: 'WestByWest / 1111次播放'
        },
        {
            src: 'http://img7.doubanio.com/view/site/small/public/79d44ffaedd6a10.jpg',
            title: '北方',
            des: 'Phigma / 1111次播放'
        },
        {
            src: 'https://img3.doubanio.com/view/site/small/public/227f6ddd3eb4323.jpg',
            title: '喜欢',
            des: 'The Twenties乐队 / 1111次播放'
        },
        {
            src: 'https://img3.doubanio.com/view/site/small/public/79d44ffaedd6a10.jpg',
            title: 'Is This Galaxy',
            des: 'Airs / 1111次播放'
        },
        {
            src: 'http://img7.doubanio.com/view/site/small/public/783b535ae9e8f9d.jpg',
            title: '时光坠',
            des: 'Airs / 1111次播放'
        }
    ]
    var arr1 = [
        {
            src: 'http://img3.doubanio.com/view/sitesong/small/public/1531674738.jpg',
            title: 'Is This Love',
            des: 'DVC / 2345次播放'
        },
        {
            src: 'http://img3.doubanio.com/view/site/small/public/28f3a69d8925227.jpg',
            title: '04.行星消失的夜空（live in UK） ',
            dwc: '窗台烟灰缸 Windowsill & Ashtray / 2312次播放'
        },
        {
            src: 'http://img3.doubanio.com/view/site/small/public/e86b6b34e998c87.jpg',
            title: '死士',
            des: 'The Twenties乐队 / 1111次播放'
        },
        {
            src: 'http://img3.doubanio.com/view/site/small/public/62223ca345dcc96.jpg',
            titile: '出租屋女孩',
            des: 'The Twenties乐队 / 1111次播放',
        },
        {
            src: 'http://img7.doubanio.com/view/sitesong/small/public/1531808761.jpg',
            title: '瞳醉（A Boy And His Drunken Dog） ',
            des: '蓝色的小刀 / 1341次播放'
        },
        {
            src: 'http://img3.doubanio.com/view/site/small/public/2174947cdb1c3d7.jpg',
            title: 'Aplastic (EP Version)',
            des: 'WestByWest / 1111次播放'
        },
        {
            src: 'http://img3.doubanio.com/view/site/small/public/1a52f79ce395bab.jpg',
            title: '残疾人之歌',
            des: 'Phigma / 1111次播放'
        },
        {
            src: 'http://img7.doubanio.com/view/site/small/public/44a1702136d3a64.jpg',
            title: 'Letters to Heaven',
            des: 'The Twenties乐队 / 1111次播放'
        },
        {
            src: 'http://img3.doubanio.com/view/sitesong/small/public/1532936087.jpg',
            title: '1911第一回 [Re-mixing 2018]',
            des: 'Airs / 1111次播放'
        },
        {
            src: 'http://img7.doubanio.com/view/site/small/public/f0b1fd180a5159e.jpg',
            title: '★ (THE ONE)',
            des: 'Airs / 1111次播放'
        }
    ]
    function createDom(domArr) {
        var len = domArr.length,
            str = '';
        var oUl = $('<ul>');

        for (var i = 0; i < len; i++) {
            str += '<li class="icon-box"><div class="icon"><div class="player">▶</div><img src="' + domArr[i].src + '" alt=""></div><p class="icon-title">' + domArr[i].title + '</p><p class="icon-des">' + domArr[i].des + '</p><span>' + (i + 1) + '</span></li>'
        }

        var s = $(oUl).append($(str));
        return s;
    }
    var hotlist1 = createDom(arr);
    var hotlist2 = createDom(arr1);
    var hotlist3 = createDom(arr);
    $('.hotlist-cont').tabCon({
        buts: ['最热', '摇滚', '好玩'],
        cards: [hotlist1, hotlist2, hotlist3],
        optionClass: 'hotlist-butBox',
        actionClass: 'hotlist-but',
        butClass: 'action-but'
    })
}())
$('.rotate-box').addSlide({
    imges: ['./imgs/1.jpg', './imgs/2.jpg', './imgs/3.jpg', './imgs/4.jpg', './imgs/5.jpg', './imgs/6.jpg', './imgs/7.jpg'],
    showBtn: 'right', speed: 2500
});

(function () {
    var arr = [
        {
            src: 'https://img3.doubanio.com/view/site/large/public/2c16115adefad8d.jpg',
            title: 'Soil terrapin',
            des: '说唱 Rap'
        },
        {
            src: 'https://img1.doubanio.com/view/site/large/public/0f58532fe5c550b.jpg',
            title: '鞭子情人',
            des: '民谣 Folk'
        },
        {
            src: 'https://img1.doubanio.com/view/site/large/public/35d4f250b1b820c.jpg',
            title: 'Ascension Music Group',
            des: '说唱 Rap'
        },
        {
            src: 'https://img3.doubanio.com/view/site/large/public/65d4b241f9a0a20.jpg',
            title: '包小静',
            des: ' 说唱 Rap'
        },
        {
            src: 'https://img3.doubanio.com/view/site/large/public/d73e53befa3527d.jpg',
            title: '德宏老爹',
            des: ' 说唱 Rap'
        },
        {
            src: 'https://img3.doubanio.com/view/site/large/public/d166f25d5baf5ce.jpg',
            title: '罗艺恒',
            des: ' 流行 Pop'
        },
        {
            src: 'https://img1.doubanio.com/view/site/large/public/8323ba0b5dcfb99.jpg',
            title: '英伦盒子',
            des: ' 民谣 Folk'
        },
        {
            src: 'https://img1.doubanio.com/view/site/large/public/0e04dc7ab8373f8.jpg',
            title: '李蔓',
            des: '流行 Pop'
        }
    ]
    var arr1 = [
        {
            src: 'https://img1.doubanio.com/view/site/large/public/901fbfef74e72b8.jpg',
            title: 'Soil terrapin',
            des: '说唱 Rap'
        },
        {
            src: 'https://img1.doubanio.com/view/site/large/public/fa6401f24691aa7.jpg',
            title: '鞭子情人',
            des: '民谣 Folk'
        },
        {
            src: 'https://img3.doubanio.com/view/site/large/public/322c03e03ee1260.jpg',
            title: 'Ascension Music Group',
            des: '说唱 Rap'
        },
        {
            src: 'https://img3.doubanio.com/view/site/large/public/0e73b36c78226a4.jpg',
            title: '包小静',
            des: ' 说唱 Rap'
        },
        {
            src: 'https://img3.doubanio.com/view/site/large/public/e819cccd372d31e.jpg',
            title: '德宏老爹',
            des: ' 说唱 Rap'
        },
        {
            src: 'https://img3.doubanio.com/view/site/large/public/4c46dd8ed229b34.jpg',
            title: '罗艺恒',
            des: ' 流行 Pop'
        },
        {
            src: 'https://img1.doubanio.com/view/site/large/public/bbd9cceb8bcf598.jpg',
            title: '英伦盒子',
            des: ' 民谣 Folk'
        },
        {
            src: 'https://img3.doubanio.com/view/site/large/public/40f2f5412fe6cd0.jpg',
            title: '李蔓',
            des: '流行 Pop'
        }
    ]
    function creDom(arr) {
        var str = '',
            nextStr = '';
        var len = arr.length;
        var oDiv = $('<div>'),
            wrapDiv = $('<div style="width:645px;height:224px"></div><div></div>');

        for (var i = 0; i < len; i++) {
            if (i < 4) {
                str += '<div class="par-list"><div class="shade"></div><p class="par-img" style="background: url(' + arr[i].src + ');background-size: 125px 125px;"><span class="play-mu">▶</span></p><p class="par-title"><a href="#">' + arr[i].title + '</a></p><p class="par-des">' + arr[i].des + '</p></div>';
            } else {
                nextStr += '<div class="par-list"><div class="shade"></div><p class="par-img" style="background: url(' + arr[i].src + ');background-size: 125px 125px;"><span class="play-mu">▶</span></p><p class="par-title"><a href="#">' + arr[i].title + '</a></p><p class="par-des">' + arr[i].des + '</p></div>';
            }
        }
        $(wrapDiv).eq(0).append(str).end().eq(1).append(nextStr);
        return ($(oDiv).append($(wrapDiv)));
    }
    var per1 = creDom(arr);
    var per2 = creDom(arr1);

    $('.parsonage-box').tabCon({
        buts: ['本周流行音乐人', '上升最快音乐人'],
        cards: [per1, per2],
        cardClass: 'wrap-par',
        optionClass: 'par-butBox',
        butClass: 'action-font',
        actionClass: 'click-font'
    })
}());
(function () {
    var arr = [
        {
            src: 'https://img3.doubanio.com/view/music_index_feature/mid/public/c66623.jpg',
            title: 'Manatee',
            sort: '【音乐人】 ',
            num: '5人关注',
            des: '完全匿名的 techno / IDM 制作人。歌名也没什么意义，网络冲浪就是它了'

        },
        {
            src: 'https://img3.doubanio.com/view/music_index_feature/mid/public/c66416.jpg',
            title: '窗台烟灰缸',
            sort: '【音乐人】',
            num: '26人关注',
            des: '这是一个香港的 free folk 二人，成员是一位北京姑娘和一位纽约的爵士乐手，好听可笑又没正经。'

        },
        {
            src: 'https://img3.doubanio.com/view/music_index_feature/mid/public/c66515.jpg',
            title: '逍遥威士忌',
            sort: '【专辑】',
            num: '地磁卡',
            des: '昆明 Beats Maker Dizkar 的最新精选专辑：从历年来几百个 beats 里精选出的未发表作品。秋天来了，funky 一下。'

        }
    ]
    var arr1 = [
        {
            src: 'https://img1.doubanio.com/view/music_index_feature/mid/public/c66279.jpg',
            title: 'Nowherepuppy and Porn Music Masters',
            sort: '【音乐人】',
            num: '64人关注',
            des: '丢弃了年代感的卧室民谣曲，底噪和歌名一样好：阳台种的南瓜，种下的植物在夏天陆续死去，把丧气唱出来也需要勇气...'

        },
        {
            src: 'https://img3.doubanio.com/view/music_index_feature/mid/public/c66323.jpg',
            title: '死士',
            sort: '【歌曲】',
            num: '熐乐队',
            des: '金属乐和中东音乐真是差了十万八千里，但这支广东乐队偏把它们搞在一起了。'

        },
        {
            src: 'https://img3.doubanio.com/view/music_index_feature/mid/public/c66050.jpg',
            title: '叠贵与熹楚',
            sort: '【音乐人】',
            num: '13人关注',
            des: '叠贵是贵州民间音乐的研习者，熹楚是一支贵阳的后摇滚迷幻乐队。两组人现在走到了一起，带来了一出苗语诗音乐剧。'

        }
    ]
    function creDom(arr) {
        var str = '',
            len = arr.length,
            oDiv = $('<div class="recommend-item"></div>');
        for (var i = 0; i < len; i++) {
            str += '<div class="recommend-action"><div class="action-img"><a href="" style="background:url(' + arr[i].src + ')"><span class="play-mu">▶</span></a></div><p class="maring10">' + arr[i].sort + '</p><p class="recommend-font15px"><a href="">' + arr[i].title + '</a></p><p class="recommend-font13px"><a href="">' + arr[i].num + '</a></p><p class="maring10">' + arr[i].des + '</p> </div>'
        }
        return $(oDiv).html(str);
    }
    var recommend1 = creDom(arr);
    var recommend2 = creDom(arr1);
    var recommend = $('<div class="recommend-main"></div>').append($(recommend1)).append($(recommend2));
    $('.recommend-box').tabCon({
        buts: ['<', '>'],
        cards: recommend,
        optionTitle: '编辑推荐',
        actionClass: 'recommend-but',
        cardClass: 'recommend-card',
        optionClass: 'recommend-butBox',
        butClass: 'si-but',
        optionWay: 'slide'

    })
}());
(function () {
    var arr = [
        {
            src: 'https://img1.doubanio.com/view/subject/m/public/s29834568.jpg',
            title: '1',
            pap: ' 蔡徐坤 '
        },
        {
            src: 'https://img3.doubanio.com/view/subject/m/public/s29828321.jpg',
            title: '丹青千里',
            pap: '易烊千玺 Jackson Yee'
        },
        {
            src: 'https://img3.doubanio.com/view/subject/m/public/s29804776.jpg',
            title: '寻宝游戏',
            pap: '许嵩'
        },
        {
            src: 'https://img3.doubanio.com/view/subject/m/public/s29808194.jpg',
            title: '看不见的城市',
            pap: '惘闻'
        },
        {
            src: 'https://img1.doubanio.com/view/subject/m/public/s29838299.jpg',
            title: 'Summer Magic',
            pap: '红色天鹅绒 Red Velvet'
        },
        {
            src: 'https://img3.doubanio.com/view/subject/m/public/s29811253.jpg',
            title: 'The Time',
            pap: '许魏洲'
        },
        {
            src: 'https://img3.doubanio.com/view/subject/m/public/s29805994.jpg',
            title: '重命名',
            pap: ' 周笔畅 '
        },
        {
            src: 'https://img3.doubanio.com/view/subject/m/public/s29835153.jpg',
            title: 'LOURA',
            pap: '娄艺潇'
        }

    ]
    var arr1 = [
        {
            src: 'https://img1.doubanio.com/view/subject/m/public/s29834568.jpg',
            title: '1',
            pap: ' 蔡徐坤 '
        },
        {
            src: 'https://img3.doubanio.com/view/subject/m/public/s29828321.jpg',
            title: '丹青千里',
            pap: '易烊千玺 Jackson Yee'
        },
        {
            src: 'https://img3.doubanio.com/view/subject/m/public/s29804776.jpg',
            title: '寻宝游戏',
            pap: '许嵩'
        },
        {
            src: 'https://img3.doubanio.com/view/subject/m/public/s29808194.jpg',
            title: '看不见的城市',
            pap: '惘闻'
        },
        {
            src: 'https://img3.doubanio.com/view/subject/m/public/s29811253.jpg',
            title: 'The Time',
            pap: '许魏洲'
        },

        {
            src: 'https://img3.doubanio.com/view/subject/m/public/s29805994.jpg',
            title: '重命名',
            pap: ' 周笔畅 '
        },
        {
            src: 'https://img3.doubanio.com/view/subject/m/public/s29835153.jpg',
            title: 'LOURA',
            pap: '娄艺潇'
        },
        {
            src: 'https://img3.doubanio.com/view/subject/m/public/s29828743.jpg',
            title: '玩',
            pap: '陈粒'
        }
    ]
    var arr2 = [
        {
            src: 'https://img1.doubanio.com/view/subject/m/public/s29836589.jpg',
            title: 'Astroworld',
            pap: 'Travis Scott'
        },
        {
            src: 'https://img3.doubanio.com/view/subject/m/public/s29824053.jpg',
            title: 'Head in the Clouds',
            pap: '88rising'
        },
        {
            src: 'https://img3.doubanio.com/view/subject/m/public/s29795134.jpg',
            title: 'Scorpion',
            pap: 'Drake'
        },
        {
            src: 'https://img3.doubanio.com/view/subject/m/public/s29792561.jpg',
            title: 'Know.',
            pap: 'Jason Mraz'
        },
        {
            src: 'https://img1.doubanio.com/view/subject/m/public/s29822649.jpg',
            title: 'Survive the Summer - EP',
            pap: '伊基·阿塞莉娅 Iggy Azalea'
        },

        {
            src: 'https://img1.doubanio.com/view/subject/m/public/s29822647.jpg',
            title: 'Ta13oo',
            pap: 'Denzel Curry'
        },
        {
            src: 'https://img1.doubanio.com/view/subject/m/public/s29751189.jpg',
            title: 'Palo Santo',
            pap: 'Years & Years'
        },
        {
            src: 'https://img3.doubanio.com/view/subject/m/public/s29818045.jpg',
            title: 'Swimming',
            pap: 'Mac Miller'
        }
    ]
    var arr3 = [
        {
            src: 'https://img1.doubanio.com/view/subject/m/public/s29838299.jpg',
            title: 'Summer Magic',
            pap: '红色天鹅绒 Red Velvet'
        },
        {
            src: 'https://img3.doubanio.com/view/subject/m/public/s29815892.jpg',
            title: 'RED MOON',
            pap: 'MAMAMOO'
        },
        {
            src: 'https://img1.doubanio.com/view/subject/m/public/s29769528.jpg',
            title: '初恋',
            pap: '宇多田ヒカル'
        },
        {
            src: 'https://img1.doubanio.com/view/subject/m/public/s29839027.jpg',
            title: 'TROUBLE',
            pap: '浜崎あゆみ,滨崎步 Ayumi Hamasaki,ayumi hamasaki'
        },
        {
            src: 'https://img3.doubanio.com/view/subject/m/public/s29840380.jpg',
            title: 'NEW KIDS : CONTINUE',
            pap: 'iKON'
        },

        {
            src: 'https://img3.doubanio.com/view/subject/m/public/s29821994.jpg',
            title: 'REtro Futurism',
            pap: 'TRIPLE H'
        },
        {
            src: 'https://img1.doubanio.com/view/subject/m/public/s29779099.jpg',
            title: '#Cookie Jar',
            pap: 'Red Velvet'
        },
        {
            src: 'https://img1.doubanio.com/view/subject/m/public/s29813899.jpg',
            title: 'SUMMER NIGHTS',
            pap: 'TWICE'
        }
    ]
    function creDom(arr) {
        var str = '',
            len = arr.length,
            oDiv = $('<div class="newlist-main"></div>');
        for (var i = 0; i < len; i++) {
            str += '<div class="newimg-box"><div class="newimg-wrap"> <a href="" class="newimg-hre"><img src="' + arr[i].src + '" alt=""></a><a href="" class="newimg-title">' + arr[i].title + '</a><p>' + arr[i].pap + '</p></div> </div>'
        }
        return $(oDiv).html(str);
    }
    var newslist1 = creDom(arr),
        newslist2 = creDom(arr1),
        newslist3 = creDom(arr2),
        newslist4 = creDom(arr3);
    $('.newslist-box').tabCon({
        buts: ['最热', '华语', '欧美', '日韩'],
        cards: [newslist1, newslist2, newslist3, newslist4],
        optionTitle: '新碟榜',
        actionClass: 'newlist-but',
        cardClass: 'newlist-card',
        optionClass: 'newlist-butBox',
        butClass: 'show-but'

    })
}());
(function(){
    function debounce(fun, time) {
        var timer = null;
        return function () {
            var inp = this;
            clearTimeout(timer);
            console.log('sss');
            timer = setTimeout(function () {
                fun.call(inp);
            }, time)
        }
    }
 function getVal(){
     var inp=$('.pass input');
    inp.on('input',
        debounce(function(){
        var val = $(this).val();
        getData(val);
        },500) );
 }
 function getData(value){
$.ajax({
    type:'GET',
    dataType:'jsonp',
    url:'https://api.douban.com/v2/music/search?q='+value+'&count=7',
    success:addDom,
    error:function(){alert('wocao');}
})
 }
 function addDom(data){
     var data=data.musics;
     console.log(data);
     var str='';
     var reg=/https:\/\//;
     var src1='https://images.weserv.nl/?url=';
    
     data.forEach(function(ele,i) {
         var imgs=ele.image.replace(reg,src1);
         str+='<li><a href="'+ele.alt+'"><img src="'+imgs+'" alt=""><div><strong>'+ele.title +'</strong><p>'+ele.author[0].name+'</p></div></a></li>'
         
     });
     $('.pass .show-data').html(str);
     if ($('.show-data').children().length==0){
         $('.show-data').css('display','none');
     }else{
            $('.show-data').css('display','block');
     }
 }
 getVal();

}())