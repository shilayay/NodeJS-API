const users=[
    { id: 1, name: 'saba sababa'},
    {id :2 ,name: 'mark makak'},
    { id: 3, name: 'cucu rella'},
    {id :4 ,name: 'eran zehavi'},
    { id: 5, name: 'ofir newbarber'},
    {id :6,name: 'lil marker'}
]
function add (){
users.push({ id:users.length+1,name: 'nickgershove'})
}
function delLastUser (){
    users.pop()
    }
function findUserbyId(id){
        return users.find(user=> user.id === id)?.name
}
function delFirstUser(){
    users.shift()
}
function changeNamebyId(Nid,Cname){
   user= users.find(user=> user.id === Nid);
   if(!user){
    throw new Error('User not found')
   }
   user.name=Cname
}
function retOnlyEven(){
   var user= users.filter(user=> user.id%2===0)
   console.log(user)
    }
function returnFieldName(){
    return users.map((item)=>({
        userId:item.id,
        userName:item.name,
        
    }));
}
function returnRandomAge(){
    return users.map((item)=>({
        userId:item.id,
        userName:item.name,
        userAge: Math.floor(Math.random()*35)+15
        
    }));
}
function isEvenId(){
    return users.some((item)=>item.id%2===0)
    
}
function avgAge(){
    userWage=returnRandomAge()
    


}
const arr =[1,2,3]
const arr2 =[4,5,6]
const arr3 = [...arr,...arr2,7,8,9]



const numbers =[1,2,3]
function Sum(a,b,c){
    let sum= a+b+c;
    console.log(sum)
}

const user={
    id: 12345,
    username: 'yohay123',
    age:25,
    hobbies:['reading','swimming'],
    info:{
        email:'reshet@gmail.com',
        address:'Tel Aviv' ,
    }
};
const user2=structuredClone(user);//IMPORTANTTTTT
const {id,...rest}=user
user2.info.address='Tel Aviv'
console.log(user2)


