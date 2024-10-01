
const comments = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('error nad ', error));
      
}


const comments2 =async() =>{
    const res =await fetch('https://jsonplaceholder.typicode.com/comments');
    const data =await res.json();
    console.log(data);
    {
     
       
    }
}
