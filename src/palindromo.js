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

export default palindromo;
