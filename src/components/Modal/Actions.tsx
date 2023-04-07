const Action = (): JSX.Element => {
   return (
      <div>
         <p className="bold-text">Action</p>
         <div className="action-section-container">
            <Radio label="Send Email" />
            <Radio label="Create Drafts" />
         </div>
      </div>
   );
};

type RadioProps = {
   label: string;
};

const Radio = ({ label }: RadioProps) => {
   return (
      <div className="radio-buttons-container">
         <label>
            <input type="radio" name="radio" />
            <span>{label}</span>
         </label>
      </div>
   );
};

export default Action;
