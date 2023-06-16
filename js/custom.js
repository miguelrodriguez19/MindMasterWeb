// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

$('.custom-carousel').on('slid.bs.carousel', function () {
    var $this = $(this);
    if ($this.find('.carousel-inner .carousel-item:last').hasClass('active')) {
      $this.carousel('pause');
      setTimeout(function(){
        $this.carousel('cycle');
        $this.carousel(0);
      }, 17000);
    } else if ($this.find('.carousel-inner .carousel-item:first').hasClass('active')) {
      $this.carousel('pause');
      setTimeout(function(){
        $this.carousel('cycle');
      }, 17000);
    }
});

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}