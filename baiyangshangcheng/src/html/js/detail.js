
class Detail {
    constructor(data) {
        this.data = data;
    }
    init() {
        this.renderUI();
        this.handler();
    }
    renderUI() {
        let html = "";
        html = `<div class="head">
        <div class="headcontent">
            <span><a href="">首页</a></span><span class="arrow">&gt;</span>
            <span><a>微量元素</a></span><span class="arrow">&gt;</span>
            <span><a>矿物质</a></span><span class="arrow">&gt;</span>
            <span><a>钙</a></span><span class="arrow">&gt;</span>
            <span>${this.data.title}</span>
        </div>
    </div>
    <div class="detail">
        <div class="bigbox">
            <div class="leftbox">
                <div class="bigImg">
                    <img src="${this.data.g1}"
                        alt="" style="display:block;">
                    <div style="display: none;" id="winSelector"></div>
                </div>
                <div class="smallImg">
                    <div id="imageMenu">
                        <ul>
                            <li class="list-img"><img id="nc_small"
                                    src="${this.data.g1}"
                                   alt=""></li>
                            <li class="list-img"><img id="nc_small"
                                    src="${this.data.g2}"
                                    alt=""></li>
                            <li class="list-img"><img id="nc_small"
                                    src="${this.data.g3}"
                                     alt=""></li>
                            <li class="list-img" ><img id="nc_small"
                                    src="${this.data.g4}"
                                     alt=""></li>
                            <li class="list-img"><img id="nc_small"
                                    src="${this.data.g5}"
                                     alt=""></li>
                        </ul>
                    </div>
                </div>
                <div id="bigView" style="display: none;"><img width="1280" height="1280" alt="" src=""></div>
            </div>
            <div class="rightbox">
                <div class="title">
                    <h1>${this.data.title}</h1>
                    <strong></strong>
                </div>
                <div class="twoPrice">
                    <dl>
                        <dt>市场价</dt>
                        <dd class="cost-price"><del>${this.data.priceB}</del></dd>
                    </dl>
                    <dl>
                        <dt>商城价</dt>
                        <dd class="price">
                            <strong>${this.data.priceA}</strong>
                        </dd>
                    </dl>
                    <dl class="rate">
                        <dt>商品评分</dt>
                        <dd><span class="raty" data-score="5" title="很满意" style="width: 100px;"><img
                                    src="https://www.baiyangwang.com/data/resource/js/jquery.raty/img/star-on.png"
                                    alt="1" title="很满意">&nbsp;<img
                                    src="https://www.baiyangwang.com/data/resource/js/jquery.raty/img/star-on.png"
                                    alt="2" title="很满意">&nbsp;<img
                                    src="https://www.baiyangwang.com/data/resource/js/jquery.raty/img/star-on.png"
                                    alt="3" title="很满意">&nbsp;<img
                                    src="https://www.baiyangwang.com/data/resource/js/jquery.raty/img/star-on.png"
                                    alt="4" title="很满意">&nbsp;<img
                                    src="https://www.baiyangwang.com/data/resource/js/jquery.raty/img/star-on.png"
                                    alt="5" title="很满意"><input type="hidden" name="score" value="5"
                                    readonly="readonly"></span><a>共有0条评价</a>(销量：0)</dd>
                    </dl>
                </div>
                <div class="ncs-logistics">
                    <dl class="ncs-freight">
                        <dt>配&nbsp;送&nbsp;至：</dt>
                        <dd>
                            <span>请选择地区</span>
                            <strong>有货</strong>
                            <span>免运费</span>
                        </dd>
                    </dl>
                </div>
                <div class="ncs-buy">
                    <div class="ncs-figure-input">
                        <input type="text" name="" id="quantity" value="1" size="3" maxlength="6" class="input-text">
                        <a href="#" class="increase" nctype="increase">&nbsp;</a> <a href="#" class="decrease"
                            nctype="decrease">&nbsp;</a> </div>

                    <!-- 弹框剩余的库存 -->
                    <div class="ncs-point" style="display: none;">
                        <span>您选择的商品库存<strong nctype="goods_stock">20</strong>件</span>
                    </div>
                    <!-- 两个按钮 -->
                    <div class="ncs-btn">
                        <a href="#" class="addcart ">加入购物车</a>
                        <a href="#" class="buynow ">立即购买</a>
                        <!-- 加入购物车后弹框显示金额数量 -->
                        <div class="ncs-cart-popup" style="display: none;">
                            <dl>
                                <dt>成功添加到购物车<a title="关闭">X</a>
                                </dt>
                                <dd class="decontent">购物车共有 <strong id="bold_num"></strong> 种商品 总金额为：<em></em>
                                </dd>
                                <dd class="btns"><a href="#" class="ncbtn-mini ncbtn-mint"
                                        >查看购物车</a>
                                    <a href="#" class="ncbtn-mini" value=""
                                       >继续购物</a></dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div class="ncs-cti">
                    <hr>
                    <dl>
                        <dt>服务承诺：</dt>
                        <dd>
                            <span> <img
                                    src="${this.data.c}">100%正品保证
                            </span>
                            <span> <img src="${this.data.t}">30天无忧售后
                            </span>
                            <span> <img
                                    src="${this.data.i}">正品保障
                            </span>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="ncs-handle">
                <a><i></i>分享<span>(<em>0</em>)</span></a>
                <a><i></i>收藏商品<span>(<em>0</em>)</span></a>
                <a><i></i>加入对比</a>
                <a><i></i>举&nbsp;报</a>
            </div>
        </div>
    </div>
    <div class="bottom">
        <div class="content">
            <span>商品详情</span>
            <span>商品评价</span>
            <span>购买咨询</span>
        </div>
        <div class="contentimgs">
            <img src="../html/imges/1.jpg" alt="">
            <img src="../html/imges/2.jpg" alt="">
            <img src="../html/imges/3.jpg" alt="">
            <img src="../html/imges/4.jpg" alt="">
        </div>
    </div>`
        $(html).insertAfter("body .nch-breadcrumb-layout");
    }
    handler() {
        $("#imageMenu").children("ul").on("mouseenter", ".list-img", function () {
            $(this).eq(0).addClass("active").siblings().removeClass("active");
            $(this).parents(".smallImg").siblings(".bigImg").children("img").get(0).src = $(this).children("img").get(0).src;
        });

        // $(".bigimgbox").mouseenter(function () {
        //     $(".bigimgbox").siblings().get(0).style.display = "block";
        //     $("#bigView").get(0).style.display = "block";
        // });

        //蒙层和大图片的父元素 $(".leftbox")
        //大图的盒子          $(".bigImg")
        //大图盒子里的大图片  $(".bigImg img")
        //蒙层的盒子          $("#winSelector")
        //放大图片的盒子      $("#bigView")
        //放大图片盒子里的大图  $("#bigView img")

        var imgBox = document.querySelector('.leftbox');
        var minBox = document.querySelector('.bigImg');
        var minImg = document.querySelector('.bigImg img');
        var mask = document.querySelector('#winSelector');
        var maxBox = document.querySelector('#bigView');
        var maxImg = document.querySelector('#bigView img');
        minBox.onmouseenter = function () {
            mask.style.display = "block";
            maxBox.style.display = "block";
        }
        $(".bigImg").mousemove(function (ev) {
            $(this).siblings("#bigView").children("img").get(0).src = $(this).children("img").get(0).src;
            // values: e.clientX, e.clientY, e.pageX, e.pageY
            var moveX = ev.pageX - imgBox.offsetLeft - mask.offsetWidth / 2;
            var moveY = ev.pageY - imgBox.offsetTop - mask.offsetHeight / 2;
            // 遮罩可以运动的最大X方向的距离
            var maxX = minBox.offsetWidth - mask.offsetWidth;
            // 遮罩可以运动的最大Y方向的距离
            var maxY = minBox.offsetHeight - mask.offsetHeight;
            // 设置最大可以移动距离
            if (moveX >= maxX) {
                moveX = maxX;
            }
            if (moveY >= maxY) {
                moveY = maxY;
            }
            // 设置最小可以移动距离
            if (moveX <= 0) {
                moveX = 0;
            }
            if (moveY <= 0) {
                moveY = 0;
            }
            // 大图片可以移动的最大距离
            var biliX = (maxImg.offsetWidth - maxBox.offsetWidth) / maxX;
            // 这个比例相当于是 遮罩移动一像素，大图片需要移动的距离
            var biliY = (maxImg.offsetHeight - maxBox.offsetHeight) / maxY;
            // 给遮罩添加移动
            mask.style.top = moveY + 'px';
            mask.style.left = moveX + 'px';
            // 因为大图片移动的方向是相反的所以要加负号
            maxImg.style.top = -moveY * biliY + 'px';
            maxImg.style.left = -moveX * biliX + 'px';
        });
        minBox.onmouseleave = function () {
            mask.style.display = "none";
            maxBox.style.display = "none";
        };
        //点击上下按钮改变商品的数量
        $(".ncs-figure-input").on("click", "a", function () {
            // console.log($(this));
            if ($(this).attr("class") == "increase") {
                //读取里面的值(数值)；
                let num = $("#quantity").get(0).value * 1;
                $("#quantity").val(num + 1);
            };
            if ($(this).attr("class") == "decrease") {
                let num = $("#quantity").get(0).value * 1;
                $("#quantity").val(num - 1);
                if ($("#quantity").val() == 0) $("#quantity").val(1);
            }
        });
        //给两个按钮(加入购物车和立即购买添加点击事件)
        $(".addcart ").click(function () {
            //显示成功加入购物车的数量和总价的盒子
            $(".ncs-cart-popup").get(0).style.display = "block";
            let count = $("#quantity").val() * 1;
            let price = document.querySelector(".price strong").innerText;
            let total = (count * (parseFloat(price))).toFixed(2);
            $(".decontent").children("strong").eq(0).html(count);
            $(".decontent").children("em").eq(0).html(total);
            //点击关闭详情盒子关闭
            $(".ncs-cart-popup dt a").click(function () {
                $(".ncs-cart-popup").get(0).style.display = "none";
            });
            $(".btns").on("click", "a", function () {
                if ($(this).html() == "继续购物") {
                    $(".ncs-cart-popup").get(0).style.display = "none";
                }
                else if ($(this).html() == "查看购物车") {
                    if (Cookie.get("phone") == undefined && Cookie.get("username") == undefined) {
                        window.location.href = "http://127.0.0.1/code/baiyangshangcheng/src/html/login.html";
                    } else {
                        window.location.href = "http://127.0.0.1/code/baiyangshangcheng/src/static/cart.html";
                    }
                }
                // onclick="location.href='https://www.baiyangwang.com/index.php?act=cart'"
            });
        });
        //立即购买
        $(".buynow ").click(function () {
            if (Cookie.get("phone") == undefined && Cookie.get("username") == undefined) {
                window.location.href = "http://127.0.0.1/code/baiyangshangcheng/src/html/login.html";
            } else {
                window.location.href = "http://127.0.0.1/code/baiyangshangcheng/src/static/cart.html";
            }
        })
        //查看购物车和立即购买功能： 判断页面cookie有没有登录用户名、手机，发送请求到后台获取对应的用户id下的商品购物车信息
    }
}
$(() => {
    var str = decodeURI(window.location.search.slice(1));
    //设计函数
    function StringToObj(str) {
        var o = {};
        var arr = str.split("&");
        //删除前面的id;
        arr.pop();
        //删除后面的空字符
        arr.shift();
        arr.forEach(function (ele) {
            var data = ele.split("=");
            var key = data[0];
            var val = data[1];
            o[key] = val;
        })
        return o;
    }
    let obj = StringToObj(str);
    // console.log(obj);
    let detail = new Detail(obj);
    detail.init();
})

