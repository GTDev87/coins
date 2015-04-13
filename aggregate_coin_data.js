var mongoose = require('mongoose');
var fs = require('fs');

var cryptsy = require("./scripts/cryptsy");


mongoose.connect("mongodb://localhost/coins", function(){
	cryptsy.public_data(function(cryptsy_data){
		var models_path = __dirname + '/models'; // __dirname = ./config
		fs.readdirSync(models_path).forEach(function (file) {
			require(models_path + '/' + file);
		});

		console.log("cryptsy_data = %j", cryptsy_data);

		mongoose.model('Trade').create(, function(err, topic){
				
		});
	});
});


