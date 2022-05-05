import { combineReducers } from "redux";
const songList = [
   {
      name: "Uzbek",
      time: "2:22",
      author: "Jasur",
   },
   {
      name: "salom",
      time: "2:22",
      author: "Rahim",
   },
   {
      name: "hello",
      time: "2:22",
      author: "Adele",
   },
];

const songListReducer = (history = songList, song) => {
   return history;
};

const selectSongReducer = (history = [], selectedSong) => {
   if (selectedSong.type === "SELECTED") {
      return selectedSong.payload;
   }
   return history;
};

const reducer = combineReducers({ songListReducer, selectSongReducer });
export default reducer;
