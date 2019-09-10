// 展开二级菜单
function getList(val) {
    switch (val) {
        case "menu":
            $("#nav").slideToggle("slow");
            break;
        case "secondMenu":
            $("#second_menu").slideToggle("slow");
            // $('.second_menu i').eq(0).addClass('down')
            break;
    }
    $('#mask').css({
        "display": "block"
    })
}

// 关闭二级菜单
function hideNav() {
    $("#nav").slideUp("slow");
    $("#second_menu").slideUp("slow");
    $('#mask').css({
        "display": "none"
    })
}

// 二级菜单每项点击后并将其隐藏
$('#nav .list').each(function () {
    $(this).on("click", function () {
        hideNav()
    })
})


// 监听滚动条 当大于 50的时候 关闭二级菜单
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 50) {
        hideNav()
    }
});

var a = 0;

function changeLangauge() {

    var link = document.getElementsByTagName('link')[0]
    if (a % 2) {
        var link = document.createElement("link");
        link.href = "/css/style_zh.css";
        link.type = "text/css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    } else {
        link.href = window.location.href + 'css/common.css'
    }
    a++;
}