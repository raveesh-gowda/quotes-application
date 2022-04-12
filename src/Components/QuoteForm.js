import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const QuoteForm = (props) => {
   const {
      formSubmission,
      id: slNo,
      name: author,
      body: quote,
      handleToggle,
   } = props;

   const id = slNo ? slNo : uuidv4();
   const [name, setName] = useState(author ? author : "");
   const [body, setBody] = useState(quote ? quote : "");

   const handleNameChange = (e) => {
      setName(e.target.value);
   };

   const handleBodyChange = (e) => {
      setBody(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      const formData = {
         //  id: Number(new Date()),
         id: id,
         name: name,
         body: body,
      };

      formSubmission(formData);

      if (handleToggle) {
         handleToggle();
      }

      setName("");
      setBody("");
   };

   return (
      <div className="md-3">
         <form onSubmit={handleSubmit}>
            <label className="form-label">Name</label>
            <br />
            <input
               type="text"
               className="form-control form-control-sm"
               value={name}
               onChange={handleNameChange}
            />
            <br />
            <label className="form-label">Body</label>
            <br />
            <textarea
               className="form-control form-control-sm"
               value={body}
               onChange={handleBodyChange}
            ></textarea>
            <br />
            <button type="submit" className="btn btn-success btn-sm">
               Save
            </button>
         </form>
      </div>
   );
};

export default QuoteForm;
