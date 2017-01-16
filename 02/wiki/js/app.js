function callWiki() {
	title = document.getElementById("query").value;
	apiUrl = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="
	           + title + "&callback=?";
//	console.log(apiUrl);
	resultTitle = [];
	resultDesc = [];
	resultID = [];
	$.getJSON(apiUrl, function(json){
		$.each(json.query.pages, function(index, item) {
			resultTitle.push(item.title);
			resultDesc.push(item.extract);
			resultID.push(item.pageid);
		});	
	});
	console.log(resultTitle);
}

$(document).ready(function() {
  $("#submit").on("submit", function(event) {
	event.preventDefault();
    callWiki();
  });
});