import React, { useState, createContext, useEffect } from "react";

export const stateProvider = createContext();

function StateStore(props) {



  const accumulate = {
  };

  return (
    <>
      <stateProvider.Provider value={accumulate}>
        {props.children}
      </stateProvider.Provider>
    </>
  );
}

export default StateStore;
