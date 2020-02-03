var Ska = {};

Ska.baseUrl = "";

Ska.load = function(elem, file)
{
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function()
	{

		if (this.readyState == 4 && this.status == 200)
		{
			var elements = document.querySelectorAll(elem);

			for(var i = 0; i < elements.length; i++)
			{
				elements[i].innerHTML = this.responseText;
			}
			
		}

	};

	xhttp.open("GET", file, true);
	xhttp.send();
}

Ska.loadToObject = function(elem, file)
{
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function()
	{

		if (this.readyState == 4 && this.status == 200)
		{
			elem.innerHTML = this.responseText;			
		}

	};

	xhttp.open("GET", file, true);
	xhttp.send();
}

Ska.useShape = function(element, shapeType)
{
	Ska.load(element, Ska.baseUrl + "assets/" + shapeType + ".svg");
}

Ska.useShapeToObject = function(element, shapeType)
{
	Ska.loadToObject(element, Ska.baseUrl + "assets/" + shapeType + ".svg");
}

Ska.script = document.currentScript;

Ska.init = function()
{
	//alert(Ska.script.src);

	// GET BASE URL TO GET THE SVG FILES WITH AJAX
	// BECAUSE ITS LOAD IN DIRECTORY SKA-SVG/ASSETS
	// AND THIS CODE WILL SOLVE IF THE SKA-SVG
	// IS IN ANY DIRECTORY
	var i = Ska.script.src.indexOf("js/Ska");

	if(i > -1)
		Ska.baseUrl = Ska.script.src.substring(0, i);

	//alert(Ska.baseUrl);

	// INITIALIZE SVG
	//alert("Yeah");

	var elements = document.querySelectorAll("[data-ska-object]");

	for(var j = 0; j < elements.length; j++)
	{
		var d = elements[j].getAttribute("data-ska-object");

		if(d)
			Ska.useShapeToObject(elements[j], d);
	}

}

if(window)
{
	window.addEventListener('load', function() {
	    Ska.init();
	});
}