const FetchData= async()=>{
    const response= await fetch("https://jsonplaceholder.typicode.com/photos")
    console.log(response.ok);
    if (response.ok==true){
        const data =await response .json();
        console.log(data);
        
    }
};
FetchData();