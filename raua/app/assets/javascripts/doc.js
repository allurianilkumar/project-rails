!function ($) {
  $(function(){
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      var msViewportStyle = document.createElement("style");
      msViewportStyle.appendChild(
        document.createTextNode(
          "@-ms-viewport{width:auto!important}"
        )
      );
      document.getElementsByTagName("head")[0].
        appendChild(msViewportStyle);
    }


    var $window = $(window)
    var $body   = $(document.body)

    var navHeight = $('.navbar').outerHeight(true) + 10

    $body.scrollspy({
      target: '.ndoboost-sidebar',
      offset: navHeight
    })

    $window.on('load', function () {
      $body.scrollspy('refresh')
    })

})

}(jQuery)

$(document).ready(function(){
	$(window).load(function() {prettyPrint()})
	$('.tooltips').tooltip({
	  selector: "[data-toggle=tooltip]",
	  container: "body"
	})
});