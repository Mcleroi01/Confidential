$(function() {

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();

});


var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("nav").style.display = "block";
  document.getElementById("hero").style.display = "block";
  document.getElementById("co").style.display = "block";
  document.getElementById("footer").style.display = "block";
  document.getElementById("mob").style.display = "block";
}

window.addEventListener('scroll',reveal)
function reveal() {
	var reveals=document.querySelectorAll('.reveal');

	for (let i = 0; i < reveals.length; i++) {
		let windowheight = window.innerHeight;
		let revealtop= reveals[i].getBoundingClientRect().top
		let revealpoint= 150;


		if(revealtop < windowheight - revealpoint){
			reveals[i].classList.add('active');

		}else{
			reveals[i].classList.remove('active');
		}
		
	}
}

// slide image 
const wrap=[...document.querySelectorAll('.wrap_img')];

const nextbtn=[...document.querySelectorAll('.icon-chevron-left')];
const backbtn=[...document.querySelectorAll('.icon-chevron-right')];
const slide=[...document.querySelectorAll('.slide')];

wrap.forEach((item,i)=>{
	let contdim=item.getBoundingClientRect();
	let contwidth=contdim.width;


	nextbtn[i].addEventListener('click',()=>{
		item.scrollLeft+= contwidth;

	})
	slide[i].addEventListener('click',()=>{
		item.scrollLeft+= contwidth;

	})

	backbtn[i].addEventListener('click',()=>{
		item.scrollLeft-= contwidth;

	})
})