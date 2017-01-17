function callWiki() {
	title = document.getElementById("query").value;
	apiUrl = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="
	           + title + "&callback=?";
	$.getJSON(apiUrl, function(json){
		$.each(json.query.pages, function(index, item) {
            var pageId=item.pageid;
            var title=item.title;
            var extract=item.extract;
            var link="http://en.wikipedia.org/wiki/?curid="+pageId;
            var html="<div class='well'><a href="+link+" target='_blank'><h2>"+title+"</h2><p>"+extract+"</p></a></div>";
             $('.container-narrow').append(html);			
		});	
	});
}

$(document).ready(function() {
  	$("#submit").on("submit", function(event) {
		event.preventDefault();
		// Reset container-narrow before displaying results
		$('.container-narrow').empty();
    	callWiki();
  	});

	$('#search').keypress(function(e){
         if(e.which==13){
            searchTerm=$('#query').val();
            console.log(searchTerm);
            // Reset container-narrow before displaying results
            $('.container-narrow').empty();
            callWiki();
         };
    });
});