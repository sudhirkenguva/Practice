function msg(text) {
    console.log(JSON.stringify(this) + "says:" + text);
}
msg.call('Sudhir', 'Hello World');
msg('Ram');
msg.call(undefined, 'Hari');
var person = {
    name: 'Mr.John',
    fun: msg
};
person.fun('Rama Krishna');
