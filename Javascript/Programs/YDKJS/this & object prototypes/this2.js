let obj = {
    id: 'India',
    myFun: () => console.log(this.id)
}


setTimeout(obj.myFun, 1000);