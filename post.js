
    function lodPost(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
          .then(json => console.log(json))
    }



    function DisplayPost(post){
        for(const posts of post){
            console.log(posts);

        }

    }