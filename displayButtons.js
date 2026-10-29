const displayButtons = (container, pages, activeIndex) => {
    let btns = pages.map((_, pageIndex) => {
        const isActive = activeIndex === pageIndex;
        return `<button class="page_btn ${activeIndex === pageIndex ? 'active_btn' : ''}" data-index=${pageIndex} ${isActive ? 'aria-current="page"' : ''}>${pageIndex + 1}</button>`;  
    })
    btns.unshift("<button class='prev_btn'>prev</button>")
    btns.push("<button class='next_btn'>next</button>");
    container.innerHTML = btns.join("");
    const activeBtnEl = container.querySelector(".active_btn");
    if(activeBtnEl) activeBtnEl.focus();
}

export default displayButtons;