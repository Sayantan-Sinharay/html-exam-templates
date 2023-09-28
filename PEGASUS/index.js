$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3, // Number of items to show at once
    loop: true, // Infinite loop
    margin: 10, // Space between items
    nav: false, // Show navigation arrows
    dots: false, // Hide pagination dots
    responsive: {
      0: {
        items: 1, // Number of items to show on small screens
      },
      600: {
        items: 3, // Number of items to show on medium screens
      },
      1000: {
        items: 5, // Number of items to show on large screens
      },
    },
  });

  // Navigation click handlers
  $(".carousel-next").click(function () {
    $(".owl-carousel").trigger("next.owl.carousel");
  });

  $(".carousel-prev").click(function () {
    $(".owl-carousel").trigger("prev.owl.carousel");
  });
});
