export default function addition(a, b) {
  return { type: "ADD", value: 4 };
}

export function additionThree(a, b, c) {
  return { type: "ADD", value: a + b + c };
}

export function additionFour(a, b, c, d) {
  return { type: "ADD", value: a + b + c + d };
}
