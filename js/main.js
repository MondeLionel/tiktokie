var postSwiper = new Swiper('.posts', {
	direction:'vertical',
	keyboard: {
        	enabled: true,
      	},
    on: {
    	init: function(){
    		$(".post-overlay").on('click',function(){
    			if($('video').prop('muted')){
    				
    			}
  				
    			console.log("clicked post overlay")
    		})
    		// $(".swiper-slide").find("video").trigger("play");
    	}
    }
})

let body = $('body');


// $(window).load(function(){
// 	$("body").removeClass("loading")
// })

window.addEventListener("loadeddata", function(e){
	$("body").removeClass("loading")
})


if(body.hasClass("autoplay") === true){
	$(".post-overlay").on('click',function(){
		$(".swiper-slide").find("video").trigger("play");
		console.log("clicked post overlay")
	})



let autoPlayVideo = () => {
	console.log("autoplaying video")
	setTimeout (function(){
		$(".swiper-slide").find("video").attr("muted", "");
		$('.swiper-slide-active').find("video").trigger('play');
		$('.swiper-slide-prev').find('video').trigger('pause');
		$('.swiper-slide-next').find('video').trigger('pause');
	}, 1000)
}

postSwiper.on('slideChange', autoPlayVideo)
}else{
	let playVideo = function(){
		const el = $(".post-overlay");
		console.log("play video manually")
		el.siblings().find("video").trigger("play");
		$(".swiper-slide").find("video").attr("muted", "");

	}
}

// class based nav

$('.nav-item').on('click',function() {
	console.log("clicked nav")
	$(this).addClass('active');
	$(this).siblings().removeClass('active')
})

$('.feed-links a').on('click', function(){
		$(this).addClass('active');
	$(this).siblings().removeClass('active')
})
