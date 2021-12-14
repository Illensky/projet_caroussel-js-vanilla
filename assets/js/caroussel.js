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

const Carousel = function (imgArray, carouselWidth, carouselHeight) {

    this.imgArray = imgArray

    this.imgDiv = document.createElement("div")
    this.imgDiv.style.border = "2px solid black";
    this.imgDiv.style.width = "1920px";
    this.imgDiv.style.height = "1280px";
    this.imgDiv.style.margin = "auto";
    this.imgDiv.style.borderRadius = "5px";
    this.imgDiv.style.overflow = "hidden";
    this.imgDiv.style.display = "flex";
    this.imgDiv.id = "imgDiv"

    this.imgId = 0
    for (let img of this.imgArray) {
        this.newImg = document.createElement("img");
        this.newImg.src = img;
        this.newImg.id = "img" + this.imgId.toString()
        this.newImg.style.transform = "translateX(0)"
        this.newImg.style.transition = "1000ms"
        this.newImg.style.width = "1920px"
        this.newImg.style.height = "1280px"
        this.imgDiv.appendChild(this.newImg)
        this.imgId++
    }

    this.btnContainer = document.createElement("div")
    this.btnContainer.style.width = "1920px";
    this.btnContainer.style.height = "1280px";
    this.btnContainer.style.display = "flex";
    this.btnContainer.style.position = "absolute"
    this.btnContainer.style.justifyContent = "space-between";
    this.btnContainer.style.alignItems = "center";
    this.imgDiv.appendChild(this.btnContainer);

    this.leftBtn = document.createElement("button")
    this.leftBtn.innerHTML = "<"
    this.leftBtn.id = "leftBtn"
    this.leftBtn.style.background = "darkgray";
    this.leftBtn.style.border = "none";
    this.leftBtn.style.borderRadius = "100%";
    this.leftBtn.style.fontSize = "2rem";
    this.leftBtn.style.height = "3rem";
    this.leftBtn.style.width = "3rem";
    this.leftBtn.style.cursor = "pointer";
    this.btnContainer.appendChild(this.leftBtn)

    this.rightBtn = document.createElement("button")
    this.rightBtn.innerHTML = ">"
    this.rightBtn.id = "rightBtn"
    this.rightBtn.style.background = "darkgray";
    this.rightBtn.style.border = "none";
    this.rightBtn.style.borderRadius = "100%";
    this.rightBtn.style.fontSize = "2rem";
    this.rightBtn.style.height = "3rem";
    this.rightBtn.style.width = "3rem";
    this.rightBtn.style.cursor = "pointer";
    this.btnContainer.appendChild(this.rightBtn)


    this.translate = 0

    this.draw = function () {
        document.querySelector("body").appendChild(this.imgDiv)
    }

    this.rightBtn.addEventListener("click", function () {
        Carousel.prototype.translateRight()
    })

    this.leftBtn.addEventListener("click", function () {
        Carousel.prototype.translateLeft()
    })
}

Carousel.prototype.translate = 0

Carousel.prototype.translateRight = function () {
    Carousel.prototype.translate += 1920
    if (Carousel.prototype.translate === 1920 *imgArray.length){
        Carousel.prototype.translate = 0;
    }

    document.querySelectorAll("#imgDiv img").forEach(img => {
        img.style.transform = "translateX(" + -Carousel.prototype.translate + "px)"
    })
}

Carousel.prototype.translateLeft = function () {
    Carousel.prototype.translate -= 1920
    if (Carousel.prototype.translate < 0){
        Carousel.prototype.translate = 1920 *(imgArray.length -1);
    }

    document.querySelectorAll("#imgDiv img").forEach(img => {
        img.style.transform = "translateX(" + -Carousel.prototype.translate + "px)"
    })
}




const test = new Carousel(imgArray);
test.draw()

