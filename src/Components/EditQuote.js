import React from "react";
import QuoteForm from "./QuoteForm";

const EditQuote = (props) => {
   const { id, name, body, editQuote, handleToggle } = props;

    const formSubmission = (formData) => {
        editQuote(formData)
    }

   return (
      <div className="container">
         <QuoteForm
            id={id}
            name={name}
            body={body}
            formSubmission={formSubmission}
            handleToggle={handleToggle}
         />
      </div>
   );
};

export default EditQuote;
