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
    var layer = layui.layer
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
        var data = {
            username: $('#form_reg [name=username]').val(),
            password: $('#form_reg [name=password]').val(),
        }
        $.post('http://www.liulongbin.top:3007/api/reguser', data, function(res) {
            if (res.status !== 0) {
                // return console.log(res.message);
                return layer.msg(res.message)

            }
            // console.log('register succesfully');
            layer.msg('register succesfully')
                // mimic human's click action 
            $('#link_login').click()


        })
    })

    // -------------------
    $('#form_login').on('submit', function(e) {
        e.preventDefault()
        var data = {
            username: $('#form_login [name=username]').val(),
            password: $('#form_login [name=password]').val(),
        }
        $.post('http://www.liulongbin.top:3008/api/login', data, function(res) {
            if (res.status !== 0) {
                // return console.log(res.message);
                return layer.msg(res.message)

            }
            // console.log('register succesfully');
            layer.msg('register succesfully')
                // mimic human's click action 
            console.log(res.token);



        })
    })

})