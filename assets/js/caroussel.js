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

    this.carouselWidth = carouselWidth
    this.carouselHeight = carouselHeight
    this.imgArray = imgArray

    this.imgDiv = document.createElement("div")
    this.imgDiv.style.border = "2px solid black";
    this.imgDiv.style.width = this.carouselWidth;
    this.imgDiv.style.height = this.carouselHeight;
    this.imgDiv.style.margin = "auto";
    this.imgDiv.style.borderRadius = "5px";
    this.imgDiv.style.overflow = "hidden";
    this.imgDiv.style.display = "flex";
    this.imgDiv.id = "imgDiv"

    this.imgId = 0
    for (let img of this.imgArray) {
        this.newImg = document.createElement("img");
        this.newImg.src = img;
        this.newImg.id = "img" + this.imgId.toString();
        this.newImg.style.transform = "translateX(0)";
        this.newImg.style.transition = "1000ms";
        this.newImg.style.width = this.carouselWidth;
        this.newImg.style.height = this.carouselHeight;
        this.imgDiv.appendChild(this.newImg);
        this.imgId++;
    }

    this.btnContainer = document.createElement("div")
    this.btnContainer.style.width = this.carouselWidth;
    this.btnContainer.style.height = this.carouselHeight;
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

    this.translateLeft = function () {
        this.translate -= parseInt(this.carouselWidth)
        if (this.translate < 0){
            this.translate = parseInt(this.carouselWidth) *(imgArray.length -1);
        }

        document.querySelectorAll("#imgDiv img").forEach(img => {
            img.style.transform = "translateX(" + -this.translate + "px)"
        })
    }

    this.translateRight = function () {
        this.translate += parseInt(this.carouselWidth)
        if (this.translate === parseInt(this.carouselWidth) *imgArray.length){
            this.translate = 0;
        }

        document.querySelectorAll("#imgDiv img").forEach(img => {
            img.style.transform = "translateX(" + -this.translate + "px)"
        })
    }

    this.rightBtn.addEventListener("click", () => this.translateRight())

    this.leftBtn.addEventListener("click", () => this.translateLeft())
}

const test = new Carousel(imgArray, "1920px", "1280px");
test.draw()

