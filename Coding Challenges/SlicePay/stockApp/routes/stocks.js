var express = require('express');
var router = express.Router();
var stockInfoModel = require('../DBModels/stockInfoModel.js').stockInfoModel;
var stockArchiveModel = require('../DBModels/stockArchiveModel.js').stockArchiveModel;

var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/stocks';
mongoose.connect(mongoDB, { useNewUrlParser: true });



function handleError(req, res, errObj) {
  res.status(errObj.code);
  res.send(errObj.msg);
}

/* base route. */
router.get('/', function (req, res) {
  res.send('Welcome to Stocks App');
});


/* This service takes a company name and returns all the price points of that company over
 the entire duration. */
function companySearch(req, res) {
  var companyName = req.query.companyName;
  var mongoDB = 'mongodb://127.0.0.1/my_database';
  mongoose.connect(mongoDB, { useNewUrlParser: true });
  var db = mongoose.connection;
  
  db.on('error', function () {
    return handleError(req, res, { code: 500, msg: 'Unable to connect to db' })
  });


  var query = { "Name": { $regex: companyName, $options: 'i' } };
  stockInfoModel.find(query, function (err, data) {
    var errObj = {};
    if (err) {
      errorObj = { code: 500, msg: err }
      return handleError(req, res, errorObj);
    }
    var Symbol = data && data[0] && data[0].Symbol;
    if (Symbol) {
      stockArchiveModel.find({"symbol":Symbol}, function (err2, data2) {
        if (err2) {
          errorObj = { code: 500, msg: err }
          return handleError(req, res, errorObj);
        }
        res.send(data2);
        db.close();
      })
    } else {
      errorObj = { code: 500, msg: "Internal Server Error" };
      return handleError(req, res, errorObj);
    }
  })
}

/*This service takes two dates as input and return 10 best performing and 10 least
performing stocks in that time frame.*/
function stockPerformance(req, res) {
  res.send('Welcome to stockPerformance');
}

// This service accepts two parameters, “any number of stock tickers in a list” and 
// “two dates”. This will return all the highs, lows and closes of these stocks in the 
// desired time frame.
function stocksInTime(req, res) {
  res.send('Welcome to stocksInTime');
}

// This service takes the ticker symbol and should return all the price points in time of 
// that ticker.
function tickerSearch(req, res) {
  res.send('Welcome to tickerSearch');
}


router.get('/companySearch', companySearch);

router.get('/stockPerformance', stockPerformance);

router.get('/stocksInTime', stocksInTime);

router.get('/tickerSearch', tickerSearch);


module.exports = router;
