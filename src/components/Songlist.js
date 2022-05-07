import React from "react";
import { connect } from "react-redux";
import { selectSongAction } from "../actions/actions";

class SongList extends React.Component {
   constructor(props) {
      super(props);
      console.log(props);
   }

   renderList = () => {
      return this.props.songListReducer.map((val) => {
         return (
            <div>
               <div className="ui relaxed divided list">
                  <div
                     className="item"
                     onClick={() => this.props.selectSongAction(val)}
                     style={{ cursor: "pointer" }}
                  >
                     <i className="large github middle aligned icon">
                        {val.time}
                     </i>
                     <div className="content">
                        <a className="header">{val.name}</a>
                        <div className="description">{val.author}</div>
                     </div>
                  </div>
               </div>
            </div>
         );
      });
   };

   render() {
      return <div>{this.renderList()}</div>;
   }
}

const getMystate = (state) => {
   console.log(state);
   return state;
};

export default connect(getMystate, { selectSongAction })(SongList);
