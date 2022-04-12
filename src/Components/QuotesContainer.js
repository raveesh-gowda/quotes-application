import React, { useState, useEffect } from "react";
import QuotesList from "./QuotesList";
import AddQuote from "./AddQuote";

const QuotesContainer = (props) => {
   const [quotes, setQuotes] = useState([]);

   const addQuote = (quote) => {
      //    console.log("container", quote)
      const result = [quote, ...quotes];
      setQuotes(result);
   };

   const removeQuote = (id) => {
      const result = quotes.filter((quote) => {
         return quote.id !== id;
      });
      setQuotes(result);
   };

   const editQuote = (quote) => {
      const result = quotes.map(q => {
         if (q.id === quote.id) {
            return {...q, ...quote}
         } else {
            return {...q}
         }
      })
      setQuotes(result)
   }

   useEffect(() => {
      const result = JSON.parse(localStorage.getItem("quotes")) || [];
      setQuotes(result);
   }, []);

   useEffect(() => {
      localStorage.setItem("quotes", JSON.stringify(quotes));
   }, [quotes]);

   return (
      <div className="container">
         <div className="row">
            <div className="col-md-9 bg-dark p-2 text-dark bg-opacity-10">
               <QuotesList quotes={quotes} removeQuote={removeQuote} editQuote={editQuote} />
            </div>
            <div className="col-md-3">
               <AddQuote addQuote={addQuote} />
            </div>
         </div>
      </div>
   );
};

export default QuotesContainer;
