const API_URL = 'https://fsa-async-await.herokuapp.com/'

const fetchAllSongs = async () => {
    try {
        const response = await fetch(`${API_URL}api/guided-practice/songs`);
        const songs = await response.json();
        console.log(songs);
        return songs;
    } catch (err) {
        console.log(err)
    }
}

console.log(fetchAllSongs());

const songContainer = document.getElementById('song-container');

const renderAllSongs = async (songsArr) => {
    songsArr.forEach((song) => {
        const div = document.createElement('div');
        songContainer.append(div);
        
        const h3 = document.createElement('h3');
        h3.innerHTML = song.title;
        div.append(h3);
    });
}

// const addNewSong = async (song) => {
//     try {
//         const response = await fetch(`${API_URL}api/guided-practice/songs`, {
//             method: 'POST',
//             body: JSON.stringify({ title: song.title, release_date: song.release_date, length: song.length, genre_id: song.genre_id, artist_id: song.artist_id }),
//             headers: { 'Content-Type': 'application/json' }
//         });
//         const newSong = await response.json
//         return newSong;
//     } catch (err) {
//         console.log(err);
//     }
// }


const init = async () => {
    console.log('hello world');
    const songs = await fetchAllSongs();
    console.log(songs);
    renderAllSongs(songs);
    

}

init();