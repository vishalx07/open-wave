import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Input, InputProps } from "@jamsr-ui/react";

const formatWithCommas = (value: string): string => {
  if (!value) return "";
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const NumberInput = ({
  value,
  onValueChange,
  defaultValue,
  ...props
}: Partial<InputProps>) => {
  const isControlled = value !== undefined && onValueChange !== undefined;
  const inputRef = useRef<HTMLInputElement>(null);
  const [internalValue, setInternalValue] = useState<string>(
    defaultValue ?? "",
  );

  useEffect(() => {
    if (isControlled) {
      setInternalValue(value ?? "");
    }
  }, [value]);

  const getRawValue = (val: string) => val.replace(/,/g, "");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const raw = getRawValue(input.value);

    if (!/^\d*\.?\d*$/.test(raw)) return;

    const prevCursor = input.selectionStart ?? 0;
    const prevLength = input.value.length;

    if (isControlled && onValueChange) {
      onValueChange(raw);
    } else {
      setInternalValue(raw);
    }

    requestAnimationFrame(() => {
      const formatted = formatWithCommas(raw);
      const newLength = formatted.length;
      const cursorOffset = newLength - prevLength;
      const newCursor = prevCursor + cursorOffset;

      if (inputRef.current) {
        inputRef.current.setSelectionRange(newCursor, newCursor);
      }
    });
  };

  const raw = isControlled ? (value ?? "") : internalValue;
  const formatted = formatWithCommas(raw);

  return (
    <Input
      type="text"
      ref={inputRef}
      value={formatted}
      onChange={handleChange}
      isNumberInput
      {...props}
    />
  );
};
