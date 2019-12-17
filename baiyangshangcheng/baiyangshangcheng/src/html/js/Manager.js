class Manager {
    constructor(data) {
        this.data = data;
        this.root = null;
    }
    init() {
        this.nav();
        this.navhandler();
    }
    nav() {
        let li1 = this.function(0);
        let li2 = this.function(1);
        let li3 = this.function(2);
        let li4 = this.function(3);
        let li5 = this.function(4);
        let li6 = this.function(5);
        let li7 = this.function(6);
        let li8 = this.function(7);
        let li9 = this.function(8);
        let li10 = this.function(9);
        let li11 = this.function(10);
        this.root = `<ul class="menu">${li1}${li2}${li3}${li4}${li5}${li6}${li7}${li8}${li9}${li10}${li11}</ul>`;
        // $(".menu").html(this.root);<ul class="menu"> </ul>
        document.querySelector(".category").innerHTML = this.root;
        this.navhandler();
        //轮播图
        let lbt = this.data[11].src.map(ele => `<div class="banner_slide_img"><img src="${ele}"></div>`).join("");
        let lbtT = `<div class="swiper-slide">${lbt}</div>`;
        document.querySelector(".swiper-wrapper").innerHTML = lbtT;

    }

    function(a) {
        let left = `  <div class="class">
            <h4><a>${this.data[a].left[0]}</a></h4>
            </div>`;
        let title1 = "";
        if (this.data[a].right.title1.length != 0) {
            title1 += this.data[a].right.title1.map(ele => `<span><a>${ele}</a></span>`).join("");
        }
        let right = "";
        for (let i = 0; i < this.data[a].right.title2.length; i++) {

            let title2 = `<dt><h3><a>${this.data[a].right.title2[i]}</a></h3></dt>`;
            let con = "";
            for (let k = 0; k < this.data[a].right.con[i].length; k++) {
                con += `<a>${this.data[a].right.con[i][k]}</a>`
            }
            right += `<dl>${title2}<dd class="goods-class">${con}</dd></dl>`;
        }
        return `<li>${left}<div class="sub-class"><div class="sub-class-content"><div class="recommend-class">${title1}</div>${right}</div></div></li>`;
        // console.log(right);
    }
    navhandler() {
        // console.log($(".menu").children());
        $(".menu li").on("mouseenter", ".class", function () {
            $(this).siblings().css({ "display": "block" });
            $(this).css({ "background": "white" }, { "opacity": "1" }).children("h4").css({ "margin-left": "10px" });
        });
        $(".menu li").on("mouseleave", ".class", function () {
            $(this).siblings().css({ "display": "none" });
            $(this).css({ "background": "#f8f8f8" }, { "opacity": "0.9" }).children("h4").css({ "margin-left": 0 });
        });
    }



}


$(() => {

    $.ajax({
        type: "get",
        url: "../api/index.php",
        dataType: "json",
        success: function (data) {
            // console.log(data);
            let manager = new Manager(data);
            manager.init();
        }
    });

})