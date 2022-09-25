import { ReactElement } from "react";
import "../../styles/components/inputs/CheckboxInput.css";
interface ICheckBoxInput {
  label: string;
  id: string;
  name: string;
}

const CheckBoxInput = ({ label, id, name }: ICheckBoxInput): ReactElement => {
  return (
    <div className="checkbox-input-container">
      <input type="checkbox" id={id} name={name} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
export default CheckBoxInput;
