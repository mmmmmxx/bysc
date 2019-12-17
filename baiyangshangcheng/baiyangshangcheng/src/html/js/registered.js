//功能：表单认证+图形验证码+手机短信验证码+注册
$(() => {
    // 表单认证 ：监听对应的输入框失去焦点事件，当失去焦点的时候检查是否满足规则，如果不满足规则就提示！
    //001表单认证
    $("#phone").val("13111111111");
    $("#phone,#image_captcha,#sms_captcha").click(function () {
        $(this).parents("dl").addClass("border");
    });

    //手机号码
    $("#phone").blur(function () {
        let reg = /^1[3-9]\d{9}$/;
        $(this).parents("dl").removeClass("border");
        if (!reg.test($.trim($(this).val()))) {
            $(this).siblings(".error").text("手机号码格式错误").addClass("display")
        } else {
            $(this).siblings(".error").text("").removeClass("display")
        }
    });

    //002-实现图形验证码
    let captchaA = new Captcha({
        length: 6,
    });
    let code;
    captchaA.draw(document.querySelector("#captchaA"), r => {
        // console.log(r, "验证码2");
        code = r.toUpperCase();
    });
    //验证码
    $("#image_captcha,#sms_captcha").blur(function () {
        $(this).parents("dl").removeClass("border");
        if ($.trim($(this).val()).toUpperCase() != code) {
            $(this).siblings(".error").text("验证码错误").addClass("display")
        } else {
            $(this).siblings(".error").text("").removeClass("display")
        }
    });

    //生成随机6位纯字母用户名
    function getusername(n) {
        var arr = ["_", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "s", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        var value = "";
        for (var i = 0; i < n; i++) {
            value += arr[Math.floor(Math.random() * 52)]
        }
        return value;
    }
    //点击下一步按钮
    $("#submitBtn").eq(0).click(function () {
        $("#phone", "#image_captcha", "#sms_captcha").trigger("blur");
        if ($(".error").text().length == 0) {
            $.ajax({
                type: "post",
                url: "../api/registeredA.php",
                data: `phone=${$("#phone").val()}`,
                dataType: "json",
                success: function (data) {
                    // {status: "ok", msg: "手机号码验证成功"} 
                    if (data.status == "ok") {
                        $("#post_form").css({ "display": "none" });
                        $("#register_sms_form").css({ "display": "block" });
                    } else {
                        alert(data.msg);
                    }
                }
            });
        } else {
            alert("请输入正确的信息")
        };


        //生成随机用户名
        $("#member_name").val(getusername(6));
        // 生成6位纯数字随机密码  parseInt(Math.random()*1000000)
        $("#sms_password").val(parseInt(Math.random() * 1000000));
    });

    //下一步之后的操作
    $("#member_name,#sms_password,#sms_email").click(function () {
        $(this).parents("dl").addClass("border");
    });
    //用户名
    $("#member_name").blur(function () {
        $(this).parents("dl").removeClass("border");
        let regname = /^\w{6,20}$/;
        if (!regname.test($.trim($(this).val()))) {
            $(this).parent().siblings(".note").css({ "display": "none" }).siblings("i").text("请输入由数字字母_组成的6-20位的密码").css({ "color": "red" })
        } else {
            $(this).parent().siblings(".note").css({ "display": "block" }).siblings("i").text("");
        }
    });
    //密码
    $("#sms_password").blur(function () {
        $(this).parents("dl").removeClass("border");
        let regname = /^\w{6,20}$/;
        if (!regname.test($.trim($(this).val()))) {
            $(this).parent().siblings(".note").css({ "display": "none" }).siblings("i").text("请输入由数字字母_组成的6-20位的密码").css({ "color": "red" });
        } else {
            $(this).parent().siblings(".note").css({ "display": "block" }).siblings("i").text("");
        }
    });

    //邮箱
    $("#sms_email").blur(function () {
        $(this).parents("dl").removeClass("border");
        let regemail = /^\w+@\w+\.[a-zA-Z]+$/;
        if (!regemail.test($.trim($(this).val()))) {
            $(this).siblings("i").text("请输入正确邮箱格式").css({ "color": "red" });
        } else {
            $(this).siblings("i").text("");
        }
    })
    //点击注册发送请求到后台 查看用户名是否可用 
    $(".submit").eq(1).click(function (e) {
        e.preventDefault();
        $("#member_name,#sms_password,#sms_email").trigger("blur");
        if ($(".checkbox").is(":checked") == false) {
            alert("请阅读并同意协议");
        }
        else if ($("#register_sms_form .next").text().length != 0) {
            alert("请输入正确的注册信息");
        } else {
            $.ajax({
                type: "post",
                url: "../api/registeredB.php",
                data: `phone=${$("#phone").val()}&username=${$("#member_name").val()}&password=${$("#sms_password").val()}&email=${$("#sms_email").val()}`,
                dataType: "json",
                success: function (dataA) {
                    // {status: "ok", msg: "手机号码验证成功"}
                    if (dataA.status == "success") {
                        alert(`${dataA.msg} 正在跳转登录页面`);
                        setTimeout(() => {
                            window.location.href = "http://127.0.0.1/code/baiyangshangcheng/src/html/login.html";
                        }, 3000);

                    } else {
                        alert(dataA.msg);
                    }
                }
            });
        }






    })






})
