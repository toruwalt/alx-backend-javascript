export default function returnHowManyArguments(...strings) {
  let count = 0;

  strings.forEach(() => {
    count += 1;
  })
  return count;
}

/*
  for (let string of strings) {
    count += 1;
  }
  return count;
}
*/