export default function returnHowManyArguments(...strings) {
  let count = 0;

  strings.forEach(() => {
    count += 1;
  });
  return count;
}
