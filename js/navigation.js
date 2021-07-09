console.log('It works!');

(function(){
    let documentElem = $(document);
    let nav = $('.menu-nav');
    let lastScrollUp = 0;

    documentElem.on('scroll' , function(){
        let currentScrollUp = $(this).scrollTop();
        
        if(currentScrollUp > lastScrollUp) {
            nav.addClass('.hidden');
        } else {
            nav.removeClass('.hidden');
        }

        lastScrollUp = currentScrollUp;
    });
})();