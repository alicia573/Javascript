var teller= 0;
var slidertop = document.getElementById("slider-top");
slidertop.style.backgroundImage= "url('../top/top1.jpg)";

  slidertop.addEventListener("click",function () {
    getSlider();
    slidertop.style.backgroundImage= "url('img/top" +getSlider() +".jpg')";
  });

var sliderbetween = document.getElementById("slider-between");
sliderbetween.style.backgroundImage= "url('../top/top1.jpg)";

  sliderbetween.addEventListener("click",function () {
    getSlider();
    sliderbetween.style.backgroundImage= "url('img/between" +getSlider() +".jpg')";
  });

var sliderend= document.getElementById("slider-end");
sliderend.style.backgroundImage= "url('../top/top1.jpg)";

  sliderend.addEventListener("click",function () {
    getSlider();
    sliderend.style.backgroundImage= "url('img/end" +getSlider() +".jpg')";
  });


  function getSlider(){
    if(teller >= 3) {
      teller = 1;
    }else{
      teller++;
    }
    console.log(teller);
    return teller;
  }
