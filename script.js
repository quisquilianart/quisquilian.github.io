// $(window).scroll(function(){
//     $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
//   });

const scrollDiv = document.getElementById('top');

scrollDiv.addEventListener('scroll', function() {
  // Get the current scroll position
  const scrollPosition = scrollDiv.scrollTop;
  
  // Calculate the opacity based on the scroll position
  // In this example, we're setting the opacity to be 1 at the top and 0 at the bottom
  const maxScroll = scrollDiv.scrollHeight - scrollDiv.clientHeight;
  const opacity = (scrollPosition / maxScroll);
  
  // Set the opacity of the scroll-div
  scrollDiv.style.opacity = opacity;
});