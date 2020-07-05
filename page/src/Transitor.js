import $ from 'jquery'; 

export const goToSection = (sectionId, className) => {
    try {           
        $('.pure-menu-selected').attr('class', 'pure-menu-item');
        if(className.indexOf("pure-menu-selected")===-1){
            className += " pure-menu-selected";
        }
        $('html, body').animate({
            scrollTop: $("#"+sectionId+"-section").offset().top
        }, 500);
    } catch (error) {
    }
};