function loginHide() {
    var userName = $("#username").val();
    var userPass = $("#password").val();
    if (!userName) {
        alert("用户名不能为空");
    } else if (!userPass) {
        alert("密码不能为空");
    } else {
        $('#login').addClass('hide');
    }
 }

 function loginShow() {
    $("#password").val('');
    $('#login').removeClass('hide');
 }

   

function tab1() {
    $('.tab').removeClass('show');
    $('#tab1').addClass('show');
}

function tab2() {
    $('.tab').removeClass('show');
    $('#tab2').addClass('show');
}

function tab3() {
    $('.tab').removeClass('show');
    $('#tab3').addClass('show');
}

function tab4() {
    $('.tab').removeClass('show');
    $('#tab4').addClass('show');
}


