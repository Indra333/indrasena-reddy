const myObject={
    name: "Mike",
    age:30,
    city: "London"
};

Object.prototype.country="England";


for( let key in myObject ){
    if(myObject.hasOwnProperty(key)){
        console.log(myObject[key]);
    }
    
}