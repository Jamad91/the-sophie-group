$(document).ready(function(ev){
    var items = $(".nav li").length;
    var leftRight=0;
    if(items>5){
        leftRight=(items-5)*50*-1;
    }
    $('#custom_carousel').on('slide.bs.carousel', function (evt) {


      $('#custom_carousel .controls li.active').removeClass('active');
      $('#custom_carousel .controls li:eq('+$(evt.relatedTarget).index()+')').addClass('active');
    })

});
