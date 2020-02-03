var plaatjes = [1,2,3];
var teller= 0;

var slidertop = document.getElementById("slider-top");
slidertop.style.backgroundImage= "url('../top/top1.jpg)";

slidertop.addEventListener("click",function () {
  getTop();
  slidertop.style.backgroundImage= "url('top/top" +getTop() +".jpg')";
});

var sliderbetween = document.getElementById("slider-between");
sliderbetween.style.backgroundImage= "url('../top/top1.jpg)";

sliderbetween.addEventListener("click",function () {
  getTop();
  sliderbetween.style.backgroundImage= "url('between/between" +getTop() +".jpg')";
});

var sliderend= document.getElementById("slider-end");
sliderend.style.backgroundImage= "url('../top/top1.jpg)";

sliderend.addEventListener("click",function () {
  getTop();
  sliderend.style.backgroundImage= "url('end/end" +getTop() +".jpg')";
});


function getTop(){
  if(teller >= 3) {
    teller = 1;
  }else{
    teller++;
  }
  console.log(teller);
  return teller;
}
