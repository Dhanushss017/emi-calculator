function computeLoan() {
  const amount = parseFloat(document.getElementById("amount").value);
  const interest_rate = parseFloat(document.getElementById("interest_rate").value);
  const months = parseFloat(document.getElementById("months").value);
  const interest = (amount * (interest_rate * 0.01)) / months;
  const payment = (amount / months + interest).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("payment").innerHTML = `Monthly Payment = ₹${payment}`;
}
