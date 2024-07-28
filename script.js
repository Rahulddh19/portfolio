$(document).ready(function(){

    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('.sticky');
        }else{
            $('.navbar').removeClass('.sticky');
        }
    });
    
    $('.scroll-up-btn').click(function(){
       $('html').animate({scrollTop: 0}); 
    });


    var typed = new Typed(".typing",{
        strings : ["Web Developer","Designer","NFT Artist","Freelancer","Student","Learner"],
        typeSpeed : 80,
        backSpeed: 40,
        loop: true 
    });

    
    // Toggle Menu
    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    });

}); 

