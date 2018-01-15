var excel_data_filter = (function(){
	var module = {}
	
	//scrape the excel file to create JSON data
	module.getExcelData = function(excel_file_path,filter_obj,table_target,callback_function){
		//console.log(filter_obj)
    var oReq = new XMLHttpRequest();
		oReq.open("GET", excel_file_path, true);
		oReq.responseType = "arraybuffer";

		oReq.onload = function(e) {
		  var arraybuffer = oReq.response;

		  /* convert data to binary string */
		  var data = new Uint8Array(arraybuffer);
		  var arr = new Array();
		  for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
		  var bstr = arr.join("");

		  /* Call XLSX */
		  var workbook = XLSX.read(bstr, {type:"binary"});

		  /* DO SOMETHING WITH workbook HERE */
		  var first_sheet_name = workbook.SheetNames[0];

		  /* Get worksheet */
		  var worksheet = workbook.Sheets[first_sheet_name];
		  var excelData = XLSX.utils.sheet_to_json(worksheet);
		  callback_function(excelData,filter_obj,table_target)
			}
		oReq.send();
		}

	module.loadTable = function(excelData,filter_obj,table_target){
		var data = module.filterExcelData(excelData,filter_obj)
		$(table_target).bootstrapTable("destroy")
		module.createBootstrapTable(data,table_target)
		}

	//create the bootstrap table using the data URL and the target location
	module.createBootstrapTable = function(data,table_target){
		$(table_target).bootstrapTable({
			data: data,
			searchable:true,  //adds search bar above table
			sortOrder: 'asc',  //search order for clicking table headers
			sortName:"Name of Program",  //default sort on load of table
			pagination: true,  //adds pagination
			cardView: true,  //adds card view to table
			showToggle: true,  //adds toggle to switch between table and card view
			detailView: true,  //adds detail view that shows extra infomation on table view
			showColumns:true,
			rowStyle: rowStyle(),
			})
		}

	module.filterExcelData = function(data_list,filter_obj){
		for(var key in filter_obj){
			var value_list = filter_obj[key]
       // console.log(value_list)
			data_list = module.filterDataWithKey(data_list,key,value_list)
			}
		return data_list
		}
	
	module.filterDataWithKey = function(data_list,key,value_list){
		var new_data_list = []
		for(var data_index in data_list){
			var data_obj = data_list[data_index]
			var data_value = data_obj[key]
			if(data_value === undefined){
				continue
				}
			data_value = data_value.toLowerCase()
			for(var value_index in value_list){
				var value = value_list[value_index]
				if(value === undefined){
					continue
					}
				value = value.toLowerCase()
				var data_value_list = data_value.split(" ")
				for (var data_list_index in data_value_list){
					var data_list_value = data_value_list[data_list_index]
					if(value === data_list_value){
						new_data_list.push(data_obj)
						break
						}
					}
				}
			}
		return new_data_list
		}

	return module
})()
