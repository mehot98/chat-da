export default function makeNumberWithCommas(numberString: string) {
  const number = parseInt(numberString.replace(/[^0-9]/g, ""));
  return number.toLocaleString() + "원";
}
