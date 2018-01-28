$(document).ready(function () {
    console.log('this is working!');
    var scrollId = $('.scroll');

    //Smooth Scroll
    scrollId.click(function (event) {
        event.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top - $('.intro').height() - 70
        }, 1000)
    });

    //Link Highlighting
    
    $('body').scrollspy({ target: '#navScrollSpy' });
    
    
//    $(window).scroll(function () {
//        
//        var scrollLocation = $(this).scrollTop(); 
//        
//        scrollId.each(function () {
//
//            var sectionOffset = $(this.hash).offset().top;
//            
//            console.log(sectionOffset);
//            
//            if (target.length) {
//                sectionOffset = target.offset().top;
//            };
//
//            if (sectionOffset -100 <= scrollLocation) {
//                $(this).parent().addClass('active');
//                // $(this).parent().siblings().removeClass('active')
//            }

        })
