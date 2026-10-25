const displayButtons = (container, pages, activeIndex) => {
    let btns = pages.map((_, pageIndex) => {
        return `<button class="page_btn ${activeIndex === pageIndex ? 'active_btn' : 'null'}" data-index=${pageIndex}>${pageIndex + 1}</button>`;  
    })
    btns.unshift("<button class='prev_btn'>prev</button>")
    btns.push("<button class='next_btn'>next</button>");
    
    container.innerHTML = btns.join("");;
}

export default displayButtons;