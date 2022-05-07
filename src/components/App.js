import React, { useState } from "react";
import SongList from "./Songlist";
import SongDetail from "./SongDetails";
import Header from "./header";
import AddSong from "./AddSong";

const App = (props) => {
   console.log(props);
   const [show, setShow] = useState(false);
   return (
      <div>
         <Header />
         <button onClick={() => setShow(!show)}>Add</button>
         {show ? <AddSong /> : ""}
         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <SongList />
            <SongDetail />
         </div>
      </div>
   );
};

export default App;
