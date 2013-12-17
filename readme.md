#EXPLORE MULTIPLE COOPER UNION TIMELINES

###There are two different timelines:
* **Cats**
* **Evil**

The timeline **Cats** consists of a world in which all people have been replaced by (possibly sleepy) felines.
The timeline **Evil** is an exploration of the Darkest Timeline, a place where possible dark events have been taken forward.

######note: the Darkest Timeline is different from typical "bizarro-world" type scenarios of an inversion of reality. The Darkest Timeline makes it darker. There's a difference. Trust me.

###Using the Chrome Extension:
* After loading extension, go to cooper.edu
* The interface of the Cooper Union homepage has been altered; this is what it's like:
	* The topmost menu has been transformed to include options for timelines **Cats** and **Evil** 
	* The lower, main menu has been transformed to include:
		* **About** tab which holds a NYT article about the financial crisis, the FreeCooper homepage, and the Way Forward Plan.
		* **FreeCooper Feed** section which contains the most recent 8 tweets from the Twitter API with search terms FreeCooper.
		* **History** tab includes a link to the Cooper Union wiki and a Peter Cooper bio.
		* The **Stuff to Look** At tab includes a link to whycooper.org.
	* After clicking one of the timeline options, the content on the page changes to suit that timeline.

###Loose Explanation of How the Chrome Extension Works:
Javascript is used to loop through four sections of the website (top nav, main nav, slides, upcoming events).
Alternate content is then injected in based on the timeline (or lack thereof); the changes to both navigations remain through each.
Each timeline constitutes a function held within a click event.

	