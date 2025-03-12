// Section Maksym 

const scientists = [ 
    { 
        name: "Albert", 
        surname: "Einstein", 
        born: 1879, 
        dead: 1955, 
        id: 1 
    }, 
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        id: 2 
    }, 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        id: 3 
    }, 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        id: 4 
    }, 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        id: 5 
    }, 
    { 
        name: "Nicolaus", 
        surname: "Copernicus", 
        born: 1473, 
        dead: 1543, 
        id: 6 
    }, 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        id: 7 
    }, 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        id: 8 
    }, 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        id: 9 
    }, 
    { 
        name: "Sarah E.", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        id: 10 
    }, 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        id: 11 
    }, 
    { 
        name: "Hanna", 
        surname: "Hammarström", 
        born: 1829, 
        dead: 1909, 
        id: 12 
    } 
];

function generateScientistCards() {
    const list = document.querySelector(".scientist-blocks");

    scientists.forEach(scientist => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${scientist.name} ${scientist.surname} <span>${scientist.born} - ${scientist.dead}</span>`;
        list.appendChild(listItem);
    });
}

document.addEventListener("DOMContentLoaded", generateScientistCards);

function updateList(scientistsList) {
    const list = document.querySelector(".scientist-blocks");
    list.innerHTML = "";
    scientistsList.forEach(scientist => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${scientist.name} ${scientist.surname} <span>${scientist.born} - ${scientist.dead}</span>`;
        list.appendChild(listItem);
    });
}

document.getElementById("19-st-born").addEventListener("click", () => {
    updateList(scientists.filter(s => s.born >= 1801 && s.born <= 1900));
});

document.getElementById("albert-birth-year").addEventListener("click", () => {
    const einstein = scientists.find(s => s.name === "Albert" && s.surname === "Einstein");
    alert(`Albert Einstein народився в ${einstein?.born} році`);
});

document.getElementById("sort-alfabet").addEventListener("click", () => {
    updateList([...scientists].sort((a, b) => a.surname.localeCompare(b.surname)));
});

document.getElementById("start-with-c").addEventListener("click", () => {
    updateList(scientists.filter(s => s.surname.startsWith("C")));
});

document.getElementById("sort-years").addEventListener("click", () => {
    updateList([...scientists].sort((a, b) => (a.dead - a.born) - (b.dead - b.born)));
});

document.getElementById("delete-start-with-a").addEventListener("click", () => {
    updateList(scientists.filter(s => !s.name.startsWith("A")));
});

document.getElementById("youngest").addEventListener("click", () => {
    const youngest = scientists.reduce((youngest, s) => (s.born > youngest.born ? s : youngest), scientists[0]);
    alert(`Наймолодший вчений: ${youngest.name} ${youngest.surname}, народжений у ${youngest.born}`);
});

document.getElementById("lived-longest").addEventListener("click", () => {
    const longestLived = scientists.reduce((max, s) => ((s.dead - s.born) > (max.dead - max.born) ? s : max), scientists[0]);
    const shortestLived = scientists.reduce((min, s) => ((s.dead - s.born) < (min.dead - min.born) ? s : min), scientists[0]);
    alert(`Найдовше прожив ${longestLived.name} ${longestLived.surname}: ${longestLived.dead - longestLived.born} років.\nНайменше прожив ${shortestLived.name} ${shortestLived.surname}: ${shortestLived.dead - shortestLived.born} років.`);
});

document.getElementById("starts-with-simmiar-letters").addEventListener("click", () => {
    updateList(scientists.filter(s => s.name[0] === s.surname[0]));
});
