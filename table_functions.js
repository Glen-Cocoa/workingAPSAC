//shows table once data is loaded
$(function(){
	$("#message").hide()
	$("#container").show()
	showBoxes()
});

//Export to Excel Function
$(function(){
	$("#export").on("click", function(){
		$("#table").tableExport({
			exportOptions:{ignoreColumn:[0]}
			})
		})
	})

//show/hide checkboxes on click of filter by buttons
function toggleBox(input) {
    var x = document.getElementById(input);
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

//clears checkboxes and displays the table with no filters
$(function(){
	$("#clear-search").click(function(){
			window.location.reload()
  });
});

//Adds JSON data to show up in detail view of table
var detailFormatter = function(index,row){
	var html = []
	if(index >= 0){
	$.each(row,function(key,value){
		html.push("<p><b>"+key+":</b>"+value+"</p>")
	})
	return html.join("")
	}
}

//sets css for table rows
var rowStyle = function(row,index){
	return {
		css:{"color":"#7F297D","font-size":"10px","overflow-wrap":"break-word"}
	}
}

var linkFormatter = function(value){
	if(value === undefined){
		return '-'
	}
	else{
		return '<a class="link" target="_blank" href="'+value+'">'+value+'</a>'
	}
}
