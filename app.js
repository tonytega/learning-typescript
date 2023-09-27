// const person: {
//     name : string;
//     age : number
// } = {
//     name : 'tonytega',
//     age : 100,
// }
// const person: {
//         name : string;
//         age : number;
//         hobbies : string[];
//         role: [number,string]
//     }  = {
//     name : 'tonytega',
//     age : 100,
//     hobbies : ['day','dia'],
//     role : [12, 'author']
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'tonytega',
    age: 100,
    hobbies: ['day', 'dia'],
    role: Role.ADMIN
};
console.log(person.role);
