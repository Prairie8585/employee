const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
	fullName: {
		type: String,
		required: [true, "Can't be empty value!"]
	},
	email: {
		type: String,
		required: [true, "Can't be empty value!"]
	},
	mobile: {
		type: String,
		required: [true, "Can't be empty value!"]
	},
	city: {
		type: String,
		required: [true, "Can't be empty value!"]
	}
});



employeeSchema.path('fullName').validate((val) => {
	var fullNameRegex = /^\b[a-zA-Z0-9\-\'\s]{1,30}$\b/;
	//var externalBeforeSpaceRexex = /\B[\s]/g; // 'Invalid characters at the begining of field Full Name registration : '
	//var externalAfterSpaceRexex = /[\s]\B/g; // 'Invalid characters at the end of field Full Name registration : '
	//var forbiddenCharactersRegex = /(\b[^a-zA-Z0-9\-\s]+\b)/g; //'Invalid characters in field Full Name registration :'
	console.log(fullNameRegex.test(val.trim()));

	return fullNameRegex.test(val.trim());
}, 'Invalid Full Name. Invalid characters in Full Name registration');


employeeSchema.path('email').validate((val) => {
	emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/;
	return emailRegex.test(val.trim());
	// ^\b[a-zA-Z0-9\-\=\&\<\>\!\#\$\%\&\‘\*\+\–\/\=\?\^\_\`\.\{\|\}\~\s]+$\b
}, 'Invalid e-mail. Invalid characters in mail registration');

employeeSchema.path('mobile').validate((val) => {
	mobileRegex = /^([0-9]{10}|([+])[^0][0-9]{10,15})$/g;
	return mobileRegex.test(val.trim());
}, 'Invalid Mobile. Invalid characters in mobile registration');

employeeSchema.path('city').validate((val) => {
	var cityRegex = /^\b[a-zA-Z0-9\-\'\s]{1,30}$\b/;
	console.log(cityRegex.test(val.trim()));

	return cityRegex.test(val.trim());
}, 'Invalid City. Invalid characters in City registration');

    /*$(document).ready(
    function(){
        
       
       
      
      $(document).on('dblclick','li', function(){
        $(this).toggleClass('strike').fadeOut('slow');    
      });
      
      $('th').sortable();
      
      $( ".offset-md-3" ).draggable();
    }
);*/

mongoose.model('Employee', employeeSchema);