import React, { useState } from "react";

const TestEmailBar = (): JSX.Element => {
   return (
      <div>
         <p className="light-text">Send Test Email</p>
         <div className="test-email-conatainer">
            <TagsInput tags={["dev@gmail.com"]} />
            <button> Send Test </button>
         </div>
      </div>
   );
};

type TagsProps = {
   tags: string[];
};

const TagsInput = ({ tags }: TagsProps): JSX.Element => {
   const [currentRecepients, setCurrentRecepients] = useState<string[]>(tags);

   const removeTags = (indexToRemove: number): void => {
      setCurrentRecepients([...currentRecepients.filter((_, index) => index !== indexToRemove)]);
   };

   const addTags = (event: Event): void => {
      const target = event.target as HTMLInputElement;
      if (target?.value !== "") {
         setCurrentRecepients([...currentRecepients, target.value]);
         target.value = "";
      }
   };
   return (
      <div className="tags-input">
         <ul id="tags">
            {currentRecepients.map((tag, index) => (
               <li key={index} className="tag">
                  <span className="tag-title">{tag}</span>
                  <span className="tag-close-icon" onClick={() => removeTags(index)}>
                     x
                  </span>
               </li>
            ))}
         </ul>
         <input type="text" onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)} />
      </div>
   );
};

export default TestEmailBar;
