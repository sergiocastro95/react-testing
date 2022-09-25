import { ReactElement } from "react";
import "../../styles/components/inputs/TextInput.css";
interface ITextInput {
  label: string;
  id: string;
  name: string;
  required?: boolean;
}

const TextInput = ({ label, id, name, required }: ITextInput): ReactElement => {
  return (
    <div className="text-input-container">
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={name} required={required} />
    </div>
  );
};
export default TextInput;
