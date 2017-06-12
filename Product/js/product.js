/**
 * Created by ge on 2017/6/10.
 */
+function(){
    $(".product li").click(function(){
        $(this).addClass("active").siblings().removeClass("active")
    })
    $(".product li:nth-child(1)").click(function(){
        $(".choose-line").css({"left":"-122px"})
        $(".product>div:last-child div:nth-child(1)").addClass("active").siblings().removeClass("active")
    })
    $(".product li:nth-child(2)").click(function(){
        $(".choose-line").css({"left":"0px"})
        $(".product>div:last-child div:nth-child(2)").addClass("active").siblings().removeClass("active")
    })
    $(".product li:nth-child(3)").click(function(){
        $(".choose-line").css({"left":"122px"})
        $(".product>div:last-child div:nth-child(3)").addClass("active").siblings().removeClass("active")
    })
}();