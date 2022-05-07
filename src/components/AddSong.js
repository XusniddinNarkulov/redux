import React, { useState } from "react";
import { connect } from "react-redux";
import { addSongAction } from "../actions/actions";

const AddSong = (props) => {
   const [name, setName] = useState();
   const [author, setAuthor] = useState();
   const [time, setTime] = useState();
   return (
      <form
         className="ui form"
         onSubmit={(e) => {
            e.preventDefault();
            return props.addSongAction({ name, author, time });
         }}
      >
         <div className="field">
            <label>Song Name</label>
            <input
               onChange={(e) => setName(e.target.value)}
               type="text"
               name="first-name"
               placeholder="song name"
            />
         </div>
         <div className="field">
            <label>Author Name</label>
            <input
               onChange={(e) => setAuthor(e.target.value)}
               type="text"
               name="last-name"
               placeholder="author Name"
            />
         </div>
         <div className="field">
            <div className="ui checkbox">
               <input
                  onChange={(e) => setTime(e.target.value)}
                  tabindex="0"
                  className="hidden"
                  placeholder="time"
               />
               <label>Songtime</label>
            </div>
         </div>
         <button className="ui button" type="submit">
            Add
         </button>
      </form>
   );
};

const getMystate = (state) => {
   return state;
};

export default connect(getMystate, { addSongAction })(AddSong);
