function person(name, age) {
    this.name = name;  
    this.age = age;
    this.changeName = function (name) {
        this.name = name;
    }
}

var p = new person("David", 21);
p.changeName("John");

document.write(p.name);








/*Methods are functions that are stored as object properties.

methodName = function() { code lines }

Access an object method using the following syntax:

objectName.methodName()

A method is a function, belonging to an object. It can be referenced using the <b>this</b> keyword.

The this keyword is used as a reference to the current object, meaning that you can access the object's properties and methods using it.

Defining methods is done inside the constructor function.*/