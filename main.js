

$(document).ready(function (){
    // let prevPos = 0
    // let curpos = 0
    // let posYprev = $('#clock').width()/2
    // let posXprev = $('#clock').width()/2
    // $('#clock').bind('mousemove',function (e) {
    //     prevPos = curpos
    //     const maxS = $('#clock').width()
    //     var parentOffset = $(this).parent().offset();
    //     var relX = e.pageX - parentOffset.left;
    //     var relY = e.pageY - parentOffset.top;
    //     let ya = 0
    //     let xa = 0
    //
    //
    //     if (relY > maxS || relY < 0) {
    //         relY = posYprev
    //     }
    //     if (relX > maxS || relX < 0) {
    //         relX = posXprev
    //     }
    //     posYprev = relY
    //     posXprev = relX
    //
    //     let xd = 0
    //     let yd = 0
    //     if (relY <= maxS/2) {
    //         yd = maxS/2 -relY
    //     } else  {
    //         yd = -(maxS/2 + relY - maxS)
    //     }
    //     if (relX <= maxS/2) {
    //         xd = -(maxS/2 - relX)
    //     } else  {
    //         xd = relX - maxS/2
    //     }
    //     xd = -xd
    //     let deg  = Math.atan2(yd, xd)*180.0/Math.PI;
    //
    //     if (deg <= 90 && deg > 0) {
    //         curpos = 0
    //     }
    //     if (deg <= 180 && deg > 90) {
    //         curpos = 1
    //     }
    //     if (deg <= -90 && deg > -180) {
    //         curpos = 2
    //     }
    //     if (deg <= 0 && deg > -90) {
    //         curpos = 3
    //     }
    //     deg = 45 + 90*curpos
    //     $('#round').css('rotate',deg + 'deg')
    //     if (curpos > prevPos || (prevPos === 3 && curpos === 0)) {
    //         console.log(curpos,prevPos,curpos > prevPos || (prevPos === 3 && curpos === 0))
    //         var skill = $('.Skill').children().first();
    //         $('.Skill').append(skill);
    //     }
    //     else if (curpos < prevPos || (prevPos === 0 && curpos === 3)) {
    //         console.log(curpos,prevPos,curpos < prevPos || (prevPos === 0 && curpos === 3))
    //         var skill = $('.Skill').children().last();
    //         $('.Skill').prepend(skill);
    //     }
    // })
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

})
