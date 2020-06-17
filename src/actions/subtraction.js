export default function subtraction(a, b) {
  return { type: "SUB", value: a - b };
}

export function subtractionThree(a, b, c) {
  return { type: "SUB", value: a - b - c };
}
