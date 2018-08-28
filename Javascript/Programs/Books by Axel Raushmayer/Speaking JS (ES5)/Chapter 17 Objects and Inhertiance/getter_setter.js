let obj = {
    set name(arg) {
        this.value = arg;
    },
    get name() {
        return this.value;
    }
};

obj.name = 20;

console.log(obj.name);