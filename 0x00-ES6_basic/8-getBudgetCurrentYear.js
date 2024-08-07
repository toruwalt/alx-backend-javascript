function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  const newProperty1 = `income-${getCurrentYear()}`;
  const newProperty2 = `gdp-${getCurrentYear()}`;
  const newProperty3 = `capita-${getCurrentYear()}`;

  budget[newProperty1] = income;
  budget[newProperty2] = gdp;
  budget[newProperty3] = capita;

  return budget;
}
