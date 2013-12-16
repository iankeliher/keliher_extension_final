//nav attributes
//carousel
//

//header nav ul li

$(document).ready(function(){
	
	
			
	
	//Change top nav

	//create classes for buttons
	$("header nav ul li:nth-child(2)").attr('class', 'cats_button');
	$("header nav ul li:nth-child(4)").attr('class', 'evil_button');
	$("header nav ul li:nth-child(3)").attr('class', 'amazing_button');
	$("header nav ul li:nth-child(5)").attr('class', 'corgis_button');
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
	$(".choose_timeline a, .corgis_button a, .cats_button a, .evil_button a").attr("href", "");
	//$(".choose_timeline a").replace("href","");
	
	//input new titles
	$(".cats_button a").prepend("CATS");
	$(".evil_button a").prepend("EVIL");
	//$(".amazing_button a").prepend("AMAZING"); taken out b/c probably not going to have time
	$(".corgis_button a").prepend("NORMAL");
	$(".choose_timeline a").prepend("CHOOSE YOUR TIMELINE");

	
	
	//Change main nav options
	
	var mainNav = $("#mainnav .main ul li a");

	var changeTabWidth = $("#mainnav .main ul li");
	
	$(mainNav).each(function(index, element){
		console.log("mainNav is working");
	//	console.log(element);
		var menuTabs = element;
		
		
		$(menuTabs).addClass("section-"+ index);
		console.log(menuTabs);
		
		
	var whatIs = typeof mainNav;
	console.log(whatIs);
	//main nav is an object in w/ array...


	//change padding
	$(".main ul li:nth-child(1) a").attr("style","padding-right:15px; margin-right: 10px;");
	$(".main ul li:nth-child(2) a").attr("style","padding-right:15px; width:190px; margin-right: 10px");
	$(".main ul li:nth-child(3) a").attr("style","padding-right:15px; width:115px; margin-right: 10px");
	$(".main ul li:nth-child(4) a").attr("style","padding-right:15px; width:190px");
	
	//change links
	$(".main .nav1").attr("href","'http://www.nytimes.com/2013/05/11/business/how-cooper-unions-endowment-failed-in-its-mission.html?_r=0'");
	$(".main .nav2").attr("href","'http://www.nytimes.com/2013/05/11/business/how-cooper-unions-endowment-failed-in-its-mission.html?_r=0'");
	$(".main .nav3").attr("href","'http://www.nytimes.com/2013/05/11/business/how-cooper-unions-endowment-failed-in-its-mission.html?_r=0'");
	$(".main .nav4").attr("href","'http://www.nytimes.com/2013/05/11/business/how-cooper-unions-endowment-failed-in-its-mission.html?_r=0'");
	
	//Replace Main Tabs
	$(".nav1").html("About");
	$(".nav2").html("Free Cooper Feed");
	$(".nav3").html("History");
	$(".nav4").html("Stuff To Look At");
	
	//fill in sub-menu information
	$("#menu0").html("<ul class='internalMenu1'><li><a href='http://www.nytimes.com/2013/05/11/business/how-cooper-unions-endowment-failed-in-its-mission.html?_r=0'>A New York Times Article Detailing<br>How We Got Into This Predicament</a></li> <li><a href='http://www.cusos.org/'>CUSOS.org</a></li> <li><a href='http://friendsofcooperunion.org/wp/wp-content/uploads/2012/03/CooperUnion_TheWayForward.pdf'>The Way Forward Plan</a></li></ul>");
	$("#menu1").html("<ul class='internalMenu1'><li>something</li> <li>something else</li> <li>something something else</li></ul>");
	$("#menu2").html("<ul class='internalMenu1'><li><a href='http://en.wikipedia.org/wiki/Cooper_Union'>Cooper Union Wiki</a></li> <li><a href='http://en.wikipedia.org/wiki/Peter_Cooper'>Peter Cooper Bio</a></li>");
	$("#menu3").html("<ul class='internalMenu1'><li>something</li> <li>something else</li> <li>something something else</li></ul>");
	
	$("#menu0").attr("style","width:210px");
	$("#menu1").attr("style","width:233px; left: 341px");
	$("#menu2").attr("style","width:158px; left: 584px");
	$("#menu3").attr("style","width:233px; left: "+(685+67)+"px");
	
	});
	
	
	
	//CATS TIMELINE!!!
	
	var cats =function (){

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
				"h1":"Board of Trustees Enact Yarn Program",
				"content":"TBTL is fun. Yerps.",
				"more":"Meow",
				"background":"http://3.bp.blogspot.com/_vqdW0BQpqXE/SR22MTv-m8I/AAAAAAAABTk/FT8hHq0uCi8/s400/luke+burbank,+motherfuckers.jpg"
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
				"h3":"I can't believe it",
				"image":"http://seattletimes.com/ABPub/2008/01/08/2004113627.jpg"
			},
			{
				"h2":"did it work",
				"h3":"Well, yeah, it did the first time",
				"image":"http://seattletimes.com/ABPub/2008/01/08/2004113627.jpg"
			}
		];
		
		//define upcoming events section & loop thru
		var uE = $('#upcoming-events');
		
		uE.each(function(index, element){
	
			console.log(element);
			$(element).addClass("upcoming-"+index);
		
			var upComing = dataSub[index];
		
			$(".upcoming-"+index+" h2").html(upComing.h2);
			$(".upcoming-"+index+" h3").html(upComing.h3);
			$(".upcoming-"+index+" img").attr("src", upComing.image);
		
			localStorage.setItem("script","cats");
	
		});
	
	};
	
	//NORMAL TIMELINE
	
	var normal = function(){
		console.log("whew, back to normal!");
	};
	
	//SETTING CLICK FUNCTIONS
	
	
	$(".cats_button").click(function(){
		cats();
		localStorage.setItem("script","cats");
	});
	
	$(".corgis_button").click(function(){
		normal();
		localStorage.setItem("script","normal");
	});
	
	var somethingState = localStorage.getItem("script");

	if (somethingState === "cats") {
		cats();
	} else if (somethingState === "normal") {
		normal();
	}
		
		
console.log("this is working");
			
});