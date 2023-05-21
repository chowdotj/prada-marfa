const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

 
let index = 0;
const totalArtItems = $(".art-item").length; 

 $(window).on("load",function(){
    $(".preloader").addClass("loaded");
 })

$(document).ready(function () {

	// set lightbox img max height
    const wHeight = $(window).height();
    $(".lightbox-img").css("max-height",wHeight+"px");

    // lightbox 
    $(".art-item-inner").click(function(){
        index = $(this).parent(".art-item").index();
        $(".lightbox").addClass("open");
        lightboxSlideShow();
    })
    $(".lightbox .prev").click(function(){
     if(index == 0){
          index = totalArtItems-1;
     }
     else{
         index--;
     }
     lightboxSlideShow();
    })
    $(".lightbox .next").click(function(){
        if(index == totalArtItems-1){
            index = 0
        }
        else{
            index++;
        }
        lightboxSlideShow();
    })

    // close lightbox 
    $(".lightbox-close").click(function(){
        $(".lightbox").removeClass("open");
    })

    // close lightbox when clicked outside of img-box 
   $(".lightbox").click(function(event){
     if($(event.target).hasClass("lightbox")){
          $(this).removeClass("open");
     }
   })
})

function lightboxSlideShow(){
  const imgSrc = $(".art-item").eq(index).find("img").attr("data-large");
  const category = $(".art-item").eq(index).find("main__content h2").html();
  $(".lightbox-img").attr("src",imgSrc);
  $(".lightbox-category").html(category)
  $(".lightbox-counter").html(totalArtItems + "/" + (index+1));
}


