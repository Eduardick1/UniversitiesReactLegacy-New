import { debounce } from "lodash";
import { useRef } from "react";
import { usePageInput } from "../utils/context";

const Input = () => {
  const { PageInput, setPageInput } = usePageInput();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleInputChange = debounce(() => {
    setPageInput((prev) => {
      return {
        ...prev,
        valueInput: inputRef.current
          ? inputRef.current.value
          : PageInput.valueInput,
      };
    });
  }, 1000);
  return (
    <input
      ref={inputRef}
      defaultValue={PageInput.valueInput}
      onChange={handleInputChange}
      placeholder="Enter country..."
    />
  );
};

export default Input;
