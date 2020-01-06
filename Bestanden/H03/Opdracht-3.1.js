
var plaatjes = document.getElementsByTagName("img");
var random= 0;

for( var i = 0; i<plaatjes.length; i++){
  random = Math.floor(Math.random () * 9) +1;
  plaatjes[i].src = "../H03/img/fish" + random + ".jpg";
}
