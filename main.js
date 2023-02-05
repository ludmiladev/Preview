// let num = 0;
// num = num + 1;
// console.log(num);

// let num = 0;
// num ++;
// console.log(num);

// let num = 12;
// num ++;
// console.log(num);

// let num = 12;
// -- num
// ++ num
// console.log(num);

// let users = [
//
//     {name:'Ivan',username:'Vanya',password:123456789},
//     {name:'Ivan',username:'Vanya',password:123456789},
//     {name:'Ivan',username:'Vanya',password:232326789},
//     {name:'Ivan',username:'Vanya',password:100001000},
//     {name:'Ivan',username:'Vanya',password:123456789},
//     {name:'Ivan',username:'Vanya',password:125544789},
//     {name:'Ivan',username:'Vanya',password:123456789},
//     {name:'Ivan',username:'Vanya',password:888456789},
//     {name:'Ivan',username:'Vanya',password:888888899},
//     {name:'Ivan',username:'Vanya',password:987654321},
//     {name:'Ivan',username:'Vanya',password:'PP123444'}
// ]
// for (let i = 0; i<users.length; i++){
//     console.log('test');
//     console.log(users[i]);
//     document.write('sdfsdafsgsf-');
//     let user = users[1];
//     document.write(`<h2> user info - ${users[i].name} ${users[i].password} </h2>`);
//     document.write(`<h2> user info - ${user.name} ${user.password} </h2>`);
// }

let users = [

    {name:'Ivan',username:'Vanya',password:123456789},
    {name:'Ivan',username:'Vanya',password:123456789},
    {name:'Ivan',username:'Vanya',password:232326789},
    {name:'Ivan',username:'Vanya',password:100001000},
    {name:'Ivan',username:'Vanya',password:123456789},
    {name:'Ivan',username:'Vanya',password:125544789},
    {name:'Ivan',username:'Vanya',password:123456789},
    {name:'Ivan',username:'Vanya',password:888456789},
    {name:'Ivan',username:'Vanya',password:888888899},
    {name:'Ivan',username:'Vanya',password:987654321},
    {name:'Ivan',username:'Vanya',password:'PP123444'}
]
for (const user of users) { //натискала iter
    console.log(user);
}