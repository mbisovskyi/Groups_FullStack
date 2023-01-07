const thisSymbols =
  "`~@#$%^&*()-_=+|]}[{\\'\";:?/>.<,abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";

/**
 * Function removes symbols and letters out of string and leaves just digits.
 * @NOTE If symbols value is not provided - function will remove all possible symbols and letters!
 * @param {string} string - Value to be formatted
 * @param {string} symbols - String of removal values
 * @returns Formatted string

 */
function digitsOnlyString(string, symbols = null) {
  let removingValues;

  //If "symbols" string is not provided - function will use "thisSymbols" string for removal values.
  if (symbols && typeof symbols === "string") {
    removingValues = symbols.split("");
  } else {
    removingValues = thisSymbols.split("");
  }
  removingValues.forEach((symbol) => {
    if (string.includes(symbol)) {
      for (let i = 0; i < string.length; i++) {
        let index = string.indexOf(symbol);
        string = string.replace(string[index], "");
      }
    }
  });
  return string;
}

/**
 * Function formatting string to the cell phone number format (10 digits).
 * @requires string that contains 10 digits;
 * @param {string} string Value that needs to be formatted
 * @returns Formatted phone number
 */
function formatOfCellPhoneNumber(string) {
  let digitsString = digitsOnlyString(string);
  if (digitsString.length !== 10) {
    throw new Error("Value should contain 10 digits!");
  } else {
    let newNumber = "";
    for (let i = 0; i < 10; i++) {
      if (i === 0) {
        newNumber += "(";
        newNumber += digitsString[i];
      } else if (i === 2) {
        newNumber += digitsString[i];
        newNumber += ")-";
      } else if (i === 5) {
        newNumber += digitsString[i];
        newNumber += "-";
      } else {
        newNumber += digitsString[i];
      }
    }
    return newNumber;
  }
}

const FormattingPhoneNum = {
  digitsOnlyString,
  formatOfCellPhoneNumber,
};

export default FormattingPhoneNum;
