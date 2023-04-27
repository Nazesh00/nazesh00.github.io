$(document).ready(function (){
    $('.move-to-nav').click(function() {
        console.log($('.aside-links').children())
        for (let ch of $('.aside-links').children()) {
            ch.classList.add('dropdown-link')
            ch.classList.remove('aside-link')
            $('.dropdown-content').append(ch)
        }
        $('#aside').css('display','none')
        $('#section').css('width','100%')
    });

    $('.Skill').on('wheel',function (e){
        e.preventDefault()
        var deltaY = e.originalEvent.deltaY
        if (deltaY > 0) {
            var skill = $('.Skill').children().first();
            $('.Skill').append(skill);
        } else {
            var skill = $('.Skill').children().last();
            $('.Skill').prepend(skill);
        }
    })
    $('.Language').on('wheel',function (e){
        e.preventDefault()
        var deltaY = e.originalEvent.deltaY
        if (deltaY > 0) {
            var lang = $('.Language').children().first();
            $('.Language').append(lang);
        } else {
            var lang = $('.Language').children().last();
            $('.Language').prepend(lang);
        }
    })
    $('.Certificates').on('wheel',function (e){
        e.preventDefault()
        var deltaY = e.originalEvent.deltaY
        if (deltaY > 0) {
            var skill = $('.Certificates').children().first();
            $('.Certificates').append(skill);
        } else {
            var skill = $('.Certificates').children().last();
            $('.Certificates').prepend(skill);
        }
    })
    $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > $('#Experience').offset().top -400 && scrollTop < $('#Experience').offset().top + 400) {
            $('#Experience').children().first().css('color','#D4D4D4FF')
            setTimeout(function () {
                $('#Experience').children().first().css('color','white')
            },200)
        }
        if (scrollTop > $('#Education').offset().top -400 && scrollTop < $('#Education').offset().top + 400) {
            $('#Education').children().first().css('color','#D4D4D4FF')
            setTimeout(function () {
                $('#Education').children().first().css('color','white')
            },200)
        }
        if (scrollTop > $('#Research').offset().top -400 && scrollTop < $('#Research').offset().top + 400) {
            $('#Research').children().first().css('color','#D4D4D4FF')
            setTimeout(function () {
                $('#Research').children().first().css('color','white')
            },200)
        }
    })
})
