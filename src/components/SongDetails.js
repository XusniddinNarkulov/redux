import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
   console.log(props);
   const renderDetail = () => {
      if (props.selectSongReducer.name) {
         return (
            <div>
               <div className="ui card">
                  <div className="image">
                     <img src="/images/avatar2/large/kristy.png" />
                  </div>
                  <div className="content">
                     <a className="header">{props.selectSongReducer.name}</a>
                     <div className="meta">
                        <span className="date">
                           {props.selectSongReducer.author}
                        </span>
                     </div>
                     <div className="description">
                        {props.selectSongReducer.author} is an art director
                        living in New York.
                     </div>
                  </div>
                  <div className="extra content">
                     <a>
                        <i className="user icon"></i>
                        {props.selectSongReducer.time}
                     </a>
                  </div>
               </div>
            </div>
         );
      } else {
         return <h1>Loading...</h1>;
      }
   };

   return renderDetail();
};

const getMystate = (state) => {
   return state;
};

export default connect(getMystate)(SongDetail);
