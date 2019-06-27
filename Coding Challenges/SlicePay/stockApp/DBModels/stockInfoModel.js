var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stockInfoSchema = new Schema({
    _id: Schema.Types.Mixed,
    Symbol: String,
    Name: String,
    MarketCap: String,
    Sector: String,
    Industry: String
  });



  exports.stockInfoModel = mongoose.model('stockinfos', stockInfoSchema);