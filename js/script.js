
// Ska.load("#area1", "assets/drawing.svg");

//Ska.useShape("#area1", "base");

$(document).ready(function(){
	for(var l = 0; l < Ska.supportedObjects.length; l++)
	{
		var list = "list-shapes";

		if(Ska.supportedObjects[l].name.includes("curtain"))
			var list = "list-curtains";

		if(Ska.supportedObjects[l].name.includes("wave"))
			var list = "list-waves";

		$("#" + list)
		.append('<div class="col-6 col-sm-3 col-md-2"><div data-ska-object="' + Ska.supportedObjects[l].name + '"></div><p><b>' + Ska.supportedObjects[l].name + '</b></p><p class="small">data-ska-object="' + Ska.supportedObjects[l].name + '"</p></div>');

	}
});
