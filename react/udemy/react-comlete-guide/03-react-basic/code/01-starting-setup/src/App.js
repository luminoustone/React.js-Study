import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((item) => (
        <ExpenseItem {...item} />
      ))}
    </div>
  );
}

export default App;
