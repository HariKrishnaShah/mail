// const login = (username, password) =>
// {
//     if(!username)
//     {
//         return "Username is required"
//     }
//     else if(!password)
//     {
//         return "password is required"
//     }
//     else if(username !== "hari" || password !== "password")
//     {
//         return "username or password is wrong"
//     }
//     else
//     {
//         return "Access Granted"
//     }
// }

// console.log(login("hari", "password"));
// console.log(login());

const login = (username, password)=>{
    const result = !username?"username required":!password?"password required":username.toLowerCase()!=="hari" || password!== "password"?"incorrect username or password":"Access granted";
    return result;
}

console.log(login("hari", "password"));
console.log(login())
