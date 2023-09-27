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
enum Role { ADMIN, READ_ONLY, AUTHOR};

const person = {
    name : 'tonytega',
    age : 100,
    hobbies : ['day','dia'],
    role : Role.ADMIN
}



console.log(person.role)