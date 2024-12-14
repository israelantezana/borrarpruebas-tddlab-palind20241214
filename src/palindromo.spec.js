import sumar from "./sumador.js";

describe("Palindromo", () => {
  it("cadena vacia no es palindromo", () => {
    expect(palindromo("")).toEqual(false);
  });
});

function palindromo(palabra) {
  return false;
}
