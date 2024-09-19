const users=[
    {
        id:1,
        name:'johnson',
        age:13
    },
    {
        id:2,
        name:'Jones',
        age:12,

    },
   
];
const getUser= (id)=>{
    return users[id];
}

module.exports = {
    users,
    getUser,
};
