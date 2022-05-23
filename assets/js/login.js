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
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位,且不能出现空格password should be have 6-12 characters and without sapces']

    })

})