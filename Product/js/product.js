/**
 * Created by ge on 2017/6/10.
 */
+function(){
    $(".product li").click(function(){
        $(this).addClass("active").siblings().removeClass("active")
    })
    $(".product li:nth-child(1)").click(function(){
        $(".choose-line").css({"left":"-122px"})
    })
    $(".product li:nth-child(2)").click(function(){
        $(".choose-line").css({"left":"0px"})
    })
    $(".product li:nth-child(3)").click(function(){
        $(".choose-line").css({"left":"122px"})
    })
}();