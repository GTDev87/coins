var request = require('request');
var _ = require('underscore');

var market_data_extracter = function(callback){
	request('https://www.cryptsy.com/api.php?method=marketdata', function (error, response, body) {
		var cryptsy_json = JSON.parse(body);
		if (!error && response.statusCode === 200 && cryptsy_json.success === 1) {
			callback(cryptsy_json);
		}
	});
}
exports.market_data_extracter = market_data_extracter;

var order_data_extracter = function(callback){
	request('https://www.cryptsy.com/api.php?method=orderdata', function (error, response, body) {
		var cryptsy_json = JSON.parse(body);
		if (!error && response.statusCode === 200 && cryptsy_json.success === 1) {
			callback(cryptsy_json);
		}
	});
}
exports.order_data_extracter = order_data_extracter;

exports.public_data = function(callback){
	market_data_extracter(function(market_data){
		order_data_extracter(function(order_data){
			_.each(order_data.return, function(order_data, coin_key){
				market_data.return.markets[coin_key].sellorders = order_data.sellorders;
				market_data.return.markets[coin_key].buyorders = order_data.buyorders;
			});
			callback(market_data.return.markets);
		});
	});
}
exports.public_data = public_data;