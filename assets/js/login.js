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

})