/*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

const playlist = {
    name: "Мой плейлист",
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],

    // метод - это ф-ция которая работает со свойствами обьекта
    // getName: function(){ // old school
    //     console.log("Ага, это getName :) ")
    // }

    changeName(newName){ // new school

        // ссылка на обьект который эту ф-цию вызвал
        console.log('this внутри changeName: ', this);

        this.name = newName;
    },
    addTrack(track){
        this.tracks.push(track);
    },
    updateRating(newRating){
        this.rating = newRating;
    },
    getTrackCount(){
        return this.tracks.length;
    }
};

console.log(playlist.getTrackCount());

playlist.changeName('Новое имя');

playlist.addTrack('трек-4');

console.log(playlist.getTrackCount());

playlist.updateRating(4);

console.log(playlist);