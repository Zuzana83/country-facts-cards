import fetchCards from "./fetchCards.js";
import displayCards from "./displayCards.js"
import paginate from "./paginate.js"
import displayButtons from "./displayButtons.js";

const pageStatusEl = document.getElementById("pageStatus");
const heading = document.querySelector("h1");
const btnContainer = document.querySelector(".btn_container");
let index = 0;
let pages = [];

const setupUI = () => {
    displayCards(pages[index]);
    displayButtons(btnContainer, pages, index);
    pageStatusEl.textContent = `Page ${index + 1} of ${pages.length}`;
}

const init = async() => {
    const info = await fetchCards();
    if(!info) {
        heading.textContent = "Failed to load countries. Please try again.";
    }
    heading.textContent = "List of European Countries";
    pages = paginate(info);
    setupUI();
   
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
