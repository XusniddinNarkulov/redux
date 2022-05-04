import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

function arrayRemove(arr, value) {
   return arr.filter(function (ele) {
      return ele != value;
   });
}

// actions
const addMusic = (name, time) => {
   return {
      type: "add",
      music: {
         name,
         time,
      },
   };
};

const findMusicTime = (name, info) => {
   return {
      type: "find",
      music: {
         name,
         info,
      },
   };
};

const removeMusic = (name, info) => {
   return {
      type: "remove",
      music: {
         name,
         info,
      },
   };
};

// reducers
const addMusicReducer = (list = [], obj) => {
   if (obj.type === "add") {
      return (list = [...list, obj.music]);
   }
   return list;
};
const findMusicReducer = (list = [], obj) => {
   if (obj.type === "find") {
      const mus = obj.music.info.addMusicReducer.find(
         (val) => val.music.name == obj.music.name
      );
      return mus.music.time;
   }
   return list;
};

const removeMusicReducer = (list = [], obj) => {
   if (obj.type === "remove") {
      const mus = obj.music.info.addMusicReducer.find(
         (val) => val.music.name == obj.music.name
      );
      return arrayRemove(list, mus);
   }
};

let store = createStore(addMusicReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(addMusic("hello", "2:44 "));
store.dispatch(addMusic("hell01", "3:44 "));
store.dispatch(findMusicTime("hello", store.getState()));
store.dispatch(removeMusic("hello1", store.getState()));

// const { createStore, combineReducers } = redux;

// const departaments = combineReducers({ addHistory, removeHistory });

// const store = createStore(departaments);

// store.dispatch(addMusic("hello"));

// console.log(store.getState());
