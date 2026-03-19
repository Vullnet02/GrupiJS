
  const img = document.getElementById("bannerImg");
  const photos = ["assets/image-4.jpg", "assets/image-3.png", "assets/image-1.png"];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % photos.length;
    img.src = photos[index];
  }, 3000); 





const burger = document.getElementById("burger");
const nav = document.getElementById("navMenu");

burger.addEventListener("click", function(){

if(nav.style.display === "block"){
    nav.style.display = "none";
}else{
    nav.style.display = "block";
}

});



// let count = 10;

// btnClick.addEventListener("click", function () {
//   count = count + 10;
//   text.innerText = "Ti i ki " + count + " Kaqika n kfc";
  

// });

