 function lodeUS2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUer(data))
 }

 
 function  displayUer(data){
    const hl=document.getElementById('users-list');

    for(const user of data){

console.log(user);
const li =document.createElement('li');
li.innerText=user.name ;
ul.appendChild(li);

    }
 }