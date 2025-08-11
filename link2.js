const fetchdata = async()=>{
        try{
            // sucessful case we have to write code inside try
    const response= await fetch("https://jsonplaceholder.typicode.com/albums");
    console.log(response.status)
    if (response.status==true){
        const data = await response.json();
        console.log(data);
    }else{
        throw new Error("something is wrong");
    }
 } catch(err) {
console.log("Error",err);
}
    };

    fetchdata();
    
