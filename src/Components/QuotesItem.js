import React, { useState } from "react";
import EditQuote from "./EditQuote";

const QuotesItem = (props) => {
   const { id, name, body, removeQuote, editQuote } = props;

   const [toggle, setToggle] = useState(false);

   const handleRemove = () => {
      const confirmRemove = window.confirm("Are you sure??");
      if (confirmRemove) {
         removeQuote(id);
      }
   };

   const handleToggle = () => {
      const result = !toggle;
      setToggle(result);
   };

   return (
      <div className="text-left md">
         {toggle ? (
            <div className="md">
               <EditQuote
                  id={id}
                  name={name}
                  body={body}
                  editQuote={editQuote}
                  handleToggle={handleToggle}
               />
               <br />
               <button onClick={handleToggle} className="btn btn-danger btn-sm">
                  Cancel
               </button>
               <br />
               <br/>
            </div>
         ) : (
            <div>
               <blockquote className="blockquote">
                  <p>{body}</p>
               </blockquote>
               <figcaption className="blockquote-footer">
                  <cite title="Source Title">{name}</cite>
               </figcaption>
               <div className="d-grid gap-2 d-md-flex justify-content-md">
                  <button
                     onClick={handleToggle}
                     className="btn btn-primary btn-sm"
                  >
                     Edit
                  </button>
                  <button
                     onClick={handleRemove}
                     className="btn btn-danger btn-sm"
                  >
                     Remove
                  </button>
               </div>
               <br />
            </div>
         )}
      </div>
   );
};

export default QuotesItem;
