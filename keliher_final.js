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
	$(".corgis_button a").prepend("CORGIS");
	$(".choose_timeline a").prepend("CHOOSE YOUR TIMELINE");

	

	//establish data for slides
	var newData = [
		//1
		{
			"h1":"Meet Professor Meow-berg",
			"content":"Stately, plump Buck Mulligan stands at the top of the stairs and looks down upon Stephen Daedelus. Something about tacos.",
			"more":"Meow",
			"image":" "
			"background":"https://raw.github.com/iankeliher/keliher_extension_final/master/img/meow_berg_400800.png",

		},
		//2
		{
			"h1":"A Warm Night in Spite of Chilly Weather",
			"content":"Donors and current students mingled to celebrate The Cooper Fund Leadership Circle, a new program promoting major gifts to The Cooper Union",
			"more":"Meow",
			//"background":"http://3.bp.blogspot.com/_vqdW0BQpqXE/SR22MTv-m8I/AAAAAAAABTk/FT8hHq0uCi8/s400/luke+burbank,+motherfuckers.jpg"
		},
		//3
		{
			"h1":"cats take over the sun!",
			"content":"Stately, plump Buck Mulligan stands at the top of the stairs and looks down upon Stephen Daedelus. Something about tacos.",
			"more":"Meow",
			"background":"http://3.bp.blogspot.com/_vqdW0BQpqXE/SR22MTv-m8I/AAAAAAAABTk/FT8hHq0uCi8/s400/luke+burbank,+motherfuckers.jpg"
		},
		//4
		{
			"h1":"A Major Award for Prof. Banana's Africa Project",
			"content":"The annual Buckminster Fuller Challenge corporate sponsor, Interface Inc., announced a surprise Support Award for PITCHAfrica's effort to develop high-yeild rainwater harvesting sites that double as multi-purpose school buildings in rural Africa",
			"more":"Meow",
			//"background":"http://3.bp.blogspot.com/_vqdW0BQpqXE/SR22MTv-m8I/AAAAAAAABTk/FT8hHq0uCi8/s400/luke+burbank,+motherfuckers.jpg"
		},
		//5
		{
			"h1":"Cooper Engineering Team Wins Top Prize in IEEE Student Competition",
			"content":"Victor Chen, a senior, and Kyung Min Lee (EE'13) have won the first-ever IEEE ComSoc Student Competion with an inexpensive device that transmits data through LED lights",
			"more":"Meow",
			"background":"http://3.bp.blogspot.com/_vqdW0BQpqXE/SR22MTv-m8I/AAAAAAAABTk/FT8hHq0uCi8/s400/luke+burbank,+motherfuckers.jpg"
		},
		//6
		{
			"h1":"Architecture and Urban Studies From A New Angle",
			"content":"Stately, plump Buck Mulligan stands at the top of the stairs and looks down upon Stephen Daedelus. Something about tacos.",
			"more":"Meow",
			"background":"http://3.bp.blogspot.com/_vqdW0BQpqXE/SR22MTv-m8I/AAAAAAAABTk/FT8hHq0uCi8/s400/luke+burbank,+motherfuckers.jpg"
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
		
		/*
		//get rid of background images
		$(".fancy-"+index).css("background-image", "");
		
		//replace background images
		$(".fancy1 body, .fancy3 body, .fancy5 body").css("background-image", data.background);
		*/
		
		
		//select style
		//make style text
		//manipulate text
		//replace source
		//re-inject manipulated style into attr
		
		
		//makes the background image work
		//+- adds in content
		var styleText= $(".fancy-"+index).attr("style");
		styleText = styleText.replace("background-image","invalid-background-image");
		
		styleText += "background-image: url("+data.background+");";
		$(".fancy-"+index).attr("style", styleText);
				

		


		/*
		var noBackground= $(styleText).prop("background-image");
		console.log(noBackground);
		*/
		
		
	});
	
//.slide.invert uses inline style to put the background image in...
	
console.log ("this is working");

			
			});