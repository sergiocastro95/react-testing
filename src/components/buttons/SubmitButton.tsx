import { ReactElement } from "react";
import "../../styles/components/buttons/SubmitButton.css";
const SubmitButton = ({ value }: { value: string }): ReactElement => {
  return <input className="submit-button" type="submit" value={value} />;
};

export default SubmitButton;
