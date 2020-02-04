
pics = document.getElementById("pics");
createPicsHolders();
creatFishImages();
  function createPicsHolders() {
      for(var i =1; i <= 9; i++){
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i ;
        pics.appendChild(pictureHolder);
    }
  }
  function creatFishImages() {
     pictureHolders = document.getElementsByClassName("picture-holder");
    for ( var i = 0; i < pictureHolders.length; i++){
      favoriete = document.createElement("div");
      favoriete.className = "favoriete";
      favoriete.id = "favoriete_" + ( i + 1);
      fishPlaatjes = document.createElement("img");
      fishPlaatjes.src= "img/fish"+(i + 1) + ".jpg";
      fishPlaatjes.id = ( i + 1);
      fishPlaatjes.addEventListener("click", function () {
        maakFavoriete(this.id);
      });
      pictureHolders[i].appendChild(favoriete);
      pictureHolders[i].appendChild(fishPlaatjes);
    }
  }
  function maakFavoriete(id) {
    console.log("Maak mij Favoriet! Het gaat om vissen...." + id );
    notsofavoriet = document.getElementsByClassName("favoriete");

    for( var i = 0; i < notsofavoriet.length; i++){
      notsofavoriet[i].style.backgroundImage = "none";
    }
    favoriete = document.getElementById("favoriete_" + id);
    favoriete.style.backgroundImage ="url('heart.png')";
  }


document.getElementById("pics").style.cssText="width:900px; height: 1350px; border: solid 1px white; margin: auto; font-size: 0px;"
