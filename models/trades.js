// Topic schema

var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

var TradeSchema = new Schema({
	primary_coin: 	{type : Schema.ObjectId, ref : 'Coin'},
	secondary_coin: {type : Schema.ObjectId, ref : 'Coin'},
	time: 			Date,
	order: 			Boolean,									//if true is order not trade
	type: 			String,										//"sell"/"buy"/"unknown"
	exchange: 		String,										//"cryptsy"/"btc-e"/etc
	exchange_id: 	{type: Number, default: -1},
	price: 			Number,										//primary_coin/secondary_coin
	quantity: 		Number										//#primary_coin
});

mongoose.model('Trade', TradeSchema);