describe("Palindromo", () => {
  it("cadena vacia no es palindromo", () => {
    expect(palindromo("")).toEqual(false);
  });

  it("palabra de un caracter es palindromo", () => {
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
  });
});

function palindromo(palabra) {
  if (palabra === "") {
    return false;
  }

  if (palabra.lenght > 30) {
    return false;
  }

  let inversa = palabra.split("").reverse().join("");
  if (palabra === inversa) {
    return true;
  }
  return false;
}
