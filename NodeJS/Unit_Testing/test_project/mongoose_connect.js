var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testDB');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected!!');
  // Take the reference from 'Schema'
  var employeeSchema = new mongoose.Schema({
      name: String, 
      age: Number, 
      designation: String
  }); 
  
  // Compile the created schema into model / collection
  var employee = mongoose.model('employee',employeeSchema);
  
  
  // creating and saving the doc  ===========================
  var emp1 = new employee({
      name: "Sudhir",
      age: 20, 
      designation: "SE"
    });
    emp1.save(function(err,emp1){
        if(err){
            console.err(err);
            return; 
        }
        console.log('Employeee record saved....');
        employee.find(function(err,res) {
            console.log(res);
            console.log('No. of records: ',res.length);
            db.close();
        })
    })
    // creating and saving the doc  ===========================
});
