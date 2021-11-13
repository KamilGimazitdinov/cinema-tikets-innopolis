const films = [
    { 
        time: "10:00", 
        adult: true,
        name: "Человек-паук", 
        genres: [ "фантастика", "боевик", "приключения"]    
    },

    { 
        time: "12:00", 
        rate: "R",
        adult: true,
        name: "Собачья жизнь 2", 
        genres: [ "фэнтэзи", "драма", "комедия"]    
    },

    { 
        time: "14:00", 
        rate: "G",
        name: "История игрушек 4", 
        genres: [ "мультфильм", "фэнтэзи", "комедия"]    
    },

    { 
        time: "16:00", 
        rate: "NC-17",
        name: "Люди в чёрном: Интэрнэшнл", 
        genres: [ "фантастика", "боевик", "комедия"]    
    }
]

let div = document.getElementById('table-body');
console.log (div.innerHTML);

div.innerHTML = '';

function renderFilmTableItem(film){

return `
    <div class="table_check table_row"><img src="./images/tablica/galochkawh.svg" class="table_icon-size" alt="галочка"></div>
    <div class="table_cell table_row">${film.time}</div>
    <div class="table_cell table_row"><a href="https://www.kinopoisk.ru/film/838/" target="_block" class="table_references">${film.name}</a></div>
    <div class="table_cell table_row">${film.genres.join(', ')}</div>
    `
} 

for (let film of films) {
    console.log(film);

    if (!(film.rate === 'R' || film.rate === 'NC-17')){
        div.innerHTML += renderFilmTableItem(film);
    }

    
}

// div.innerHTML = `
//     <div class="table_check table_row table_row_dark"><img src="./images/tablica/galochkawh.svg" class="table_icon-size" alt="галочка"></div>
//     <div class="table_cell table_row table_row_dark">${films[0].time}</div>
//     <div class="table_cell table_row table_row_dark"><a href="https://www.kinopoisk.ru/film/838/" target="_block" class="table_references">${films[0].name}</a></div>
//     <div class="table_cell table_row table_row_dark">${films[0].genres.join(', ')}</div>
// `;
// div.innerHTML += `
//     <div class="table_check table_row table_row_dark"><img src="./images/tablica/galochkawh.svg" class="table_icon-size" alt="галочка"></div>
//     <div class="table_cell table_row table_row_dark">${films[1].time}</div>
//     <div class="table_cell table_row table_row_dark"><a href="https://www.kinopoisk.ru/film/838/" target="_block" class="table_references">${films[1].name}</a></div>
//     <div class="table_cell table_row table_row_dark">${films[1].genres.join(', ')}</div>
// `;
// div.innerHTML += `
//     <div class="table_check table_row table_row_dark"><img src="./images/tablica/galochkawh.svg" class="table_icon-size" alt="галочка"></div>
//     <div class="table_cell table_row table_row_dark">${films[2].time}</div>
//     <div class="table_cell table_row table_row_dark"><a href="https://www.kinopoisk.ru/film/838/" target="_block" class="table_references">${films[2].name}</a></div>
//     <div class="table_cell table_row table_row_dark">${films[2].genres.join(', ')}</div>
// `;
// div.innerHTML += `
//     <div class="table_check table_row table_row_dark"><img src="./images/tablica/galochkawh.svg" class="table_icon-size" alt="галочка"></div>
//     <div class="table_cell table_row table_row_dark">${films[3].time}</div>
//     <div class="table_cell table_row table_row_dark"><a href="https://www.kinopoisk.ru/film/838/" target="_block" class="table_references">${films[3].name}</a></div>
//     <div class="table_cell table_row table_row_dark">${films[3].genres.join(', ')}</div>
// `;
