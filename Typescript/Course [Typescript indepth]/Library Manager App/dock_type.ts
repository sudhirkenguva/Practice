// Two objects are considered of same types when  the shape of their types are same (even if the types are different)

interface Duck {
    walk: () => void
    swim: () => void
    quack: () => void
}

let duckLike = {
    walk: () => console.log('Walks like Duck') ,
    swim: () => console.log('Walks like Duck') ,
    quack: () => console.log('Walks like Duck')
}

function duckFun(duck: Duck) {

}


