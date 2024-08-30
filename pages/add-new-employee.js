// BEGIN - Update Step Counter
let globalCurrentStep = 0;
// Function to update the current step
function updateCurrentStep() {
  // Select all progress indicators
  const progressIndicators = document.querySelectorAll('.f-progress-wrapper .f-progress-indicator-default');

  // Initialize a variable to store the current step
  let currentStep = -1;

  // Initialize a variable to track visible indicators
  let visibleCount = 0;

  // Loop through the progress indicators to find the one with the 'current' class
  progressIndicators.forEach((indicator) => {
    // Check if the indicator is visible
    if (indicator.style.display !== 'none') {
      visibleCount++;
      if (indicator.classList.contains('current')) {
        currentStep = visibleCount;
      }
    }
  });

  globalCurrentStep = currentStep;

  // Update the text content of the toast label
  const toastLabelText = document.getElementById('toast-label-text');
  if (toastLabelText) {
    toastLabelText.textContent = currentStep !== -1 ? currentStep.toString() : '0';
  }
}

function updateButtonVisibility() {
  const nextBtn = document.getElementById('add-employee-nav-next-btn');
  const startBtn = document.getElementById('add-employee-nav-start-btn');

  if (globalCurrentStep === -1 || globalCurrentStep === 0) {
      nextBtn.style.display = 'none';
      startBtn.style.display = 'flex';
  } else {
      nextBtn.style.display = 'flex';
      startBtn.style.display = 'none';
  }
}

// Function to handle clicks on progress indicators and buttons
function handleClick(event) {
  // Check if the clicked element is a progress indicator or one of the buttons
  if (
    event.target.closest('.f-progress-wrapper .f-progress-indicator-default') ||
    event.target.closest('[data-form="next-btn"]') ||
    event.target.closest('[data-form="back-btn"]') ||
    event.target.closest('#Signup-Submit-Button')
  ) {
    updateCurrentStep();
    updateButtonVisibility();
  }
}

// Add event listener to the document for delegation
document.addEventListener('click', handleClick);

// Initial update on page load
setTimeout(() => {
  updateCurrentStep();
  updateButtonVisibility();
}, 100);

// END - Update Step Counter


// BEGIN - Add Employee Image
	const addEmployeeImageInput = document.createElement('input');
  addEmployeeImageInput.type = 'file';
  addEmployeeImageInput.accept = '.jpg, .jpeg, .png';
  addEmployeeImageInput.id = 'addEmployeeImageFile';
  addEmployeeImageInput.style.display = 'none';
  document.body.appendChild(addEmployeeImageInput);
// END - Add Employee Image


// BEGIN - Update custom projgress indicator
function updateCustomProgressIndicator(){
  $('[data-form="custom-progress-indicator"]').each(function(idc){
    if(x >= idc){
        $(this).addClass('visited')
    }
  })
}
$('[data-form="next-btn"]').on('click', updateCustomProgressIndicator)
$('[data-form="back-btn"]').on('click', updateCustomProgressIndicator)
// END - Update custom projgress indicator

// BEGIN - Validation for last 4 ssn
const inputField = document.getElementById('last-4-of-ssn');

inputField.addEventListener('input', function (event) {
    // Remove any non-numeric characters
    inputField.value = inputField.value.replace(/\D/g, '');

    // Limit the input to 4 characters
    if (inputField.value.length > 4) {
        inputField.value = inputField.value.slice(0, 4);
    }
});
// END - Validation for last 4 ssn

{/* <script>
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.work-link-block-wrapper');
  let selectedCard = null;

  function selectCard(card) {
    if (selectedCard) {
      selectedCard.classList.remove('card-selected');
    }
    card.classList.add('card-selected');
    selectedCard = card;
  }

  cards.forEach(card => {
    card.addEventListener('click', function() {
      selectCard(card);
    });
    card.addEventListener('mouseover', function() {
      card.classList.add('hover');
    });
    card.addEventListener('mouseout', function() {
      card.classList.remove('hover');
    });
  });

  document.addEventListener('click', function(event) {
    const isClickInsideCard = Array.from(cards).some(card => card.contains(event.target));
    if (!isClickInsideCard && selectedCard) {
      // Prevents deselection if clicking outside of any card
      event.stopPropagation();
    }
  });
});
</script> */}

// BEGIN - Script to get employe work location and enable next button
// Get references to the text field and the cards
const hiddenWorkLocationInput = document.getElementById('hidden-employee-work-location-input');
const remoteCard = document.getElementById('remote-location-card');
const hybridCard = document.getElementById('hybrid-location-card');
const inOfficeCard = document.getElementById('in-office-card');
const otherCard = document.getElementById('other-card');

// Function to update the text field
function updateWorkLocationInput(value) {
  hiddenWorkLocationInput.value = value;
  enableBtn();
}

// Add click event listeners to each card
remoteCard.addEventListener('click', () => updateWorkLocationInput('Remote'));
hybridCard.addEventListener('click', () => updateWorkLocationInput('Hybrid'));
inOfficeCard.addEventListener('click', () => updateWorkLocationInput('In Office'));
otherCard.addEventListener('click', () => updateWorkLocationInput('Other'));
// END - Script to get employe work location and enable next button

// BEGIN - Script to get employe type and enable next button
// Get references to the text field and the cards
const hiddenInput = document.getElementById('hidden-employee-type-input');
const card1 = document.getElementById('w2-employee-type-card');
const card2 = document.getElementById('1099-contractor-employee-type-card');
const card3 = document.getElementById('intern-employee-type-card');
const card4 = document.getElementById('freelancer-agency-employee-type-card');

// Function to update the text field
function updateEmployeeTypeInput(value) {
  hiddenInput.value = value;
  enableBtn();
}

// Add click event listeners to each card
card1.addEventListener('click', () => updateEmployeeTypeInput('W-2 Employee'));
card2.addEventListener('click', () => updateEmployeeTypeInput('1099 Contractor'));
card3.addEventListener('click', () => updateEmployeeTypeInput('Intern'));
card4.addEventListener('click', () => updateEmployeeTypeInput('Freelancer/Agency'));
// END - Script to get employe type and enable next button

// BEGIN - Script to get employee work schedule and enable next button
// Get references to the text field and the cards
const hiddenEmployeeWorkScheduleInput = document.getElementById('hidden-employee-work-schedule-input');
const fullTimeCard = document.getElementById('employee-full-time-card');
const partTimeCard = document.getElementById('employee-part-time-card');

// Function to update the text field
function updateEmployeeWorkScheduleInput(value) {
  hiddenEmployeeWorkScheduleInput.value = value;
  enableBtn();
}

// Add click event listeners to each card
fullTimeCard.addEventListener('click', () => updateEmployeeWorkScheduleInput('Full-Time'));
partTimeCard.addEventListener('click', () => updateEmployeeWorkScheduleInput('Part-Time'));
// END - Script to get employee work schedule and enable next button

// BEGIN - Script to get employee pay structure and enable next button
// Get references to the text field and the cards
const hiddenEmployeePayStructureInput = document.getElementById('hidden-employee-pay-structure-input');
const salaryPayCard = document.getElementById('salary-pay-card');
const hourlyPayCard = document.getElementById('hourly-pay-card');
const projectBasedPayCard = document.getElementById('project-based-pay-card');
const commissionPayCard = document.getElementById('commission-pay-card');

// Function to update the text field
function updateEmployeePayStructureInput(value) {
  hiddenEmployeePayStructureInput.value = value;
  enableBtn();
}

// Add click event listeners to each card
salaryPayCard.addEventListener('click', () => updateEmployeePayStructureInput('Salary'));
hourlyPayCard.addEventListener('click', () => updateEmployeePayStructureInput('Hourly'));
projectBasedPayCard.addEventListener('click', () => updateEmployeePayStructureInput('Project-Based'));
commissionPayCard.addEventListener('click', () => updateEmployeePayStructureInput('Commission'));
// END - Script to get employee pay structure and enable next button

// BEGIN - Script to get employee pay frequency and enable next button
// Get references to the text field and the cards
const hiddenEmployeePayFrequencyInput = document.getElementById('hidden-employee-pay-frequency-input');
const weeklyPayCard = document.getElementById('weekly-pay-card');
const biWeeklyPayCard = document.getElementById('bi-weekly-pay-card');
const monthlyPayCard = document.getElementById('monthly-pay-card');
const projectBasedFrequencyPayCard = document.getElementById('project-based-frequency-pay-card');

// Function to update the text field
function updateEmployeePayFrequencyInput(value) {
  hiddenEmployeePayFrequencyInput.value = value;
  enableBtn();
}

// Add click event listeners to each card
weeklyPayCard.addEventListener('click', () => updateEmployeePayFrequencyInput('Weekly'));
biWeeklyPayCard.addEventListener('click', () => updateEmployeePayFrequencyInput('Bi-Weekly'));
monthlyPayCard.addEventListener('click', () => updateEmployeePayFrequencyInput('Monthly'));
projectBasedFrequencyPayCard.addEventListener('click', () => updateEmployeePayFrequencyInput('Project-Based'));
// END - Script to get employee pay frequency and enable next button


{/* <script>
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.single-multi-select-card');
  let selectedCard = null;

  function selectCard(card) {
    if (selectedCard) {
      selectedCard.classList.remove('card-selected');
    }
    card.classList.add('card-selected');
    selectedCard = card;
  }

  cards.forEach(card => {
    card.addEventListener('click', function() {
      selectCard(card);
    });
    card.addEventListener('mouseover', function() {
      card.classList.add('hover');
    });
    card.addEventListener('mouseout', function() {
      card.classList.remove('hover');
    });
  });

  document.addEventListener('click', function(event) {
    const isClickInsideCard = Array.from(cards).some(card => card.contains(event.target));
    if (!isClickInsideCard && selectedCard) {
      // Prevents deselection if clicking outside of any card
      event.stopPropagation();
    }
  });
});
</script> */}
