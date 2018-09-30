export default (expenses) => {
  return expenses.map((e) => e.amount).reduce((prev, curr) => prev + curr, 0 );
};