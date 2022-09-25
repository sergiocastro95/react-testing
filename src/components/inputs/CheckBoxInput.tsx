import { ReactElement } from "react";
import "../../styles/components/inputs/CheckboxInput.css";
interface ICheckBoxInput {
  label: string;
  id: string;
  value: string;
}

const CheckBoxInput = ({ label, id, value }: ICheckBoxInput): ReactElement => {
  return (
    <div className="checkbox-input-container">
      <input type="checkbox" id={id} value={value} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
export default CheckBoxInput;
