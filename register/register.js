let participantCount = 2; // Starts at 2 because the HTML already has Participant 1 and Participant 2

function participantTemplate(count) {
  return `
    <section class="participant${count}">
      <p>Participant ${count}</p>
      <div class="item">
        <label for="fname${count}"> First Name<span>*</span></label>
        <input id="fname${count}" type="text" name="fname${count}" value="" required />
      </div>
      <div class="item activities">
        <label for="activity${count}">Activity #<span>*</span></label>
        <input id="activity${count}" type="text" name="activity${count}" />
      </div>
      <div class="item">
        <label for="fee${count}">Fee ($)<span>*</span></label>
        <input id="fee${count}" type="number" name="fee" />
      </div>
      <div class="item">
        <label for="date${count}">Desired Date <span>*</span></label>
        <input id="date${count}" type="date" name="date${count}" />
      </div>
      <div class="item">
        <p>Grade</p>
        <select>
          <option selected value="" disabled selected></option>
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="5">5th</option>
          <option value="6">6th</option>
          <option value="7">7th</option>
          <option value="8">8th</option>
          <option value="9">9th</option>
          <option value="10">10th</option>
          <option value="11">11th</option>
          <option value="12">12th</option>
        </select>
      </div>
    </section>
  `;
}

function successTemplate(info) {
  return `
    <h2>Registration Complete!</h2>
    <p>Thank you, **${info.adultName}**, for registering.</p>
    <p>You have successfully registered **${info.participantCount}** participants and owe **$${info.feeTotal.toFixed(2)}** in Fees.</p>
  `;
}

function totalFees() {
  // Use the attribute selector to grab any element that has a name attribute equal to "fee"
  // This is more specific and reliable than using [id^=fee] since we fixed the name attribute in the HTML.
  let feeElements = document.querySelectorAll('input[name="fee"]');

  // sum up all of the fees using Array.reduce()
  // 1. feeElements is a NodeList, so we spread it into an Array: [...feeElements]
  // 2. We use reduce to accumulate the total.
  const total = [...feeElements].reduce((accumulator, input) => {
    // The input's value must be parsed as a float. If it's empty, use 0.
    const fee = parseFloat(input.value) || 0;
    return accumulator + fee;
  }, 0); // Start the accumulator at 0

  return total;
}

function addParticipant() {
  participantCount++;
  const addButton = document.getElementById('add');
  const template = participantTemplate(participantCount);
  
  // Insert the new participant HTML before the 'Add Participant' button
  addButton.insertAdjacentHTML('beforebegin', template);
}

function submitForm(event) {
  // 1. Keep the form from doing what it normally would (reloading the page)
  event.preventDefault(); 

  // 2. Calculate the fee total
  const feeTotal = totalFees();
  
  // 3. Get the adult name from the form (ID: adult_name)
  const adultNameInput = document.getElementById('adult_name');
  const adultName = adultNameInput ? adultNameInput.value : 'Guest'; 

  // Create the info object for the template
  const info = {
      adultName: adultName,
      participantCount: participantCount,
      feeTotal: feeTotal
  };

  // 4. Generate the summary message
  const summaryMessage = successTemplate(info);

  // 5. Hide the Form, and show the summary element.
  const formElement = document.querySelector('form');
  const summaryElement = document.getElementById('summary');

  formElement.style.display = 'none'; // Hide the form using JavaScript style
  
  summaryElement.innerHTML = summaryMessage; // Insert the message
  summaryElement.style.display = 'block'; // Ensure the summary is visible
}

// Add event listener to the "Add Participant" button
document.getElementById('add').addEventListener('click', addParticipant);

// Add event listener to the form for the 'submit' event
document.querySelector('form').addEventListener('submit', submitForm);