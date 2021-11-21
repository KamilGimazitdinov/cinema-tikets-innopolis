const films = [
    { 
        id: 10,
        time: "10:00", 
        adult: true,
        name: "Человек-паук", 
        genres: [ "фантастика", "боевик", "приключения"], 
        link: 838,
    },

    { 
        time: "12:00", 
        adult: true,
        name: "Человек-паук 2", 
        genres: [ "фантастика", "боевик", "приключения"],
        link: 2898,
    },

    { 
        
        time: "14:00", 
        rate: "R",
        adult: true,
        name: "Собачья жизнь 2", 
        genres: [ "фэнтэзи", "драма", "комедия"],
        link: 1122114,    
    },

    { 
        id: 16,
        time: "16:00", 
        rate: "G",
        name: "История игрушек 4", 
        genres: [ "мультфильм", "фэнтэзи", "комедия"],
        link: 846824,
    },

    { 
        id: 18,
        time: "18:00", 
        rate: "G",
        name: "История игрушек 3", 
        genres: [ "мультфильм", "фэнтэзи", "комедия"],
        link: 258328,
    },

    { 
        time: "20:00", 
        rate: "NC-17",
        name: "Люди в чёрном: Интэрнэшнл", 
        genres: [ "фантастика", "боевик", "комедия"] ,
        link: 693730,
    }
]

let div = document.getElementById('table-body');
console.log (div.innerHTML);

div.innerHTML = '';

const filmHelper = {
    getId(){
        return this.id || `${this.time.replaceAll(" ", "-")}-${this.time}`;
    },
    getTitle(){
        return this.name;
    },
    getTime(){
        return this.time;
    },
    getLink(){
        return this.link
    }
};

function renderFilmTableItem(film){

return `
    <div class="table_check table_row">
        <label>
            <input type="checkbox" class="table__input">
            <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z" fill="white"/>
            </svg>
        </label>
    </div>
    <div class="table_cell table_row">${filmHelper.getTime.apply(film)}</div>
    <div class="table_cell table_row"><a href="https://www.kinopoisk.ru/film/${filmHelper.getLink.apply(film)}/" target="_block" class="table_references">${filmHelper.getTitle.apply(film)}</a></div>
    <div class="table_cell table_row">${film.genres.join(', ')}</div>
    `
} 

for (let film of films) {
    console.log(film);

    if (!(film.rate === 'R' || film.rate === 'NC-17')){
        div.innerHTML += renderFilmTableItem(film);
    }

    
}

