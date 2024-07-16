document.addEventListener("DOMContentLoaded", function () {
    const quantities = document.querySelectorAll(".quantity");
    const subtotals = document.querySelectorAll(".subtotal");
    const removeLinks = document.querySelectorAll(".remove");
    const totalShipment = 50;
    const subtotalField = document.querySelector(".total-price .subtotal");
    const totalField = document.querySelector(".total-price .total");
  
    quantities.forEach((quantity, index) => {
      quantity.addEventListener("input", function () {
        updateSubtotal(index);
        updateTotal();
      });
    });
  
    removeLinks.forEach((removeLink, index) => {
      removeLink.addEventListener("click", function (event) {
        event.preventDefault();
        removeItem(index);
        updateTotal();
      });
    });
  
    function updateSubtotal(index) {
      const price = parseFloat(quantities[index].dataset.price);
      const quantity = parseInt(quantities[index].value);
      const subtotal = price * quantity;
      subtotals[index].textContent = `$${subtotal.toFixed(2)}`;
    }
  
    function updateTotal() {
      let subtotal = 0;
      quantities.forEach((quantity, index) => {
        const price = parseFloat(quantities[index].dataset.price);
        const qty = parseInt(quantities[index].value);
        subtotal += price * qty;
      });
      subtotalField.textContent = `$${subtotal.toFixed(2)}`;
      const total = subtotal + totalShipment;
      totalField.textContent = `$${total.toFixed(2)}`;
    }
  
    function removeItem(index) {
      quantities[index].value = 0;
      updateSubtotal(index);
    }
  
    updateTotal();
  });
  