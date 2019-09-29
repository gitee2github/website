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
            v = $('input[name="cla-type-radio"]:checked').val();
            var regphone = /^(\d{4}-|\d{3}-)?(\d{8}|\d{7})$/;
            var regmobile = /^1\d{10}$/;
            var regemail = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;
            $('#tip-cla-label').html('');
            lang = $('html').attr('lang');

            if (v == 0) {
                // individual
                var checkpass = true;
                $("input[type=text]", "#individual-table").each(function (i) {
                    if ($(this).hasClass("require")) {
                        if ($(this).val() == "") {
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
                var email = $('#individual-email').val();
                if (!regemail.test(email)) {
                    if (lang == "zh-cn") {
                        $('#tip-cla-label').html("邮箱格式不正确!");
                    } else {
                        $('#tip-cla-label').html("E-Mail format is incorrent!");
                    }
                    return false;
                }
                var telephone = $('#individual-telephone').val();
                if ((!regphone.test(telephone)) && (!regmobile.test(telephone))) {
                    if (lang == "zh-cn") {
                        $('#tip-cla-label').html("电话格式不正确!");
                    } else {
                        $('#tip-cla-label').html("Telephone format is incorrent!");
                    }
                    return false;
                }
            } else {
                // legalentity
                var checkpass = true;
                $("input[type=text]", "#legalentity-table").each(function (i) {
                    if ($(this).hasClass("require")) {
                        if ($(this).val() == "") {
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
                var email = $('#legalentity-email').val();
                if (!regemail.test(email)) {
                    if (lang == "zh-cn") {
                        $('#tip-cla-label').html("邮箱格式不正确!");
                    } else {
                        $('#tip-cla-label').html("E-Mail format is incorrent!");
                    }
                    return false;
                }
                var telephone = $('#legalentity-telephone').val();
                if ((!regphone.test(telephone)) && (!regmobile.test(telephone))) {
                    if (lang == "zh-cn") {
                        $('#tip-cla-label').html("电话格式不正确!");
                    } else {
                        $('#tip-cla-label').html("Telephone format is incorrent!");
                    }
                }
            }

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
