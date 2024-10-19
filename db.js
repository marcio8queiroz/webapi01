const {v4} = require("uuid");
const fs = require("fs");
const FILE_PATH = require("path").join(__dirname, "users.json");
 
//global.users = [];



function findUsers(){
    try{
    return require("./users.json");
    }
    catch(ex){
        return [];
    }
   // return global.users;
}

function findUser(id){
    return findUsers.find(item => item.id === id);
}

function insertUser(user){
    const users = findUsers();
    user.id = v4();
    users.push(user);
    fs.writeFileSync(FILE_PATH, JSON.stringify(users));
    return user;
}

function updateUser(id, user){
    const users = findUsers();
    users.forEach((item, index, array) => {
        if(item.id === id){
            user.id = id;
            array[index] = user;
        }
    })
    fs.writeFileSync(FILE_PATH, JSON.stringify(users));
    return user;        
}

function deleteUser(id){
    const users = findUsers();
    users.forEach((item, index, array) => {
        if(item.id == id)
            array.splice(index, 1);
    })
    fs.writeFileSync(FILE_PATH, JSON.stringify(users));
    return id;
}

module.exports = {
    findUsers,
    findUser,
    insertUser,
    updateUser,
    deleteUser,
}