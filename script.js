document.addEventListener("DOMContentLoaded", (event) => {
    const part1Input = document.getElementById("part1");
    const part2Input = document.getElementById("part2");
    const totalInput = document.getElementById("total");
  
    function updateTotal() {
      const part1Value = parseFloat(part1Input.value) || 0;
      const part2Value = parseFloat(part2Input.value) || 0;
      const totalValue = part1Value + part2Value;
      totalInput.value = totalValue.toFixed(2);
    }
  
    part1Input.addEventListener("input", updateTotal);
    part2Input.addEventListener("input", updateTotal);
  
    const saveButton = document.getElementById("save-button");
    saveButton.addEventListener("click", () => {
      const formData = {
        customerName: document.getElementById("customer-name").value,
        address: document.getElementById("address").value,
        address2: document.getElementById("address2").value,
        mobile: document.getElementById("mobile").value,
        birthDate: document.getElementById("birth_date").value,
        email: document.getElementById("email").value,
        website: document.getElementById("website").value,
        returningCustomer: document.getElementById("yes").checked ? "Yes" : "No",
        enquiryFor: document.getElementById("enquiry-for").value,
        part1: parseFloat(part1Input.value) || 0,
        part2: parseFloat(part2Input.value) || 0,
        total: parseFloat(totalInput.value) || 0,
        bankName: document.getElementById("bankName").value,
        branch: document.getElementById("branch").value,
        accType: document.getElementById("Acc_type").value,
        accNum: document.getElementById("Acc_num").value,
        signature: document.getElementById("signature").value,
        signatureDate: document.getElementById("signatureDate").value,
      };
  
      $.ajax({
        type: "POST",
        url: "/save-data", // Promijenite URL na vašu backend rutu
        data: JSON.stringify(formData),
        contentType: "application/json",
        success: function(response) {
          console.log("Saved Data:", response);
          alert("Data saved successfully!");
        },
        error: function(error) {
          console.error("Error saving data:", error);
          alert("Failed to save data.");
        }
      });
    });
  });
  