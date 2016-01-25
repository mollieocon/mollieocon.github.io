$(function() {
 $('#nav-toggle').click(function(){
		$('body').toggleClass('nav-open');
	});
    
});

$(function() {	
  $(".owl-carousel").owlCarousel({
  	items:1,
  	nav: true,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:true
  });
    
});

$(function() {
 $('#grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth:20,
  gutter: 10

});

var navBar = $('.nav');
var navBarScrolled = 'nav-scrolled';
var front = 125;

$(window).scroll(function() {
    
  if( $(this).scrollTop() > front ) {

    navBar.addClass(navBarScrolled);
  } else {
    navBar.removeClass(navBarScrolled);
  }
});
    
  
});


// Cache selectors
var lastId,
    topMenu = $("#nav"),
    topMenuHeight = topMenu.height()+5,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
    
    console.log(topMenuHeight);
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop) {
       
         console.log(this);
         console.log($(this).offset().top);
         console.log(fromTop);
         
         return this;
     }
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});


//IMAGE ZOOM

$(".zoom-images").zoomScroller({
   initZoom: 1.15,
   zoom: 1, 
   animationTime: 2000,  
   easing: "ease",  
   onZoom: function(el, zoomType) {},
   beforeZoom: function(el, zoomType) {},
   afterZoom: function(el, zoomType) {},
   offsetTop: 0, 
   offsetBottom: 200,
 });







