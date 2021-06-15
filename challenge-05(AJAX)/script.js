const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(url)
.then(response => response.json())
.then(data =>cities.push(...data))

const findMatches = (wordToMatch, cities)=>{
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi')
        return place.city.match(regex) || place.state.match(regex)
        
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


const displayMatches = (ev)=>{
    const matchArray= findMatches(ev.target.value, cities);
    const html = matchArray.map(place=>{
        const regex = new RegExp(ev.target.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${ev.target.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${ev.target.value}</span>`);
    return `
    <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
    </li>
        `;
    }).join('');
    suggestRef.innerHTML=html;
}


const searchRef = document.querySelector('.search');
// const suggestRef = document.querySelector('.suggestions')

searchRef.addEventListener('change', displayMatches)
searchRef.addEventListener('keyup', displayMatches)

