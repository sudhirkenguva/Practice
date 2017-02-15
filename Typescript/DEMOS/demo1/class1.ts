class Person{
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }

    show(){
        console.log('Name '+this.name+'\n Age '+this.age);
    }
};

let p=new Person('John',35);
p.show(); 