class lastLis {
    constructor(data) {
        this.data = data;
        this.lis = null;
        this.index = 0;
        this.width = 232;
    }
    init() {
        this.lastlis();
        this.shubiao();
        this.autoplayer();
    }
    lastlis() {
        let title = `<div class="home_lchead_pc">
                        <h3>${this.data[0].title[0]}</h3>
                        <span>${this.data[0].title[1]}</span>
                        </div>`;

        for (var i = 1; i < this.data.length - 1; i++) {
            this.lis += `<li class='lis'>
                            <div class="lis-img">
                                <img src="${this.data[i].img}">
                            </div>
                            <div class="lis-des">
                                <p><a>${this.data[i].title}</a></p>
                                <p>
                                <em>${this.data[i].j}</em>
                                <span>${this.data[i].price}</span>
                                <del>${this.data[i].del}</del>
                                </p>
                            </div>
            
                            </li>`
        }
        let last = `<div class='home_pc_recommend'>${title}<div class='home_recommend_goods'><ul class='ulwidth'>${this.lis}</ul></div></div>`;
        $(".home_main_pc").append($(last));
        $(".home_pc_recommend").append($("<div class='LR'><span class='last_prev'><</span><span class='last_next'>></span></div>"));
    }
    shubiao() {
        $(".home_pc_recommend").mouseenter(function () {
            $(".LR").show();
        });
        $(".home_pc_recommend").mouseleave(function () {
            $(".LR").hide();
        });
        $(".last_prev").on("click", (() => {
            this.prev();
        }))
        $(".last_next").on("click", (() => {
            this.next();
        }))
    }
    next() {
        this.index++;
        if (this.index == this.data.length - 1) this.index = 0;
        $(".ulwidth").get(0).style.left = -(this.index * this.width) + "px";
        // style = "transform: translate3d(0px, 0px, 0px); transition-duration: 1500ms;"
    }
    prev() {
        this.index--;
        if (this.index == -1) this.index = this.data.length - 2;
        $(".ulwidth").get(0).style.left = -(this.index * this.width) + "px";
    }
    autoplayer() {
        this.timer = setInterval(() => {
            this.next();
        }, 1000)
    }
}

















$(() => {
    $.ajax({
        type: "get",
        url: "../api/lastlis.php",
        dataType: "json",
        success: function (data) {
            // console.log(data);
            let lastlis = new lastLis(data);
            lastlis.init();
        }
    });
})