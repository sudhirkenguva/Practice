var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stockArchiveSchema = new Schema({
  _id: Schema.Types.Mixed,
  date: String,
  symbol: String,
  open: Number,
  close: Number,
  low: Number,
  high: Number,
  volume: Number
});

exports.stockArchiveModel = mongoose.model('stockfigures', stockArchiveSchema);
