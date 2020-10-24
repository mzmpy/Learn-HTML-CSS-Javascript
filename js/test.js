var mzm = Person('mzm', 25);
console.log(mzm);

var stu_mzm = new Student(01, 'mzm', 25);
console.log(stu_mzm);

function Person(name, age) {
    obj = new Object();
    obj.name = name;
    obj.age = age;
    return obj;
}

function Student(no, name, age) {
    this.no = no;
    this.name = name;
    this.age = age;
}