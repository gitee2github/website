$(function () {
    initClaPage();
    initCurrentDate();
})

function initCurrentDate() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    month = month + 1;

    if (month < 10) month = "0" + month;
    if (date < 10) date = "0" + date;

    time = year + "-" + month + "-" + date;

    if ($('#individual-table').length) {
        $('#individual-date').val(time);
        $('#individual-date').attr("disabled", true);
    }
    if ($('#legalentity-table').length) {
        $('#legalentity-date').val(time);
        $('#legalentity-date').attr("disabled", true);
    }
}

// init cla page
function initClaPage() {
    if ($('#cla-type-table').length) {
        // default show individual
        $('#individual-table').show();
        $('#legalentity-table').hide();
        $('td', '#cla-type-table').click(function () {
            // select checked
            $('input[name="track"]').removeAttr('checked');
            $(this).find('input[name="cla-type-radio"]').prop('checked', true);

            // show or hide
            v = $('input[name="cla-type-radio"]:checked').val();
            if (v == 0) {
                $('#individual-table').show();
                $('#legalentity-table').hide();
            } else {
                $('#individual-table').hide();
                $('#legalentity-table').show();
            }
        });
    }

    if ($('#sign-cla-button').length) {
        $("#sign-cla-button").bind('click', function () {
            v = parseInt($('input[name="cla-type-radio"]:checked').val());
            var regphone = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
            var regmobile = /^1\d{10}$/;
            var regemail = /^[-_A-Za-z0-9.]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;
            $('#tip-cla-label').html('');
            lang = $('html').attr('lang');

            if (v == 0) {
                // individual
                var checkpass = true;
                $("input[type=text]", "#individual-table").each(function (i) {
                    if ($(this).hasClass("require")) {
                        if ($.trim($(this).val()) == "") {
                            checkpass = false;
                            return false;
                        }
                    }
                    return true;
                });
                if (!checkpass) {
                    if (lang == "zh-cn") {
                        $('#tip-cla-label').html("必填字段缺失!");
                    } else {
                        $('#tip-cla-label').html("Required field is missing!");
                    }
                    return false;
                }
                var email = $.trim($('#individual-email').val());
                if (!regemail.test(email)) {
                    if (lang == "zh-cn") {
                        $('#tip-cla-label').html("邮箱格式不正确!");
                    } else {
                        $('#tip-cla-label').html("E-Mail format is incorrent!");
                    }
                    return false;
                }
                var telephone = $.trim($('#individual-telephone').val());
                if (telephone != "") {
                    if ((!regphone.test(telephone)) && (!regmobile.test(telephone))) {
                        if (lang == "zh-cn") {
                            $('#tip-cla-label').html("电话格式不正确!");
                        } else {
                            $('#tip-cla-label').html("Telephone format is incorrent!");
                        }
                        return false;
                    }
                }
            } else {
                // legalentity
                var checkpass = true;
                $("input[type=text]", "#legalentity-table").each(function (i) {
                    if ($(this).hasClass("require")) {
                        if ($.trim($(this).val()) == "") {
                            checkpass = false;
                            return false;
                        }
                    }
                    return true;
                });
                if (!checkpass) {
                    if (lang == "zh-cn") {
                        $('#tip-cla-label').html("必填字段缺失!");
                    } else {
                        $('#tip-cla-label').html("Required field is missing!");
                    }
                    return false;
                }
                var email = $.trim($('#legalentity-email').val());
                if (!regemail.test(email)) {
                    if (lang == "zh-cn") {
                        $('#tip-cla-label').html("邮箱格式不正确!");
                    } else {
                        $('#tip-cla-label').html("E-Mail format is incorrent!");
                    }
                    return false;
                }
                var telephone = $.trim($('#legalentity-telephone').val());
                if (telephone != "") {
                    if ((!regphone.test(telephone)) && (!regmobile.test(telephone))) {
                        if (lang == "zh-cn") {
                            $('#tip-cla-label').html("电话格式不正确!");
                        } else {
                            $('#tip-cla-label').html("Telephone format is incorrent!");
                        }
                        return false;
                    }
                }
            }

            // build json
            var posturl = $(this).attr("posturl");
            var jsonData = {};
            if (v == 0) {
                // individual
                jsonData = {
                    "type": v,
                    "name": $.trim($('#individual-name').val()),
                    "address": $.trim($('#individual-address').val()),
                    "date": $.trim($('#individual-date').val()),
                    "email": $.trim($('#individual-email').val()),
                    "telephone": $.trim($('#individual-telephone').val()),
                    "fax": $.trim($('#individual-fax').val()),
                };
            } else {
                // legalentity
                jsonData = {
                    "type": v,
                    "name": $.trim($('#legalentity-name').val()),
                    // only for legalentity
                    "title": $.trim($('#legalentity-title').val()),
                    // only for legalentity
                    "corporation": $.trim($('#legalentity-corporation').val()),
                    "address": $.trim($('#legalentity-address').val()),
                    "date": $.trim($('#legalentity-date').val()),
                    "email": $.trim($('#legalentity-email').val()),
                    "telephone": $.trim($('#legalentity-telephone').val()),
                    "fax": $.trim($('#legalentity-fax').val()),
                };
            }

            // send request
            $.ajax({
                type: "POST",
                url: posturl,
                data: JSON.stringify(jsonData),
                contentType: "application/json; charset=utf-8",
                crossDomain: true,
                datatype: "json",
                success: function (data) {
                    if (data) {
                        if (data.isSuccess) {
                            $("#reset-cla-button").trigger('click');
                            if (lang == "zh-cn") {
                                alert("签署成功!");
                            } else {
                                alert("Sign succeed!");
                            }
                        } else {
                            if (data.errorCode == 1) {
                                if (lang == "zh-cn") {
                                    alert("服务器处理错误!");
                                } else {
                                    alert("Server handle error!");
                                }
                            } else if (data.errorCode == 2) {
                                if (lang == "zh-cn") {
                                    alert("邮箱已经被注册!");
                                } else {
                                    alert("E-Mail is already registered!");
                                }
                            } else if (data.errorCode == 3) {
                                if (lang == "zh-cn") {
                                    alert("电话已经被注册!");
                                } else {
                                    alert("Telephone is already registered!");
                                }
                            }
                        }
                    }
                    else {
                        if (lang == "zh-cn") {
                            alert("签署失败!");
                        } else {
                            alert("Sign failed!");
                        }
                    }
                },
                error: function () {
                    if (lang == "zh-cn") {
                        alert("签署失败!");
                    } else {
                        alert("Sign failed!");
                    }
                }
            });

            return false;
        });
    }

    if ($('#reset-cla-button').length) {
        $("#reset-cla-button").bind('click', function () {
            $('input[type="text"]', '#individual-table').val('');
            $('input[type="text"]', '#legalentity-table').val('');
            $('#tip-cla-label').html('');
            initCurrentDate();
            return false;
        });
    }
}
