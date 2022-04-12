import React from "react";
import QuoteForm from "./QuoteForm";

const AddQuote = (props) => {
   const { addQuote } = props;

   const formSubmission = (formData) => {
      // console.log(formData)
      addQuote(formData);
   };

   return (
      <div className="container">
         <h2 className="display-5">Add Quote</h2>
         <QuoteForm formSubmission={formSubmission} />
      </div>
   );
};

export default AddQuote;
