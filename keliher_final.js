//nav attributes
//carousel
//

//header nav ul li

$(document).ready(function(){
			
				/*attributes and such */

	//create classes for buttons
	$("header nav ul li:nth-child(5)").attr('class', 'cats_button');
	$("header nav ul li:nth-child(2)").attr('class', 'evil_button');
	$("header nav ul li:nth-child(3)").attr('class', 'amazing_button');
	$("header nav ul li:nth-child(4)").attr('class', 'corgis_button');
	$("header nav ul li:nth-child(1)").attr('class', 'choose_timeline');


	//remove all content from unused nav tags
	$("header nav ul li:nth-child(6)").empty();
	$("header nav ul li:nth-child(7)").empty();
	
	//remove content from button tags
	$(".cats_button a").empty();
	$(".evil_button a").empty();
	$(".amazing_button a").empty();
	$(".corgis_button a").empty();
	$(".choose_timeline a").empty();
	
	//remove link from title
	$(".choose_timeline a").attr("href", "");
	
	//input new titles
	$(".cats_button a").prepend("CATS");
	$(".evil_button a").prepend("EVIL");
	$(".amazing_button a").prepend("AMAZING");
	$(".corgis_button a").prepend("FREE COOPER");
	$(".choose_timeline a").prepend("CHOOSE YOUR TIMELINE");

	//Change main nav options
	$(".mainnav .main ul li").empty();
	
	

	//establish data for slides
	var newData = [
		//1
		{
			"h1":"Meet The Deans: Teresa Meow-berg",
			"content":"A talk with the new Dean of the Albert Nerken School of Engineering about her her vision for the school as well as her opinions on string",
			"more":"Meow",
			"image":"https://raw.github.com/iankeliher/keliher_extension_final/master/img/blank.png",
			"background":"https://raw.github.com/iankeliher/keliher_extension_final/master/img/meow_berg_400800.png",

		},
		//2
		{
			"h1":"A Warm Night in Spite of Chilly Weather",
			"content":"Donors and current students mingled, discussing the new Cooper Fund program before promptly falling asleep in front of the fireplace",
			"more":"Meow",
			"image":"https://raw.github.com/iankeliher/keliher_extension_final/master/img/cat_fireplace_sm.png"
		},
		//3
		{
			"h1":"Something happens. Hotplates",
			"content":"TBTL is fun. Yerps.",
			"more":"Meow",
			"image":"http://3.bp.blogspot.com/_vqdW0BQpqXE/SR22MTv-m8I/AAAAAAAABTk/FT8hHq0uCi8/s400/luke+burbank,+motherfuckers.jpg"
		},
		//4
		{
			"h1":"A Major Award for Prof. Banana's PAWS Project",
			"content":"The annual Buckminster Fuller Challenge corporate sponsor, Foer Inc., announced a surprise Support Award for Professor Banana's PAWSinPAWS program, ridding the world of those annoying loud noises",
			"more":"Meow",
			"image":"https://raw.github.com/iankeliher/keliher_extension_final/master/img/cat_helmet_250.png"
		},
		//5
		{
			"h1":"Cooper Engineering Team Wins Top Prize in IEEE Student Competition",
			"content":"Catbert, a senior, and Mittens (CE'14) have won the first-ever IEEE ComSoc Student Competion with an inexpensive device that can constantly entertain you with laserpointers",
			"more":"Meow",
			"background":"https://raw.github.com/iankeliher/keliher_extension_final/master/img/Laser_pointers_400800.png"
		},
		//6
		{
			"h1":"Architecture and Urban Studies From A New Angle",
			"content":"A chat with renowned architectural critic and theorist Mr. Jangles about his new book <em>Scaffolding Beyond the Postmodern: Contemporary Brazilian Architecture</em>",
			"more":"Meow",
			"background":"https://raw.github.com/iankeliher/keliher_extension_final/master/img/Architecture_Cat.jpg"
		}
	];

	//loop thru slides
	var slides = $('#dl .slide');
	slides.each(function(index, element){
	
		console.log(element);
		$(element).addClass("fancy-"+index);
		
		var data = newData[index];
		
		$(".fancy-"+index+" h1").html(data.h1);
		$(".fancy-"+index+" .content p").html(data.content);
		$(".fancy-"+index+" .more-arrow span").html(data.more);
		$(".fancy-"+index+" .image img").attr("src", data.image);
			
		
		//makes the background image work
		//+- adds in content
		var styleText= $(".fancy-"+index).attr("style");
		styleText = styleText.replace("background-image","invalid-background-image");
		
		styleText += "background-image: url("+data.background+");";
		$(".fancy-"+index).attr("style", styleText);
				
		});
	
	
		
		//controlling white text
		$(".fancy-4 .body h1").attr("style", "color: white;");
		$(".fancy-0 .body h1").attr("style", "color: white;");
		$(".fancy-5 .body h1").attr("style", "color: white;");
		
		
		/*
		var noBackground= $(styleText).prop("background-image");
		console.log(noBackground);
		*/
		
		
		
		
		
		
		//Upcoming Event Section
		
		var dataSub = [
			{
				"h2":"hey this worked",
				"h3":"I can't believe it"
			},
			{
				"h2":"did it work",
				"h3":"Well, yeah, it did the first time"
			}
		];
		
		var uE = $('#upcoming-events');
	uE.each(function(index, element){
	
		console.log(element);
		$(element).addClass("upcoming-"+index);
		
		var upComing = dataSub[index];
		
		$(".upcoming-"+index+" h2").html(upComing.h2);
		$(".upcoming-"+index+" h3").html(upComing.h3);
		$(".upcoming-"+index+" .image img").attr("src", upComing.image);
		
	});
	
//.slide.invert uses inline style to put the background image in...
	
console.log ("this is working");


			
			});