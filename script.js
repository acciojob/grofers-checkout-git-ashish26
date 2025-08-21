const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
   const priceElements = document.querySelectorAll(".prices");
  let total = 0;
	  priceElements.forEach(priceEl => {
    const value = parseFloat(priceEl.textContent);
    if (!isNaN(value)) {
      total += value;
    }
  });
	  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

	totalCell.colSpan = "2";
  totalCell.textContent = `Total Price: ₹${total.toFixed(2)}`;
  totalCell.style.fontWeight = "bold";

  totalRow.appendChild(totalCell);
	 const table = document.querySelector("table");
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

