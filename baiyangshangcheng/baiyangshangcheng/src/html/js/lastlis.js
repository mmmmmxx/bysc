class lastLis {
    constructor(data) {
        this.data = data;
        this.lis = null;
    }
    init() {
        this.lastlis();
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
                                <p>${this.data[i].title}</p>
                                <p>
                                <em>${this.data[i].j}</em>
                                <span>${this.data[i].price}</span>
                                <del>${this.data[i].del}</del>
                                </p>
                            </div>
            
                            </li>`
        }
        let last = `<div class='home_pc_recommend'>${title}<div class='home_recommend_goods'><ul class='ulwidth'>${this.lis}</ul></div></div>`;
        $(".home_main_pc").append($(last))
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