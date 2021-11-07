const films = [
    { 
        time: "10:00", 
        name: "Человек-паук", 
        genres: [ "фантастика", "боевик", "приключения"]    
    },

    { 
        time: "12:00", 
        name: "Собачья жизнь 2", 
        genres: [ "фэнтэзи", "драма", "комедия"]    
    },

    { 
        time: "14:00", 
        name: "История игрушек 4", 
        genres: [ "мультфильм", "фэнтэзи", "комедия"]    
    },

    { 
        time: "16:00", 
        name: "Люди в чёрном: Интэрнэшнл", 
        genres: [ "фантастика", "боевик", "комедия"]    
    }
]

let div = document.getElementById('table-body');
console.log (div.innerHTML);

div.innerHTML = '';

for (let index = 0; index < films.length; index++) {
    div.innerHTML += `
    <div class="table_check table_row table_row_dark"><img src="./images/tablica/galochkawh.svg" class="table_icon-size" alt="галочка"></div>
    <div class="table_cell table_row table_row_dark">${films[index].time}</div>
    <div class="table_cell table_row table_row_dark"><a href="https://www.kinopoisk.ru/film/838/" target="_block" class="table_references">${films[index].name}</a></div>
    <div class="table_cell table_row table_row_dark">${films[index].genres.join(', ')}</div>
`;
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
