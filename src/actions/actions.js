export const selectSongAction = (detail) => {
   return {
      type: "SELECTED",
      payload: detail,
   };
};

export const addSongAction = (data) => {
   return {
      type: "ADD",
      payload: data,
   };
};
