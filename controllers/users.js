import {v4 as uuidv4} from 'uuid';

let users = []

export const createUser = (req, res) => {
    // console.log(req.body)
    const user = req.body;

    //try to store in a database here!
    users.push({...user, id:uuidv4()});
    res.send(`user with name: ${{...user, id:uuidv4()}.firstname} added!`);
}

export const getUsers = (req, res) => {
    res.send(users);
}

export const getUser = (req, res)=>{
    const id = req.params.id;

    const foundUser = users.find((user) => user.id === id);
    console.log(foundUser);
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const id = req.params.id;
    users = users.filter((user) => user.id !==id );
    res.send(`user with id ${id} is deleted!`);
}

export const updateUser = (req, res)=>{
    const id = req.params.id;
    const {firstname, lastname, age} = req.body;
    
    const user = users.find((user)=>user.id === id);

    if(firstname) user.firstname = firstname;
    if(lastname) user.lastname = lastname;
    if(age) user.age = age;

    res.send(`user with id : ${id} is updated and new info are: `);
}