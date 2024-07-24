export default function returnHowManyArguments(...strings) {
  let count =  0;
  for (const string of strings) {
    count += 1;
  }
  return count;
}
