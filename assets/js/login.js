$(function() {
    // add events to the link of login 
    $('#link_login').on('click', function() {
            $('.login-box').show()
            $('.reg-box').hide()
        })
        // add events to the link of regester 

    $('#link_reg').on('click', function() {
            $('.login-box').hide()
            $('.reg-box').show()
        })
        // get form object from layui 
    var form = layui.form
    form.verify({
            pwd: [/^[\S]{6,12}$/, '密码必须6到12位,且不能出现空格password should be have 6-12 characters and without sapces'],
            // to varify two times typing should be have the same password 
            repwd: function(value) {
                var pwd = $('.reg-box [name=password]').val()
                if (pwd !== value) {
                    return 'passwords are not mathch'
                }
            }

        })
        // moniter the evets of form submit
    $('#form_reg').on('submit', function(e) {
        e.preventDefault()
        $.post('http://ajax.frontend.itheima.net/api/reguser', {
            username: $('#form_reg[name="username"]').val(),
            password: $('#form_reg[name="password"]').val(),
        }, function(res) {
            if (res.status !== 0) {
                return console.log(res.message);
                console.log('register succesfully');
            }


        })
    })


})