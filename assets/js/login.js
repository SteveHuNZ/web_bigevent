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
        // monitering the events of form login
        // 监听登录表单的提交事件
    $('#form_login').submit(function(e) {
        // 阻止默认提交行为
        e.preventDefault()
        $.ajax({
            url: 'http://www.liulongbin.top:3008/api/login',
            method: 'POST',
            // 快速获取表单中的数据
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('登录失败！')
                }
                layer.msg('登录成功！')
                    // 将登录成功得到的 token 字符串，保存到 localStorage 中
                localStorage.setItem('token', res.token)
                    // 跳转到后台主页
                location.href = '/index.html'
            }
        })
    })





})