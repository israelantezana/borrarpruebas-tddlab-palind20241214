import palindromo from "./palindromo.js";

describe("Palindromo", () => {
  it("cadena vacia no es palindromo", () => {
    expect(palindromo("")).toEqual(false);
  });

  /*it("palabra de un caracter es palindromo", () => {
    expect(palindromo("a")).toEqual(true);
  });

  it("palabra de un dos letras iguale es palindromo", () => {
    expect(palindromo("aa")).toEqual(true);
  });

  it("palabra de un dos letras diferentes no es palindromo", () => {
    expect(palindromo("rn")).toEqual(false);
  });

  it("palabra de un dos letras diferentes no es palindromo", () => {
    expect(palindromo("ala")).toEqual(true);
  });*/
});
