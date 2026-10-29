const contentGrid = document.querySelector(".content_grid");

const display = (info) => {
    // const countries = info;
    // console.log(countries);
  
    let cards = info.map((country) => {
    const {flag, name, capital, population, highestPoint, longestRiver, mostPopularSport} = country;
    return `<li><article class="card">
                <header>
                    <img src="${flag}" alt="Flag of ${name}" />
                </header>
                <div class="card_body">
                    <p class="card_info">
                        <span class="tag_name">Country:</span><span>${name}</span>
                    </p>
                    <p class="card_info">
                        <span class="tag_name">Capital City:</span><span>${capital}</span>
                    </p>
                    <p class="card_info">
                        <span class="tag_name">Population:</span><span>${population.toLocaleString()}</span>
                    </p>
                    <p class="card_info">
                        <span class="tag_name">Highest Peak:</span><span>${highestPoint}</span>
                    </p>
                    <p class="card_info">
                        <span class="tag_name">Longest River:</span><span>${longestRiver}</span>
                    </p>
                    <p class="card_info">
                        <span class="tag_name">Most popular sport:</span><span>${mostPopularSport}</span>
                    </p>
                </div>
            </article></li>`
}).join("");
 
    contentGrid.innerHTML = cards;
}

export default display;