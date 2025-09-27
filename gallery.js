//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = ()=> { //once window loaded
    filterItem.onclick = (selectedItem)=> { //when user clicked on filterItem div
        if(selectedItem.target.classList.contains("item")) { //if user click element has .item class
            filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in the first element
            selectedItem.target.classList.add("active"); //add that active class on the user selected element or item
            let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of the user selected item and storing in a filtername variable
            filterImg.forEach((image)=> {
                let filterImages = image.getAttribute("data-name"); //getting image data-name value
                //if user selected item data name value is equal to image data name value
                // or user selected item data name value is equal to "all"
                if ((filterImages == filterName) || filterName == "visi") {
                  image.classList.remove("hide");
                    image.classList.add("show");
                } else {
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            });
        }
    }
    for (let index = 0; index < filterImg.length; index++) {
       filterImg[index].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
    }
}

//selecting all required elements
const previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
categoryName = previewBox.querySelector(".title p"),
closeIcon = previewBox.querySelector(".icon");
shadow = document.querySelector(".shadow");

//fullscreen preview image function 
function preview(element){
    //once user clicks on any image, scrollbar disappears
    document.querySelector("body").style.overflowY = "hidden";
    let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link and store in a variable
    let selectedImgCategory = element.getAttribute("data-name"); //getting user clicked data-name value
    categoryName.textContent = selectedImgCategory; //passing the data-name value to category name variable
    previewImg.src = selectedPrevImg; //passing the user clicked image source in the preview image source
    previewBox.classList.add("show"); //show the preview box
    shadow.classList.add("show"); //show the shadow color
    closeIcon.onclick = ()=>{
        previewBox.classList.remove("show"); //hide the preview box
        shadow.classList.remove("show"); //hide the shadow color
        document.querySelector("body").style.overflowY = "scroll"; //shows the scroll bar
    }
}