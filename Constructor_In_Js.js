function person(name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;
}

var p1 = new person("John", 42, "green");
var p2 = new person("Amy", 21, "red");

document.write(p1.age); 
document.write(p2.name);

/*Once you have an object constructor, you can use the new keyword to create new objects of the same type.*/