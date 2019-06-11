function Person(name, age, gender){
    //向对象中添加属性
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let per = new Person('小明',12,'男')

//调试
console.log(per)
// console.log(obj2.sayName)