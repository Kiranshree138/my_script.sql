const fetchData=async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    console.log(response.ok);
    
};
fetchData();
console.log("Hooi");