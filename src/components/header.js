import React from "react";

const Header = (props) => {
   return (
      <div className="ui inverted menu">
         <a className="active item">Home</a>
         <a className="item">Messages</a>
         <a className="item">Add Song</a>
      </div>
   );
};

export default Header;
