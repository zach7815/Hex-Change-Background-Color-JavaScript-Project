const button = document.querySelector(".btn");
const title = document.querySelector(".title");
const body = document.querySelector("body");


function randomColor()  {
    let color ="#";
    let letters = "0123456789ABCDEF";
    for ( i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color
}

button.addEventListener("click", ()=>{
    body.style.backgroundColor= randomColor();
  })

  button.addEventListener("click", ()=>{
      title.innerText= "Hex-Color:" + randomColor()
  })

  body.addEventListener("keydown", (e)=>{
      if(e.control==="space"){
          body.style.backgroundColor=randomColor()
      }
  })
