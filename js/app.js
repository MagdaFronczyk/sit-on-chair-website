document.addEventListener("DOMContentLoaded", function () {

    // Task 1 dropdown menu


    var navLinks = document.querySelectorAll(".nav__link");

    for (var el of navLinks) {
        el.addEventListener("mouseover", function (event) {

            var dropdown = this.nextElementSibling;

            if (dropdown !== null) {

                if (dropdown.style.display === "none" || dropdown.style.display === "") {
                    dropdown.style.display = "block"
                } else { // czy ten warunek potrzebny? Działa bez niego
                    dropdown.style.display = "none"
                }

            }

        });

        el.addEventListener("mouseout", function (event) {

            var dropdown = this.nextElementSibling;

            if (dropdown !== null) {

                if (dropdown.style.display === "block" || dropdown.style.display === "") {
                    dropdown.style.display = "none"
                } else { // czy ten warunek potrzebny? Działa bez niego
                    dropdown.style.display = "block"
                }

            }

        })
    }


    // Task 2 main section disappearing headings

    var mainSectionArticle1 = document.querySelector(".main-section__article1");

    var mainSectionArticle2 = document.querySelector(".main-section__article2");

    mainSectionArticle1.addEventListener("mouseover", function (event) {

        var heading = this.firstElementChild;

        if (heading.style.display === "block" || heading.style.display === "") {
            heading.style.display = "none"
        } else { // czy ten warunek potrzebny? Działa bez
            heading.style.display = "block";
        }

    });

    mainSectionArticle1.addEventListener("mouseout", function (event) {

       var heading = this.firstElementChild;

       if (heading.style.display === "none" || heading.style.display === "") {
           heading.style.display = "block";
       } else { // czy ten warunek potrzebny? Działa bez
           heading.style.display = "none";
       }

    });

    mainSectionArticle2.addEventListener("mouseover", function (event) {

        var heading = this.firstElementChild;

        if (heading.style.display === "block" || heading.style.display === "") {
            heading.style.display = "none"
        } else { // czy ten warunek potrzebny? Działa bez
            heading.style.display = "block";
        }

    });

    mainSectionArticle2.addEventListener("mouseout", function (event) {

        var heading = this.firstElementChild;

        if (heading.style.display === "none" || heading.style.display === "") {
            heading.style.display = "block";
        } else { // czy ten warunek potrzebny? Działa bez
            heading.style.display = "none";
        }

    });

    // Task 3 slider
    
    var slider = document.querySelector(".slider"); // pobieramy slider
    var slides = document.querySelectorAll(".slider-slide"); //pobieramy slajdy
    var current = 0; // licznik slajdów
    var btnPrev = slider.querySelector(".slider-prev"); //pobieramy przyciski
    var btnNext = slider.querySelector(".slider-next");

    btnPrev.addEventListener("click", function (event) {

        for (var el of slides) { //usuwamy wszystkim zdjęciom klasę
            el.classList.remove("slider-slide-active")
        }
        current --; //jestesmy w btn prev wiec poruszyamy się po tabicy obrazkow do tytulu i zmniejszamy licznik

        if (current < 0) { // kiedy licznik mniejszy od zera
            current = slides.length - 1; // ustawiamy licznik na ostatni slajd
        }

        slides[current].classList.add("slider-slide-active"); //dodajemy do slajdu z obecnym licznikiem klasę active

    });

    btnNext.addEventListener("click", function (event) {

        for (var el of slides) {
            el.classList.remove("slider-slide-active")
        }
        current ++; //poruszamy się do przodu, zwiększamy licznik

        if (current > slides.length-1) { // kiedy licznik jest wiekszy od dlugosci tablicy wszystkich slajdow
            current = 0; // ustawiamy licznik na zero
        }

        slides[current].classList.add("slider-slide-active"); //nadajemy licznikowi i indeksie rownym licznikowi klase active

    })

});