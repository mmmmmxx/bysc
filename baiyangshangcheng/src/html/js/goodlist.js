class Goodlist {
    constructor(data) {
        this.data = data;
    }
    init() {
        this.renderUI();
        this.handler();
    }
    renderUI() {
        let title = `<div class='nch-breadcrumb wrapper'>
                        <span><a>首页</a></span>
                        <span class="arrow">></span>
                        <span>微量元素<span>
                     </div>`;
        let btn = ` <div class='bigbox'>
                    <div class='box'>
                        <span>排序方式</span>
                        <span class='typebtn' data-type='default'>默认</span>
                        <span class='typebtn' data-type='saleC'>销量</span>
                        <span class='typebtn' data-type='hot'>人气</span>
                        <span class='typebtn' data-type='price'>价格</span>
                    </div>
                </div>`;
        $(".nch-breadcrumb-layout").html(title);
        $("<ul class='items'></ul>").insertAfter("body .nch-breadcrumb-layout");
        $(btn).insertAfter("body .nch-breadcrumb-layout");
        let html = "";
        html = this.data.map(ele => `
            <li class='item'>
                <div class='content'>
                <div class='bigimg'><a><img src='${ele.g1}'></a></div>
                <div class='bottom'>
                    <div class='smallimgs'>
                        <ul>
                            <li class='active'><a><img src='${ele.g1}'></a></li>
                            <li><a><img src='${ele.g2}'></a></li>
                            <li><a><img src='${ele.g3}'></a></li>
                            <li><a><img src='${ele.g4}'></a></li>
                            <li><a><img src='${ele.g5}'></a></li>
                        </ul>
                    </div>
                    <div class='title'><a>${ele.title}</a></div>
                    <div class='price'>
                        <em>${ele.priceA}</em>
                        <em>${ele.priceB}</em>
                        <div class='cti'>
                            <span><img src='${ele.c}'></span>
                            <span><img src='${ele.t}'></span>
                            <span><img src='${ele.i}'></span>
                        </div>
                    </div>
                    <div class='db'><span><i></i>加入对比</span></div>
                    <div class='sell'>
                        <ul>
                            <li>
                                <a>${ele.sellcount}</a>
                                <p>商品销量</p>
                            </li>
                            <li>
                                <a>${ele.pingcount}</a>
                                <p>用户评论</p>
                            </li>
                        </ul>
                    </div>
                    <div class='store'><a>${ele.store}</a></div>
                    <div class='cart'><a>加入购物车</a></div>
               </div>
               </div>
            </li>
            `).join("");
        $(".items").html(html);
        let page = `<div id='page' class='page'></div>`;
        $(page).insertAfter($(".items"));

    }
    handler() {
        //5张小图li添加鼠标移入事件 
        //移入小图时改变大图的src
        $(".smallimgs").on("mouseenter", "li", function () {
            $(this).eq(0).addClass("active").siblings().removeClass("active");
            $(this).parents(".bottom").siblings(".bigimg").get(0).querySelector("img").src = $(this).get(0).querySelector("img").src;
        });
        //给每一个li添加鼠标移入事件
        //移入时改变bottom的定位 改变content的层级 以及高度 加上外边框；
        $(".items").on("mouseenter", ".item", function () {
            $(this).children(".content").height("445px").css({ "border": "2px solid red" });
            $(this).children(".content").css({ "z-index": 20 });
            $(this).children(".content").children(".bottom").animate({ top: 180 }, 300);
        });
        //移出时还原
        $(".items").on("mouseleave", ".item", function () {
            $(this).children(".content").height("370").css({ "border": "solid 1px #F0F0F0" });
            $(this).children(".content").css({ "z-index": 12 });
            $(this).children(".content").children(".bottom").animate({ top: 230 }, 1);
        })

    }
}





$(() => {
    $.ajax({
        type: "get",
        //获取的php文件引入了json文件
        url: "../api/goodlist.php",
        // data: "data",
        dataType: "json",
        success: function (data) {
            let goodlist = new Goodlist(data);
            goodlist.init();
        }
    });
})