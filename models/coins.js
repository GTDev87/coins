var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

var CoinSchema = new Schema({
	code: String,
	name: String
});

mongoose.model('Coin', CoinSchema);