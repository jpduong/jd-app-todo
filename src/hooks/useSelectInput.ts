import { useState } from "react";

export const useSelectInput = <T>(initialValue: T) => {
  const [value, setValue] = useState(initialValue);

  const reset = () => setValue(initialValue);

  const bind = {
    value,
    onChange: (
      e: React.ChangeEvent<{
        name?: string | undefined;
        value: unknown;
      }>
    ) => {
      setValue(e.target.value as T); // to fix
    },
  };

  return [value, bind, reset] as const;
};
