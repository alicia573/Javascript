var plaatjes = [1,2,3];
var teller= 0;
var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage= "url('img/fish1.jpg')";

slideholder.addEventListener("click",function () {
  getFish();
  slideholder.style.backgroundImage= "url('img/fish" +getFish() +".jpg')";

});
function getFish(){
  if(teller >= 9) {
    teller = 1;
  }else{
    teller++;
  }
  console.log(teller);

  return teller;
}

