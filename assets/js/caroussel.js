const imgArray = [
    "/assets/img/img1.jpg",
    "/assets/img/img2.jpg",
    "/assets/img/img3.jpg",
    "/assets/img/img4.jpg",
    "/assets/img/img5.jpg"
];

/**
 * @param imgArray take a array of string with the full adress of the wanted images
 * @constructor Carousel, used to build a caroussel from a image adress array
 */

const Caroussel = function (imgArray) {
    const imgDiv = document.createElement("div")
    imgDiv.style.backgroundSize = "83vw 54vh";
    imgDiv.style.border = "2px solid black";
    imgDiv.style.width = "80vw";
    imgDiv.style.height = "50vh";
    imgDiv.style.margin = "auto";
    imgDiv.style.borderRadius = "5px";
    imgDiv.style.padding = "15px";
    document.querySelector("body").appendChild(imgDiv)

    const btnContainer = document.createElement("div")
    btnContainer.style.width = "100%";
    btnContainer.style.height = "100%";
    btnContainer.style.display = "flex";
    btnContainer.style.justifyContent = "space-between";
    btnContainer.style.alignItems = "center";
    imgDiv.appendChild(btnContainer);

    const leftBtn = document.createElement("button")
    leftBtn.innerHTML = "<"
    leftBtn.style.background = "darkgray";
    leftBtn.style.border = "none";
    leftBtn.style.borderRadius = "100%";
    leftBtn.style.fontSize = "2rem";
    leftBtn.style.height = "3rem";
    leftBtn.style.width = "3rem";
    leftBtn.style.cursor = "pointer";
    btnContainer.appendChild(leftBtn)

    const rightBtn = document.createElement("button")
    rightBtn.innerHTML = ">"
    rightBtn.style.background = "darkgray";
    rightBtn.style.border = "none";
    rightBtn.style.borderRadius = "100%";
    rightBtn.style.fontSize = "2rem";
    rightBtn.style.height = "3rem";
    rightBtn.style.width = "3rem";
    rightBtn.style.cursor = "pointer";
    btnContainer.appendChild(rightBtn)

    let imgIndex = 0;

    this.draw = function (){
        imgDiv.style.backgroundImage = "url(" + imgArray[imgIndex] + ")"
    }

    this.set = function () {
        this.draw()

        rightBtn.addEventListener("click", () => {
            imgIndex++;
            this.draw();
            if (imgIndex === imgArray.length) {
                imgIndex = 0;
                this.draw()
            }
        })

        leftBtn.addEventListener("click", () => {
            imgIndex--
            this.draw()
            if (imgIndex === -1) {
                imgIndex = imgArray.length -1
                this.draw()
            }
        })
    }
}

const tryCaroussel = new Caroussel(imgArray);
tryCaroussel.set();



