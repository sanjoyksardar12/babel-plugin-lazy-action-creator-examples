export default function multiplication(a, b) {
  return {
    value: a *  b ,
    type: "MUL"
  };
}

export function multiplicationThree(a, b, c) {
  return { type: "MUL", value: a * b * c };
}
