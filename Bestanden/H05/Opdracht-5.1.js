
pics = document.getElementById("pics");
createPicsHolders();
creatFishImages();

  function createPicsHolders() {
      for(var i =1; i <= 9; i++){
        pictureHolder = document.createElement("div");
        pictureHolder.className = "fishpictures";
        pictureHolder.id = "picture-holder-" + i ;
        pics.appendChild(pictureHolder);
    }
  }
  function creatFishImages() {
     pictureHolders = document.getElementsByClassName("fishpictures");
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
    favoriete.style.backgroundImage ="url('img/heart.png')";
  }


