import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js"
import paginate from "./paginate.js"
import displayButtons from "./displayButtons.js";

const heading = document.querySelector("h1");
const btnContainer = document.querySelector(".btn_container");
let index = 0;
let pages = [];

const setupUI = () => {
    displayFollowers(pages[index]);
    displayButtons(btnContainer, pages, index);
}

const init = async() => {
    const info = await fetchFollowers();
    heading.textContent = "List of European Countries";
    pages = paginate(info);
    setupUI();
    // console.log(pages);
}

btnContainer.addEventListener("click", function(e) {
    if(e.target.classList.contains("btn_container")) return;
    if(e.target.classList.contains("page_btn")) {
        index = parseInt(e.target.dataset.index);
    }
    if(e.target.classList.contains("next_btn")) {
        index++;
        if(index > pages.length - 1) {
            index = 0;
        }
    }
    if(e.target.classList.contains("prev_btn")) {
        index--;
        if(index < 0) {
            index = pages.length - 1;
        }
    }
    setupUI();
});

window.addEventListener("load", init);
