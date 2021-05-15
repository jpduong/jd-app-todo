import { useState } from "react";
import { SelectEvent } from "types";

export const useSelectInput = <T>(initialValue: T) => {
  const [value, setValue] = useState(initialValue);

  const reset = () => setValue(initialValue);

  const bind = {
    value,
    onChange: (e: SelectEvent) => {
      setValue(e.target.value as T);
    },
  };

  return [value, bind, reset] as const;
};
