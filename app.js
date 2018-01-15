$(function(){
//THIS VARIABLE IS YOUR DATA SOURCE. POINT IT AT WHATEVER EXCEL FILE NEEDS TO BE RENDERED.
	var EXCEL_URL = "./Data_Test.xlsx"
	var TABLE_TARGET = "#table"
	
	//Renders table without any filtering
	window.filterTable = function(filter_obj){
		excel_data_filter.getExcelData(EXCEL_URL,filter_obj,TABLE_TARGET,excel_data_filter.loadTable)
	 // console.log('filterTable has been run ', filter_obj)  
  }
	window.filterTable({})

	//Renders table based on checkboxes checked
	var getCheckedFilters = function(){
		$("body").on("click","input[type='checkbox']",function(e){
			var filter = {}
			$('input:checked').each(function(){
				var key = $(this).attr('name')
				if(key === undefined){
					return
					}
				var value = $(this).val()
				//if key is undefined, set value to empty array
				if(filter[key] === undefined){
					filter[key] = []
					}
        //if value contains a space, split it into multiple entries and add them each
        if(value.includes(" ")){
          var arrayOfValues = value.split(" ")
          for(i=0;i<arrayOfValues.length;i++){
            filter[key].push(arrayOfValues[i])
            }
          }else{ 
				//push value to array
				filter[key].push(value)
          }
})
			//sort with object created
       console.log("filter", filter)
        window.filterTable(filter)
		})
	}
	getCheckedFilters()
})
