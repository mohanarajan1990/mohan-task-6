HAISTING
let a;
console.log(a);

a = 10;

console.log(a);
 


test();


function test()  {
    console.log("mohan");
};
student = {
    name: "mohan",
    college:"govt college",
    address: [
{
    no: 1,
    street: "street",
    state: "tn",
},
{
    no: 2,
    state: "tn",
},
{
    no:2,
    street: "anna",
    state: "tn",
},
],
};
    
let jcontent =JSON.stringify(student);
console.log(jcontent);
console.log(student.address[0].no);

//REST OPERATOR
function add(...data) {
    console.log(data);
    let total = 0;
    for (let i of data) {
        total += 1;
    }
    console.log(total);
}
add(2,4,6,8,10.25,9,4,39,45,67,68,99,00,100);




//template literal
let name = "mohan";
let course = "js";
console.log("my name is " + name + " , working for " + course);

console.log(
    `my name is $(name), working for $(course) , He has worken more than $(
        400*25+5
    }`
);



