// var body = document.getElementsByTagName("body")
// console.log(body[0]);
// let a=[1,2,3,4,5,6,7,8,9,10]
// for(let i=0;i<a.length;i++)
// {
//     console.log(`a % 2==0`,a[i]);
// }
// console.log(a);

// let b=a.map((el,ui)=>{
// console.log(`3 * ${el}=`, el*3);
// });
// console.log(a);


// let table=(param)=>{

// }

// table(3);
// let aa="40";
// if (aa==4){
//     console.log("value is same");
// }else if(aa===40) {
//     console.log("value is 40");
// }else if (a==90) {
//     console.log("value is 90");
// }else{
//     console.log("value is not same");
// }

// //if marks of student is more than 90 , he will get bike
// //if more than 80 Party
// //more than 70 game
// //else nothing

// let marks=100;
// if(marks>=90){
//     console.log("bike or trip");
// }else if (marks>=80){
//     console.log("party")
// }else if(marks>=70){
//     console.log("game")
// }else{
//     console.log("nothing")
// }

//condition ? true value: false value
// marks > 70 ? table(3) : table(5);
// let a=[1,2,3];
// let b=[1,2,3];
// console.log(a[0]=b);
// console.log(a[0]=b);l
// let a = [1,2,3,4,5,6,7,8,9,10];

// let b = a.filter((el)=> el >= 5).map((el)=> el*7);
// let c= b.map((el)=> el *5);

// console.log(b);
// let b = a.reduce((acc,cur,index)=>{
//     return acc +cur;
// },0);
// console.log(b);
// {
//     a.filter(n => n % 2 === 0)
// let b = a.reduce((acc, cur) => acc + cur, 0);

// }

// let acc = 0;
// acc = acc + 1;
// acc = acc + 2;
// acc = acc + 3;
// acc = acc + 4;
// acc = acc + 5;
// acc = acc + 6;

 // const nums = [1, 2, 3, 4, 5, 6]; // Changed from 'a' to 'nums'

// const evenSum = a.filter((el) => el % 2 === 0).reduce((a, e) => a + e, 0);
// const oddSum = a.filter((el) => el % 2 === 1).reduce((a, e) => a + e, 0);

// console.log(evenSum, oddSum); // Outputs: 12 9
// const aa=[0,0,0,0,0,0,0,0,0,0,0,0]

// const se = aa
// .map((el,i)=>el + i + 1)
// .filter((el)=> el % 2 == 0)
// .reduce((a,e)=> a + e);

// const so = aa
// .map ((el,i) => i + 1)
// .filter((el) => el % 2 == 1)
// .filter((el) => el > 5)
// .reduce((a,e) => a + e);

// // console.log(se,so);
// let body = document.getElementsByTagName("h1");
// console.log(body[0]);
// //class Selector

// let classes = document.getElementsByClassName("a");
// console.log(classes[1]);

//     //id selector
//     let val = document.getElementById("val");
//     console.log(val);

//     // queryselector
//     let varr = document.querySelector("h1");
//     console.log(varr);
//     //let varr=document.querySelector(".a");
//     //console.log(varr);

//     // queryselectorAll
//     let as = document.querySelector("#val");
//     console.log(as[0]);
    
//     //Write operation
// let aaa = document.querySelector(".a");
//     //read operation
// let text =aaa.innerHTML;
// console.log(text);

// //write operation
// aaa[0].textContext = "Entering from js";


// //step 1 classes
// let node = document.getElementsByClassName("a");
// //read operation
// let texts = node[0].innerHTML;
// console.log (texts);

// //write operation
// let text1 = node[0].innerHTML;
// console.log (text1);

// let node1= document.querySelector("button");
// let text2 = node1.innerHTML;
// console.log (text2);

// let text3 = node1.innerHTML;
// console.log (text3);

// // node1.textContent= "hello";

// let sty = document.querySelector("h1");
// console.log(sty);

// sty[0].style.color="red";
// sty[1].style.color="blue";

//to remove class
// sty[1].classList.remove("hidden");
//to add class
// sty[1].classList.add("body");

// //toggle class
// sty[1].classList.remove("hidden");
// sty[1].classList.add("body");

// //1. create tag
// const v=document.createElement("h3");

// //2. put content
// v.textContent = "added from js";

// //3.where we have to put in node 
// const h3 = document.getElementsByClassName("cnt");

// //4./
//  h3[0].appendChild(v);
// /* <div>
//      <h2 class="sd" > fgfgfg</h2>
// </div> */

// const div1= document.createElement("div");
// const h2 = document.createElement("h2");

// h2.textContent="Anything";
// h2.classList.add="sd";
// div.appendChild(h2);

// document.body.appendChild(div);
// //   <div>
// {
//     /*    <button>increment</button>
//                 <button>decrement</button>
//                <button>reset</button>              
//     </div>*/
// // }
// const div1= document.createElement("div");
// const b1 = document.createElement("button");
// const b2 = document.createElement("button");
// const b3 = document.createElement("button");

// b1.textContent="increment";
// b2.textContent="decrement";
// b3.textContent="reset";

// div1.appendChild(b1);
// div1.appendChild(b2);
// div1.appendChild(b3);

// document.body.appendChild(div1);

//  let img = document.createElement("img");

// img.setAttribute('id','myimageId');
// img.setAttribute('src', 'https://tse2.mm.bing.net/th/id/OIP.6L7shpwxVAIr279rA0B1JQHaE7?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3');
// img.setAttribute('alt', 'Description of image');
// img.setAttribute('height', '200');
// img.setAttribute('width', '300');
// document.body.appendChild(img);

// const incButton = document.querySelector("Button");

// console.log(incButton);

// incButton.addEventListener("click", ()=>{
//     console.log("button clicked");
// });

// const btn = document.getElementsByTagName("button");
// const incbtn = btn[0];
// const decbtn = btn[1];
// const resetbtn = btn[2];
// const p = document.querySelector("#val");
// let val = 0;
// let inc = true;

// let pause =(()=>{
// if (val>=10){
//     inc = false;
// }
// });

// const handleInc = () => {
//     if (inc) {
//         val = val + 1;
//         p.textContent = val;
//         p.style.color = "green"; 
//         pause();
//     }
// };

// const handleDec = () => {
//     val = val - 1;
//     p.textContent = val;
//     p.style.color = "red"; 
// };

// // const handler = (vall)=>{
// //     if (inc) {
// //         vall? (val = val + 1) : (val = val - 1);
// //         val>=0? (p,style.color="green") : (p,style.color="blue");
// //         p.textContent=val;
// //     }
// //     pause();
// // };

// const init = ()=>{
//     val = 0;
//     p.textContent = val;
//     inc = true;
// };

// incbtn.addEventListener("click", handleInc);
// decbtn.addEventListener("click", handleDec);
// resetbtn.addEventListener("click", init);

// const fetchData = async()=>{
// const response = await fetch ("https://jsonplaceholder.typicode.com/users");
// console.log(response.ok);
// if (response.ok==true){
//     const data = await response.json();
// console.log(data);
// }
// };
// fetchData();
// console.log("Hello");


// const fetchData = async()=>{
//     const response= await fetch("https://jsonplaceholder.typicode.com/todos");
//     console.log(response.status);
//     if (response.status==true){
//         const data = await response.json();
//         console.log(data);
//     }
//     };
//     fetchData();
//     console.log("Hello");

//     const FetchData = async()=>{
//     const response= await fetch("https://jsonplaceholder.typicode.com/photos");
//     console.log(response.ok)
//     if (response.ok==true){
//         const data = await response.json();
//         console.log(data);
//     }
//     };
//     FetchData();
//     console.log("Hello");

    
    const fetchdata = async()=>{
        try{
            // sucessful case we have to write code inside try
    const response= await fetch("https://jsonplaceholder.typicode.com/gfgfalbums");
    const response1= await fetch("https://jsonplaceholder.typicode.com/gfgfalbums");
    const response2= await fetch("https://jsonplaceholder.typicode.com/gfgfalbums");
    
if (response.ok==true){
        const data = await response.json();
        console.log(data);
    }
if (response1.ok==true){
        const data = await response.json();
        console.log(data);
    }
    
        if(!response.ok || !response1.ok || !response2.ok){
            throw new Error ("something is wrong");
 } 
}catch(err) {
console.log("Error",err);
}
    };

    fetchdata();
    

   
