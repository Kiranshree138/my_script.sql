//step 1 classes
let node = document.getElementsByClassName("a");
//read operation
let texts = node[0].innerHTML;
console.log (texts);

//write operation
let text1 = node[0].innerHTML;
console.log (text1);

let node1= document.querySelector("button");
let text2 = node1.innerHTML;
console.log (text2);

let text3 = node1.innerHTML;
console.log (text3);

// node1.textContent= "hello";

let sty = document.querySelector("h1");
console.log(sty);

sty[0].style.color="red";
sty[1].style.color="blue";

//to remove class
// sty[1].classList.remove("hidden");
//to add class
// sty[1].classList.add("body");

//toggle class
sty[1].classList.remove("hidden");
sty[1].classList.add("body");

//1. create tag
const v=document.createElement("h3");

//2. put content
v.textContent = "added from js";

//3.where we have to put in node 
const h3 = document.getElementsByClassName("cnt");

//4./
 h3[0].appendChild(v);
/* <div>
     <h2 class="sd" > fgfgfg</h2>
</div> */

const div1= document.createElement("div");
const h2 = document.createElement("h2");

h2.textContent="Anything";
h2.classList.add="sd";
div.appendChild(h2);

document.body.appendChild(div);
//   <div>
{
    /*    <button>increment</button>
                <button>decrement</button>
               <button>reset</button>              
    </div>*/
}
const div= document.createElement("div");
const b1 = document.createElement("button");
const b2 = document.createElement("button");
const b3 = document.createElement("button");

b1.textContent="increment";
b2.textContent="decrement";
b3.textContent="reset";

div1.appendChild(b1);
div1.appendChild(b2);
div1.appendChild(b3);

document.body.appendChild(div1);

 let img = document.createElement("img");
//   img.id="myImage"
//   img.src="https://my.alfred.edu/zoom/_images/foster-lake.jpg" 
//   img.alt="Description of image" 
//   img.height="200" 
//   img.width="300"
img.setAttribute('id','my imageId');
img.setAttribute('scr','https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg');
img.setAttribute('alt','Description of image');
img.setAttribute('height','200');
img.setAttribute('width',' 300');
document.body.appendChild(img);
