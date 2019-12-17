class Mains {
    constructor(data) {
        this.data = data;
        this.main = null;
    }
    init() {
        this.imgF();
        this.partOne();
        this.mains();
    }
    imgF() {
        //主页main第一部分四张图
        let imgf = this.data[0].imgs.map(ele => `<li><a><img src="${ele}"></a></li>`).join("");
        // console.log(imgf);
        $(".home_main_pc").append($("<div class='home_gg_pc'><ul class='home_gg_pc_ul'></ul></div>"));
        $(".home_gg_pc_ul").append($(imgf));
    }
    partOne() {
        //主页main第二部分每点击一次切换5张图
        let partone = `<div class="home_hot_bdan">
                <div class="home_lchead_pc home_hot_head">
                <h3>${this.data[0].partTwo[0].title[0]}</h3><span>${this.data[0].partTwo[0].title[1]}</span></div><div class="swiper-wrapper home_hotbd">`;
        let right = "";
        this.data[0].partTwo[1].map(ele => {

            right += ` <div class="swiper-slide swiper-slide-duplicate" >
            <div class="swiper-slider-img">
                <img src="${ele.img}">
            </div>
              <div class="swiper-slide-des">
                    <p><a>${ele.title}</a></p>
                    <p><span>${ele.price}</span></p>
                 </div>
                 <div class="swiper-slide-buy">
                         <a>${ele.buy}</a>
                 </div>
             </div>`
        }).join("");
        let partT1 = `${partone}${right}</div></div>`;

        // console.log(partT1);
        $(".home_main_pc").append($(partT1));

    }
    mains() {
        //主页第3部分main楼层
        for (var i = 1; i < this.data.length; i++) {
            let title = `<h3>${this.data[i].title}</h3>`;
            let titlelis = this.data[i].titlelis.map(ele => `<a>${ele}<a>`).join("");
            let imgsBig = ` <div class="home_yy_img"><a><img src="${this.data[i].imgBig}"></a></div>`;
            let imgSmall = this.data[i].imgSmall.map(ele => `<li><a><img src="${ele}"></a></li>`).join("");
            this.main += `<div class="home_floor_pc"><div class="home_lchead_pc home_yy_head">` + title + `<div class="home_pc_crumbs">` + titlelis + `</div></div>` + imgsBig + ` <div class="home_yy_goodslist"><ul>` + imgSmall + `</ul></div></div>`;
        };
        $(".home_main_pc").eq(0).append($("<div class='home_yy_pc'></div>"));
        $(".home_yy_pc").eq(0).html(this.main);

    }
}

$(() => {
    $.ajax({
        type: "get",
        url: "../api/mains.php",
        dataType: "json",
        success: function (data) {
            // console.log(data);
            let main = new Mains(data);
            main.init();
        }
    });
})