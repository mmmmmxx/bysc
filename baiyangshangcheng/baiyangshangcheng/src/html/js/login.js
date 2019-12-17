$(() => {
    //监听页面加载
    //图片验证码
    let captchaA = new Captcha({
        content: '0123456789',
        length: 6,
    });
    let code;
    captchaA.draw(document.querySelector('#captchaA'), r => {
        console.log(r, '验证码2');
        code = r.toUpperCase();
    });
    //输入框点击父元素边框添加样式
    $("input").click(function () {
        $(this).parents("dl").css({ "border": "1px solid red" });
    });
    //输入框失去焦点去除边框样式
    $("input").blur(function () {
        $(this).parents("dl").css({ "border": "solid 1px #E6E6E6" });
    });
    //验证码失去焦点
    $("#captcha").blur(function () {
        if ($.trim($(this).val()) != code) {
            $(this).siblings().text("请输入正确的验证码！").css({ "color": "red" });
        } else {
            $(this).siblings().text("");
        }
    });


    //点击登录时验证 验证码是否正确 返回数据到后台查询手机号码/用户名 /密码是否正确。
    $(".submit-div .submit").eq(0).click(function (e) {
        e.preventDefault();
        $("#captcha").trigger("blur");
        var password = $("#password").val();
        var reg = /^1[3-9]\d{9}$/;
        var phone, username;
        if (reg.test($.trim($("#user_name").val())) == true) {
            phone = $("#user_name").val();
            username = "";

        } else {
            username = $("#user_name").val();
            phone = "";
        }



        if ($("#captcha").siblings().text().length == 0) {
            $.ajax({
                type: "post",
                url: "../api/login.php",
                data: { phone, username, password },
                dataType: "json",
                success: function (data) {
                    if (phone == "") {
                        if (data.status != "error") {
                            if (password == data.data.password) {
                                alert("正在跳转，请稍候");
                                if ($(".checkbox").is(":checked") == true) {
                                    Cookie.set("username", username, 7);
                                    Cookie.set("password", password, 7)
                                };
                                setTimeout(() => {
                                    window.location.href = "http://127.0.0.1/code/baiyangshangcheng/src/public/";
                                }, 3000);
                            } else {
                                alert("请输入正确的密码");
                            }
                        } else {
                            alert(data.msg);
                        }
                    }
                    if (username == "") {
                        if (data.status != "error") {
                            if (password == data.data.password) {
                                alert("正在跳转，请稍候");
                                //当点击按钮时保存数据
                                if ($(".checkbox").is(":checked") == true) {
                                    Cookie.set("phone", phone, 7);
                                    Cookie.set("password", password, 7)
                                };
                                setTimeout(() => {
                                    window.location.href = "http://127.0.0.1/code/baiyangshangcheng/src/public/";
                                }, 3000);
                            } else {
                                alert("请输入正确的密码！");
                            }
                        } else {
                            alert(data.msg);

                        }
                    }





                }
            });
        }
    });
})