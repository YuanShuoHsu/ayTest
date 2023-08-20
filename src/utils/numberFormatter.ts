const thousandSeparator = (number: string): string => {
  const parts = number.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

const cleanInputValue = (inputValue: string): string => {
  inputValue = inputValue.replace(/[^\d.-]/g, "");

  inputValue = inputValue.replace(/^\./g, "");
  inputValue = inputValue.replace(/\.{2,}/g, ".");
  inputValue = inputValue
    .replace(".", "$#$")
    .replace(/\./g, "")
    .replace("$#$", ".");

  if (inputValue.startsWith("-")) {
    inputValue = "-" + inputValue.slice(1).replace(/-/g, "");
  }

  if (inputValue.startsWith("-") && inputValue.charAt(1) === ".") {
    inputValue = "-" + inputValue.slice(1).replace(/./g, "");
  }

  if (inputValue.startsWith("0") && !inputValue.startsWith("0.")) {
    if (inputValue.length > 1) {
      inputValue = "0." + inputValue.slice(1);
    } else {
      inputValue = "0";
    }
  }

  if (inputValue.startsWith("-0") && !inputValue.startsWith("-0.")) {
    if (inputValue.length > 2) {
      inputValue = "-0." + inputValue.slice(2);
    } else if (inputValue.length > 1) {
      inputValue = "-0";
    } else {
      inputValue = "-";
    }
  }

  return inputValue;
};

export { thousandSeparator, cleanInputValue };
