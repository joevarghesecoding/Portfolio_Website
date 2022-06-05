var left = $("#left");

left.on("scroll", function(e) {
    
  if (this.scrollTop > 1020) {
    left.addClass("scrolling-pc");
  } else {
    left.removeClass("scrolling-pc");
  }
  
});
