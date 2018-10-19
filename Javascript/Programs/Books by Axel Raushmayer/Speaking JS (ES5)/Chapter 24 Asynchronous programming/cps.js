// CPS : continuous passing style (callback style)

// recursive way of printing array content

var printArr = function(arr) {
    printElem(arr,function(elem,index,next){
        console.log(elem);
    },function(){
        console.log('done');
    });
};

printElem = function(arr,visitor,done) {
    if(index < arr.length) {
        
        printElem(++index,arr);
    }
}

printArr([10,'sudhir',50]);