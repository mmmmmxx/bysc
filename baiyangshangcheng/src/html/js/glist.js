class Goodlist {
    constructor(data) {
        this.data = data;
    }
    init() {
        this.renderUI();
        this.handler();
    }
    renderUI() {
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
                        <em>￥${ele.priceA}</em>
                        <em>￥${ele.priceB}</em>
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
        // let page = `<div id='page' class='page'></div>`;
        // $(page).insertAfter($(".items"));
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
        });
    }
};

$(() => {
    let typeVal = "default";
    new Promise(function (resolve, reject) {
        getPageWithCount(1, typeVal, resolve);
    }).then(function () {
        getPageCount();
    });
    //根据页码获取商品数据
    function getPageWithCount(page, type, callBack) {
        $.ajax({
            type: "get",
            //获取的数据是后台数据
            url: "../api/getgoodlist.php",
            data: `page=${page}&type=${type}`,
            dataType: "json",
            success: (data) => {
                //渲染页面
                let goodlist = new Goodlist(data);
                goodlist.init();
                if (callBack) callBack();
                //点击跳转到详情页
                $(".content").on("click", ".bigimg", function () {
                    //当前标签的索引
                    // console.log($(this).index()); 
                    //当前标签对应的商品id；
                    let id = data[$(this).parents(".item").index()]["good_id"];
                    $.ajax({
                        type: "get",
                        url: "../api/detail.php",
                        data: `good_id=${id}`,
                        dataType: "json",
                        success: function (data) {
                            // console.log(data);
                            //数组转为字符串
                            var obj = data[0];
                            var res = "";
                            for (var key in obj) {
                                val = obj[key];
                                res += `${key}=${val}&`;
                            }
                            window.location.href = "http://127.0.0.1/code/baiyangshangcheng/src/static/detail.html?" + res;
                        }
                    });
                });

                /* 实现点击添加商品到购物车的功能 */
                $(".items").on("click", ".cart", function () {
                    if (!Cookie.get("username") && !Cookie.get("phone")) {
                        window.location.href = `http://127.0.0.1/code/baiyangshangcheng/src/html/login.html`;
                    }
                    /* 获取当前商品的ID */
                    console.log(data[$(this).parents(".item").index()]["good_id"]);
                    let good_id = data[$(this).parents(".item").index()]["good_id"];
                    $.ajax({
                        type: "get",
                        url: "../api/cart.php",
                        data: { type: "add", good_id: good_id, id: `${Cookie.get("id")}` },
                        dataType: "json",
                        success: function (response) {
                            if (response.status == "success") {
                                $(".new_msg").text($("new_msg").text() * 1 + 1);
                            }
                        }
                    });
                });

                /* 发请求获取购物车中商品的数量 */
                /* 检查登录状态，如果已经登录那么就请求获取购物车的数量 */
                if (Cookie.get("id")) {
                    $.ajax({
                        url: "../api/getTotalCount.php",
                        data: {
                            id: `${Cookie.get("id")}`
                        },
                        dataType: "json",
                        success: function ({ total }) {
                            // console.log(total);
                            $(".new_msg").text(total);
                        }
                    });
                }
                ///* 打开购物车页面 */
                $("#rtoolbar_cart").click(() => window.location.href = "http://127.0.0.1/code/baiyangshangcheng/src/static/cart.html");

            }
        });
    };
    //
    //获取页码并将页码渲染到页面
    function getPageCount() {
        $.ajax({
            type: "get",
            url: "../api/getPageCount.php",
            dataType: "json",
            success: (data) => {
                // console.log(data);data是一个对象
                let res = "";
                for (let i = 0; i < data.count; i++) {
                    res += `<li href="javascript:;">${i + 1}</li>`
                };
                $("#page").html("<ul></ul>");
                $("#page ul").append($(res));
                $("#page ul").children().eq(0).addClass("licol");
                //点击页码切换样式重新获取请求 
                $("#page").children("ul").on("click", "li", function () {
                    getPageWithCount($(this).text(), "default");
                    $(this).addClass("licol").siblings().removeClass("licol");
                });
            }
        });
    };
    //排序
    $(".box").on("click", "span", function () {
        typeVal = $(this).data("type");
        getPageWithCount(1, typeVal);
        $("#page ul").children().eq(0).addClass("licol").siblings().removeClass("licol");
    });

});