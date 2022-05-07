import { combineReducers } from "redux";
const songList = [
   {
      name: "Uzbek",
      time: "2:22",
      author: "Jasur",
   },
   {
      name: "salom",
      time: "3:34",
      author: "RahimGrid",
   },
   {
      name: "hello",
      time: "4:56",
      author: "Adele",
   },
];

const songListReducer = (history = songList, song) => {
   if (song.type === "ADD") {
      return (history = [...history, song.payload]);
   }
   return history;
};

const selectSongReducer = (history = [], selectedSong) => {
   if (selectedSong.type === "SELECTED") {
      return selectedSong.payload;
   }
   return history;
};

const reducers = combineReducers({ songListReducer, selectSongReducer });
export default reducers;
