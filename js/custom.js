// add padding top to show content behind navbar
$("body").css("padding-top", $(".navbar").outerHeight() + "px");

// detect scroll top or down
if ($(".smart-scroll").length > 0) {
    // check if element exists
    var last_scroll_top = 0;
    $(window).on("scroll", function() {
        scroll_top = $(this).scrollTop();
        if (scroll_top < last_scroll_top) {
            $(".smart-scroll").removeClass("scrolled-down").addClass("scrolled-up");
        } else {
            $(".smart-scroll").removeClass("scrolled-up").addClass("scrolled-down");
        }
        last_scroll_top = scroll_top;
    });
}

new fullpage('#fullpage', {
    menu: '#menu',
    // navigationPosition: 'right',
    scrollingSpeed: 700,
    anchors : ['video', 'kategory', 'buying'],
    fixedElements: '#header, .footer',
    normalScrollElements: '.footer',
    // autoScrolling: false,
    //options here
    // autoScrolling: true,
    // scrollHorizontally: true,
    onLeave: function(origin, destination, direction){
    },
    onSlideLeave: function(section, origin, destination, direction){}
});

// Wrap every letter in a span
// var textWrapper1 = document.querySelector('.ml1 .letters');
// textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml1 .letter',
//     scale: [0.3,1],
//     opacity: [0,1],
//     translateZ: 0,
//     easing: "easeOutExpo",
//     duration: 600,
//     delay: (el, i) => 70 * (i+1)
//   }).add({
//     targets: '.ml1 .line',
//     scaleX: [0,1],
//     opacity: [0.5,1],
//     easing: "easeOutExpo",
//     duration: 700,
//     offset: '-=875',
//     delay: (el, i, l) => 80 * (l - i)
//   }).add({
//     targets: '.ml1',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

$(window).on('load', function(){
    setTimeout(function(){
		$("#loading").hide();
		$(".loader").hide();
	},8000);
});

const restart = document.querySelector(".button-restart");
const logoAnimation = anime.timeline({ 
  autoplay: true,
  delay: 100
});

logoAnimation.add({
  targets: '#logo',
  translateY: [-100, 0],
  opacity: [0, 1],
  elasticity: 600,
  duration: 1000
}).add({
  targets: '#logo-hexagon',
  rotate: [-90, 0],
  duration: 1200,
  elasticity: 600,
  offset: 100
}).add({
  targets: '#logo-circle',
  scale: [0, 1],
  duration: 1200,
  elasticity: 600,
  offset: 500
}).add({
  targets: '#logo-mask',
  scale: [0, 1],
  duration: 1000,
  elasticity: 600,
  offset: 550
}).add({
  targets: '#logo-text',
  translateX: ['-100%', 0],
  opacity: [0, 1],
  duration: 1000,
  easing: 'easeOutExpo',
  offset: 1000
})

restart.addEventListener("click", () => logoAnimation.restart());