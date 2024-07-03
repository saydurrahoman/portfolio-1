// counter start
$(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
})

// portfolio start
var mixer = mixitup('.porfolio');
  
      var mixer = mixitup(containerEl, {
      selectors: {
          target: '.blog-item'
      },
      animation: {
          duration: 3000
      }
  });

//   top to bottom button start
function topScroll(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;


  }