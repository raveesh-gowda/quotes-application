import React from "react";
import QuotesItem from "./QuotesItem";

const QuotesList = (props) => {
   const { quotes, removeQuote, editQuote } = props;

   return (
      <div>
         {quotes.length === 0 ? (
            <div>
               <h3 className="display-5">No Quotes Found </h3>
               <p>Add your first quote</p>
            </div>
         ) : (
            <div>
               <h3 className="display-5">My Quotes - {quotes.length}</h3>
               <div className="md">
                  {quotes.map((quote) => {
                     return (
                        <QuotesItem
                           key={quote.id}
                           {...quote}
                           removeQuote={removeQuote}
                           editQuote={editQuote}
                        />
                     );
                  })}
               </div>
            </div>
         )}
      </div>
   );
};

export default QuotesList;
