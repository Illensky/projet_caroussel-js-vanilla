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
    const imgDiv = document.createElement("div")
    imgDiv.style.border = "2px solid black";
    imgDiv.style.width = "1920px";
    imgDiv.style.height = "1280px";
    imgDiv.style.margin = "auto";
    imgDiv.style.borderRadius = "5px";
    imgDiv.style.overflow = "hidden";
    imgDiv.style.display = "flex";
    imgDiv.id = "imgDiv"

    let imgId = 0
    for (let img of imgArray) {
        const newImg = document.createElement("img");
        newImg.src = img;
        newImg.id = "img" + imgId.toString()
        newImg.style.transform = "translateX(0)"
        newImg.style.transition = "1000ms"
        newImg.style.width = "1920px"
        newImg.style.height = "1280px"
        imgDiv.appendChild(newImg)
        imgId++
    }

    const btnContainer = document.createElement("div")
    btnContainer.style.width = "1920px";
    btnContainer.style.height = "1280px";
    btnContainer.style.display = "flex";
    btnContainer.style.position = "absolute"
    btnContainer.style.justifyContent = "space-between";
    btnContainer.style.alignItems = "center";
    imgDiv.appendChild(btnContainer);

    const leftBtn = document.createElement("button")
    leftBtn.innerHTML = "<"
    leftBtn.id = "leftBtn"
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
    rightBtn.id = "rightBtn"
    rightBtn.style.background = "darkgray";
    rightBtn.style.border = "none";
    rightBtn.style.borderRadius = "100%";
    rightBtn.style.fontSize = "2rem";
    rightBtn.style.height = "3rem";
    rightBtn.style.width = "3rem";
    rightBtn.style.cursor = "pointer";
    btnContainer.appendChild(rightBtn)


    let translate = 0
    this.translateRight = function () {
        translate += 1920
        if (translate === 1920 *imgArray.length){
            translate = 0;
        }

        document.querySelectorAll("#imgDiv img").forEach(img => {
            img.style.transform = "translateX(" + -translate + "px)"
        })
    }

    this.translateLeft = function () {
        translate -= 1920
        if (translate < 0){
            translate = 1920 *(imgArray.length -1);
        }

        document.querySelectorAll("#imgDiv img").forEach(img => {
            img.style.transform = "translateX(" + -translate + "px)"
        })
    }

    this.draw = function () {
        document.querySelector("body").appendChild(imgDiv)

    }

}

const test = new Carousel(imgArray);
test.draw()

document.querySelector("#rightBtn").addEventListener("click", function () {
    test.translateRight()
})

document.querySelector("#leftBtn").addEventListener("click", function () {
    test.translateLeft()
})

