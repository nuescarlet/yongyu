//主翻页JS
+function () {
    var scroll = 1;//判断是否可以翻页
    var time = 1000;//翻页CD
    var page = 1;//当前页数
    var nowPage = 1;//当前页数镜像
    var top = 0;//main 高度
    var window_height = $(window).height()
    //页面高度自适应
    $("section,#page-window").css("height", window_height + "px");
    $(window).resize(function () {
        window_height = $(window).height()
        $("section,#page-window").css("height", window_height + "px");
    })
    //页面滚动锁定时间
    var cd = function (time) {
        setTimeout(function () {
            scroll = 1
        }, time);
    }
    var change = function () {
        switch (nowPage) {
            case 1:
                $(".dot-btn div:nth-child(1)").addClass("active").siblings().removeClass("active")
                $(".content").removeClass("active")
                break;
            case 2:
                $(".dot-btn div:nth-child(2)").addClass("active").siblings().removeClass("active")
                $(".content").removeClass("active")
                $("#page2 .content").addClass("active")
                break;
            case 3:
                $(".dot-btn div:nth-child(3)").addClass("active").siblings().removeClass("active")
                $(".content").removeClass("active")
                $("#page3 .content").addClass("active")
                break;
            case 4:
                $(".dot-btn div:nth-child(4)").addClass("active").siblings().removeClass("active")
                $(".content").removeClass("active")
                $("#page4 .content").addClass("active")
                break;
            case 5:
                $(".dot-btn div:nth-child(5)").addClass("active").siblings().removeClass("active")
                $(".content").removeClass("active")
                $("#page5 .content").addClass("active")
                break;
        }
    };
    //改变当前页数镜像的方法 用该方法传递值时 调用event()
    var setValue = function (a, event) {
        nowPage = a;
        if (event) {
            event();
        }
    };
    //判断鼠标滚轮触发的事件
    $(document).on("mousewheel DOMMouseScroll", function (e) {
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
            (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
        if (scroll == 1) {
            if (delta > 0) {
                // 向上滚
                scroll = 0;
                if (page > 1) {
                    top += window_height;
                    $('#main').css({'top': top + 'px'})
                    page--
                }
                setValue(page, change)
                cd(time);
            } else if (delta < 0) {
                scroll = 0
                if (page < 5) {
                    top -= window_height;
                    $('#main').css({'top': top + 'px'})
                    page++
                }
                setValue(page, change)
                cd(time);
            }
        }
    });
    //单击按钮时跳转页面
    if (scroll == 1) {
        $('.dot-btn div:nth-child(1)').click(function () {
            top =0;
            $('#main').css({'top': top + 'px'})
            page = 1
            setValue(page, change)
            scroll = 0;
            cd(time);
        })
        $('.dot-btn div:nth-child(2)').click(function () {
            top =- window_height;
            $('#main').css({'top': top + 'px'})
            page = 2
            setValue(page, change)
            scroll = 0;
            cd(time);
        })
        $('.dot-btn div:nth-child(3)').click(function () {
            top =- window_height * 2;
            $('#main').css({'top': top + 'px'})
            page = 3
            setValue(page, change)
            scroll = 0;
            cd(time);
        })
        $('.dot-btn div:nth-child(4)').click(function () {
            top =- window_height * 3;
            $('#main').css({'top': top + 'px'})
            page = 4
            setValue(page, change)
            scroll = 0;
            cd(time);
        })
        $('.dot-btn div:nth-child(5)').click(function () {
            top =- window_height * 4;
            $('#main').css({'top': top + 'px'})
            page = 5
            setValue(page, change)
            scroll = 0;
            cd(time);
        })
    }

}();

//轮播图
+function(){
    var pages=[{src:"img/carousel-pic1.jpg",title:"薪资福利",text:"带薪寒暑假、五险一金、节假日礼包、生日会、感恩父母旅行纪念。"},{src:"img/carousel-pic2.jpg",title:"用人之道",text:"举贤任能、德才并重。扬长避短、创新理念、具有团队精神。"},{src:"img/carousel-pic3.jpg",title:"招聘需求",text:"对工作有较高的热情，有强烈的事业心、责任心和积极的工作态度。"},{src:"img/carousel-pic4.jpg",title:"晋升空间",text:"在年度工作中，对公司有特殊贡献，表现优异的员工，随时予以晋升。"}];
    var nowPage=1;
    var turn=1;
    var cd=function(time){
        setTimeout(function () {
            turn=1
        }, 550);
    };
    $(".btn-right").click(function(){
        if(turn==1){
            turn=0;
            nowPage=++nowPage%4;
            $(".carousel li:nth-child(2)").removeClass("active");
            $(".carousel li:nth-child(3)").addClass("active");
            $(".carousel li:nth-child(1)").css({"left":"-276px"});
            $(".carousel li:nth-child(2)").css({"left":"6px"});
            $(".carousel li:nth-child(3)").css({"left":"276px"});
            $(".carousel ul").append(`
        <li>
            <img src="${pages[(nowPage+1)%4].src}" alt=""/>
                <p>${pages[(nowPage+1)%4].title}</p>
                <p>${pages[(nowPage+1)%4].text}</p>
                </li>
            `)
            setTimeout("$('.carousel li:nth-child(4)').css({'left':'546px'})", 0);
            setTimeout("$('.carousel ul li:nth-child(1)').remove()", 300);
            cd();
        }
    })
    $(".btn-left").click(function(){
        if(turn==1){
            turn=0;
            nowPage--;
            if(nowPage==-1){
                nowPage=3
            }
            $(".carousel li:nth-child(2)").removeClass("active");
            $(".carousel li:nth-child(1)").addClass("active");
            $(".carousel li:nth-child(1)").css({"left":"276px"});
            $(".carousel li:nth-child(2)").css({"left":"546px"});
            $(".carousel li:nth-child(3)").css({"left":"830px"});
            $(".carousel ul").prepend(`
        <li class="left">
                <img src="${pages[(nowPage+3)%4].src}" alt=""/>
                <p>${pages[(nowPage+3)%4].title}</p>
                <p>${pages[(nowPage+3)%4].text}</p>
                </li>
            `)
            setTimeout("$('.carousel li:nth-child(1)').css({'left':'6px'})", 0);
            setTimeout("$('.carousel ul li:nth-child(4)').remove()", 550);
            cd();
        }
    })
    var set = setInterval("$('.btn-right').trigger('click')", 4000);
    $('.carousel').mousemove(function () {
        clearInterval(set)
    }).mouseleave(function () {
        set = setInterval("$('.btn-right').trigger('click')", 4000);
    })
}();