// Confirmation Function
function confirmSubmission() {
  // Get the values from the form
  const email = document.querySelector('input[name="email1"]').value;
  const name = document.querySelector('input[name="fname"]').value;
  const message = document.querySelector('textarea[name="message"]').value;
  const phone = document.querySelector('input[name="phnumber"]').value;


  const confirmationText = `
    Please review your details before submiting:
    - Name: ${name}
    - Email: ${email}
    - Message: ${message}
    - Phone: ${phone || "(Not provided)"}
    
    Click OK to submit or Cancel to return.
  `;   // Create a summary of all inputs

  // Show confirmation box
  return confirm(confirmationText); // If OK is clicked, form submits. If Cancel, submission is stopped.

}
// ENd of confirmation Function










// Function to display a modal for rating
function rateExperience() {
 
  const modal = document.createElement("div"); // Create the modal container
  modal.style.position = "fixed";
  modal.style.top = "50%";
  modal.style.left = "50%";
  modal.style.transform = "translate(-50%, -50%)";
  modal.style.padding = "20px";
  modal.style.backgroundColor = "white";
  modal.style.border = "1px solid #ccc";
  modal.style.borderRadius = "8px";
  modal.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 1.2)";
  modal.style.zIndex = "1000";
  modal.style.textAlign = "center";


  const title = document.createElement("h3");  // Create the modal title
  title.textContent = "Rate Your Experience";
  modal.appendChild(title);


  for (let i = 1; i <= 5; i++) {  // Create buttons for ratings 1 to 5
    const button = document.createElement("button");
    button.textContent = i;
    button.style.margin = "5px";
    button.style.padding = "10px 15px";
    button.style.fontSize = "16px";
    button.style.border = "1px solid #007BFF";
    button.style.borderRadius = "5px";
    button.style.backgroundColor = "#007BFF";
    button.style.color = "white";
    button.style.cursor = "pointer";

    button.addEventListener("click", () => {// Add click event for each button
      alert(`Thank you for rating my website ${i}/5!`);
      document.body.removeChild(modal); // Remove modal after selecting rating
    });

    modal.appendChild(button);
  }


  const closeButton = document.createElement("button");   // Add a "Close" button
  closeButton.textContent = "Close";
  closeButton.style.marginTop = "15px";
  closeButton.style.padding = "10px 15px";
  closeButton.style.fontSize = "16px";
  closeButton.style.border = "1px solid #ccc";
  closeButton.style.borderRadius = "5px";
  closeButton.style.backgroundColor = "#f8f9fa";
  closeButton.style.color = "#333";
  closeButton.style.cursor = "pointer";


  closeButton.addEventListener("click", () => {   // Add click event for the Close button
    document.body.removeChild(modal); // Remove modal when close is clicked
  });

  modal.appendChild(document.createElement("br")); // Add a line break before the Close button
  modal.appendChild(closeButton);


  document.body.appendChild(modal);   // Append the modal to the document body
}

const messageTextarea = document.getElementById("pics");// Select the message textarea


messageTextarea.addEventListener("click",rateExperience); // Add a click event listener to the textarea


// End of function to display a modal for rating
