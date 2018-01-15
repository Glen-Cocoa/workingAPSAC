var showBoxes = function(){

//list of states for listStates to loop through
var states = 'Alabama,Alaska,Arizona,Arkansas,California,Colorado,Connecticut,Delaware,District Of Columbia,Florida,Georgia,Hawaii,Idaho,Illinois,Indiana,Iowa,Kansas,Kentucky,Louisiana,Maine,Maryland,Massachusetts,Michigan,Minnesota,Mississippi,Missouri,Montana,Nebraska,Nevada,New Hampshire,New Jersey,New Mexico,New York,North Carolina,North Dakota,Ohio,Oklahoma,Oregon,Pennsylvania,Rhode Island,South Carolina,South Dakota,Tennessee,Texas,Utah,Vermont,Virginia,Washington,West Virginia,Wisconsin,Wyoming'.split(',')

//Makes list of states checkboxes
var listStates = function(){
	for(var i = 0; i < states.length; i++){ 
    states_li = $('<div id="'+states[i]+'"><input class="clearTarget" type="checkbox" name="State" value="'+states[i]+'" id="'+states[i]+'"><label for="'+states[i]+'">'+states[i]+'</label><br></div>')
		$('#states').append(states_li)
		}
	}
  listStates()

//list of school types for listTypes to loop through
var types = ['Community College','Private University','State University','Other']

//Makes list of College Type checkboxes
var listTypes = function(){
	for(var i = 0; i < types.length; i++){
		types_li = $('<div id="'+types[i]+'"><input class="clearTarget" type="checkbox" value="'+types[i]+'" name="School Type" id="'+types[i]+'"><label for="'+types[i]+'">'+types[i]+'</label><br></div>')
		$('#types').append(types_li)
		}
	}
  listTypes()

//List of academic departments for listAcademicDepartments to loop through
var academic_departments = ['Counseling','Criminal Justice/Law Enforcement','Education','Government/Public Policy/Public Administration','Human Development','Law','Liberal Arts/College of Arts and Sciences','Medical School','Nursing School','Psychology','Public Health','Social Sciences','Social Work','Sociology','Other']

//Makes list of Academic Department checkboxes
var listAcademicDepartments = function(){
	for(var i = 0; i < academic_departments.length; i++){
		academic_departments_li = $('<div id="'+academic_departments[i]+'"><input class="clearTarget" type="checkbox" value="'+academic_departments[i]+'" name="Academic Department" id="'+academic_departments[i]+'"><label for="'+academic_departments[i]+'">'+academic_departments[i]+'</label><br></div>')
		$('#academic_departments').append(academic_departments_li)
		}
	}
listAcademicDepartments()

//List of degree types for listDegreeTypes to loop through
var degree_types = ['Undergraduate','Graduate (Masters)','Graduate (Doctorate)','Professional Education (Medical, Law)','Certificate','Courses offered in child maltreatment, but no certification/degree']

//Makes list Degree Type checkboxes
var listDegreeTypes = function(){
	for(var i = 0; i < degree_types.length; i++){
		degree_types_li = $('<div id="'+degree_types[i]+'"><input class="clearTarget" type="checkbox" value="'+degree_types[i]+'" name="Certification/Degree Type Available" id="'+degree_types[i]+'"><label for="'+degree_types[i]+'">'+degree_types[i]+'</label><br></div>')
		$('#degree_types').append(degree_types_li)
		}
	}
listDegreeTypes()

//List of levels of study for listLevelsOfStudy to loop through
var levels_of_study = ['Major','Minor','Concentration']

//Makes levels of study checkboxes
var listLevelsOfStudy = function(){
	for(var i = 0; i < levels_of_study.length; i++){
		levels_of_study_li = $('<div id="'+levels_of_study[i]+'"><input class="clearTarget" type="checkbox" value="'+levels_of_study[i]+'" name="Level of Study" id="'+levels_of_study[i]+'"><label for="'+levels_of_study[i]+'">'+levels_of_study[i]+'</label><br></div>')
		$('#levels_of_study').append(levels_of_study_li)
		}
	}
listLevelsOfStudy()

//List of study options for listStudyOptions to loop through
var study_options = ['In Person','Online Program','Hybrid']

//Makes study options checkboxes
var listStudyOptions = function(){
	for(var i = 0; i < study_options.length; i++){
		study_options_li = $('<div id="'+study_options[i]+'"><input class="clearTarget" type="checkbox" value="'+study_options[i]+'" name="Study Options" id="'+study_options[i]+'"><label for="'+study_options[i]+'">'+study_options[i]+'</label><br></div>')
		$('#study_options').append(study_options_li)
		}
	}
listStudyOptions()

//List of international options
var international = ['Yes','No']

//Makes international checkboxes
var listInternational = function(){
	for(var i = 0; i < international.length; i++){
		international_li = $('<div id="'+international[i]+'"><input class="clearTarget" type="checkbox" value="'+international[i]+'" name="International" id="'+international[i]+'"><label for="'+international[i]+'">'+international[i]+'</label><br></div>')
		$('#international').append(international_li)
		}
	}
listInternational()
}
