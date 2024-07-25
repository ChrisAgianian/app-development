document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // Dropdown Menu
    let menubtn = document.querySelector(".menubtn");
    let collapsemenu = document.querySelector(".collapsemenu");

    if (menubtn) {
        console.log("Menu button found");
        menubtn.addEventListener("click", function(){
            collapsemenu.classList.toggle("closeToOpen");
        });
    } else {
        console.error("Menu button not found");
    }

    if (collapsemenu) {
        console.log("Collapse menu found");
    } else {
        console.error("Collapse menu not found");
    }

    // Modal Windows for All Animal Cards
    let cards = document.querySelectorAll(".img-container");
    console.log(`Found ${cards.length} cards`);

    cards.forEach((card, index) => {
        let modal = document.getElementById(`modal${index + 1}`);
        let closemodal = document.querySelector(`.closemodal${index + 1}`);

        if (card) {
            console.log(`Card ${index + 1} found`);
            card.addEventListener("click", function() {
                if (modal) {
                    modal.style.display = "block";
                } else {
                    console.error(`Modal ${index + 1} not found`);
                }
            });
        } else {
            console.error(`Card ${index + 1} not found`);
        }

        if (closemodal) {
            console.log(`Close button for modal ${index + 1} found`);
            closemodal.addEventListener("click", function() {
                if (modal) {
                    modal.style.display = "none";
                } else {
                    console.error(`Modal ${index + 1} not found`);
                }
            });
        } else {
            console.error(`Close button for modal ${index + 1} not found`);
        }

        window.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});

//Colors Page Collapsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}