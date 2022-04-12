import React from "react";
import QuotesContainer from "./Components/QuotesContainer";

const App = (props) => {
   return (
      <div className="md">
         <div className="container">
            <h1 className="display-1 bg-success p-2 text-dark bg-opacity-25">
               Quote Book
            </h1>
            <QuotesContainer />
         </div>
      </div>
   );
};

export default App;
