import { useState, KeyboardEvent } from "react";

import styled from "styled-components";

type TagsProps = {
   tags: string[];
};

const RecipientTags = ({ tags }: TagsProps): JSX.Element => {
   const [currentRecepients, setCurrentRecepients] = useState<string[]>(tags);

   const removeTags = (indexToRemove: number): void => {
      setCurrentRecepients([...currentRecepients.filter((_, index) => index !== indexToRemove)]);
   };

   const addTags = (event: KeyboardEvent<HTMLInputElement>): void => {
      const target = event.target as HTMLInputElement;
      if (target?.value !== "") {
         setCurrentRecepients([...currentRecepients, target.value]);
         target.value = "";
      }
   };
   return (
      <RecipientInput>
         <Tags>
            {currentRecepients.map((tag, index) => (
               <Tag key={index}>
                  <span>{tag}</span>
                  <TagCloseIcon onClick={() => removeTags(index)}>x</TagCloseIcon>
               </Tag>
            ))}
         </Tags>
         <input type="text" onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)} />
      </RecipientInput>
   );
};

export default RecipientTags;

const RecipientInput = styled.div`
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   min-height: 30px;
   width: 480px;
   padding: 0 8px;
   border: 1px solid rgb(214, 216, 218);
   border-radius: 6px;
   &:focus-within {
      border: 1px solid #0052cc;
   }
   input {
      flex: 1;
      border: none;
      height: 30px;
      font-size: 14px;
      padding: 5px 0 5px 0;
      &:focus {
         outline: transparent;
      }
   }
`;

const Tags = styled.ul`
   display: flex;
   flex-wrap: wrap;
   padding: 0;
   margin: 8px 0 0 0;

   span {
      padding: 0px 5px;
   }
`;

const Tag = styled.li`
   width: auto;
   height: 28px;
   display: flex;
   align-items: center;
   justify-content: center;
   color: black;
   padding: 0 8px;
   font-size: 14px;
   list-style: none;
   border-radius: 30px;
   margin: 0 8px 8px 0;
   background: #e4e2f4;
`;

const TagCloseIcon = styled.span`
   display: block;
   width: 16px;
   height: 16px;
   line-height: 14px;
   text-align: center;
   font-size: 14px;
   margin-left: 8px;
   color: #0052cc;
   border-radius: 50%;
   background: #fff;
   cursor: pointer;
`;
