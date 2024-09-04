// BEGIN - Update Step Counter
let globalCurrentStep = 0;
let globalTotalSteps = 16;
// Function to update the current step
function updateCurrentStep() {
  // Select all progress indicators
  const progressIndicators = document.querySelectorAll(
    ".f-progress-wrapper .f-progress-indicator-default"
  );

  if (progressIndicators) {
    globalTotalSteps = progressIndicators.length;
  }

  // Initialize a variable to store the current step
  let currentStep = -1;

  // Initialize a variable to track visible indicators
  let visibleCount = 0;

  // Loop through the progress indicators to find the one with the 'current' class
  progressIndicators.forEach((indicator) => {
    // Check if the indicator is visible
    if (indicator.style.display !== "none") {
      visibleCount++;
      if (indicator.classList.contains("current")) {
        currentStep = visibleCount;
      }
    }
  });

  globalCurrentStep = currentStep;

  // Update the text content of the toast label
  const toastLabelText = document.getElementById("toast-label-text");
  if (toastLabelText) {
    toastLabelText.textContent =
      currentStep !== -1 ? currentStep.toString() : "0";
  }
}

function updateStartAndNextButtonVisibility() {
  const nextBtn = document.getElementById("add-employee-nav-next-btn");
  const startBtn = document.getElementById("add-employee-nav-start-btn");

  if (globalCurrentStep === -1 || globalCurrentStep === 0) {
    nextBtn.style.display = "none";
    startBtn.style.display = "flex";
  } else {
    nextBtn.style.display = "flex";
    startBtn.style.display = "none";
  }
}

function updateToastTextVisibility() {
  const toastBackArrow = document.getElementById(
    "add-new-employee-toast-back-arrow"
  );
  const toastDot = document.getElementById("add-new-employee-toast-dot");
  const toastReturnToLocationText = document.getElementById(
    "add-new-employee-toast-return-text"
  );
  const toastEmployeeCreatedText = document.getElementById(
    "add-new-employee-toast-created-text"
  );
  const toastStepText = document.getElementById(
    "add-new-employee-toast-step-text"
  );
  const toastStepNumber = document.getElementById("toast-label-text");
  const bottomNavMenuButtonsWrapper = document.getElementById("bottom-nav-menu-buttons-wrapper");
  const bottomNavReturnToDashboard = document.getElementById('bottom-nav-return-to-dashboard');
  const bottomNavMenu = document.getElementById('bottom-nav-menu');

  if (globalCurrentStep === -1 || globalCurrentStep === 0) {
    toastBackArrow.style.display = "flex";
    toastDot.style.display = "none";
    toastReturnToLocationText.innerText = "Return to Dashboard";
    toastReturnToLocationText.style.display = "flex";
    toastEmployeeCreatedText.style.display = "none";
    toastStepText.style.display = "none";
    toastStepNumber.style.display = "none";
    bottomNavMenuButtonsWrapper.style.display = "flex";
    bottomNavReturnToDashboard.style.display = "none";
    bottomNavMenu.style.display = "flex";
  } else if (globalCurrentStep === globalTotalSteps - 1) {
    toastBackArrow.style.display = "none";
    toastDot.style.display = "flex";
    toastReturnToLocationText.style.display = "none";
    toastEmployeeCreatedText.style.display = "flex";
    toastStepText.style.display = "none";
    toastStepNumber.style.display = "none";
    bottomNavMenuButtonsWrapper.style.display = "none";
    bottomNavReturnToDashboard.style.display = "flex";
    bottomNavMenu.style.display = "block";
  } else {
    toastBackArrow.style.display = "none";
    toastDot.style.display = "flex";
    toastReturnToLocationText.style.display = "none";
    toastEmployeeCreatedText.style.display = "none";
    toastStepText.style.display = "flex";
    toastStepNumber.style.display = "flex";
    bottomNavMenuButtonsWrapper.style.display = "flex";
    bottomNavReturnToDashboard.style.display = "none";
    bottomNavMenu.style.display = "flex";
  }
}

// Function to handle clicks on progress indicators and buttons
function handleClick(event) {
  // Check if the clicked element is a progress indicator or one of the buttons
  if (
    event.target.closest(".f-progress-wrapper .f-progress-indicator-default") ||
    event.target.closest('[data-form="next-btn"]') ||
    event.target.closest('[data-form="back-btn"]') ||
    event.target.closest("#Signup-Submit-Button")
  ) {
    updateCurrentStep();
    updateStartAndNextButtonVisibility();
    updateToastTextVisibility();
  }
}

// Add event listener to the document for delegation
document.addEventListener("click", handleClick);

// Navigate to dashboard on click if flow is on step 0
const toastWrapper = document.getElementById("toast-wrapper");
toastWrapper.addEventListener("click", function () {
  if (globalCurrentStep === -1 || globalCurrentStep === 0) {
    window.location.href = "/company/primary";
  }
});

// Initial update on page load
setTimeout(() => {
  updateCurrentStep();
  updateStartAndNextButtonVisibility();
  updateToastTextVisibility();
}, 100);

// END - Update Step Counter

// BEGIN - Add Employee Image
const addEmployeeImageInput = document.createElement("input");
addEmployeeImageInput.type = "file";
addEmployeeImageInput.accept = ".jpg, .jpeg, .png";
addEmployeeImageInput.id = "addEmployeeImageFile";
addEmployeeImageInput.style.display = "none";
document.body.appendChild(addEmployeeImageInput);
// END - Add Employee Image

// BEGIN - Update custom projgress indicator
function updateCustomProgressIndicator() {
  $('[data-form="custom-progress-indicator"]').each(function (idc) {
    if (x >= idc) {
      $(this).addClass("visited");
    }
  });
}
$('[data-form="next-btn"]').on("click", updateCustomProgressIndicator);
$('[data-form="back-btn"]').on("click", updateCustomProgressIndicator);
// END - Update custom projgress indicator

// BEGIN - Validation for last 4 ssn
const inputField = document.getElementById("last-4-of-ssn");

inputField.addEventListener("input", function (event) {
  // Remove any non-numeric characters
  inputField.value = inputField.value.replace(/\D/g, "");

  // Limit the input to 4 characters
  if (inputField.value.length > 4) {
    inputField.value = inputField.value.slice(0, 4);
  }
});
// END - Validation for last 4 ssn

{
  /* <script>
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
</script> */
}

// BEGIN - Script to get employe work location and enable next button
// Get references to the text field and the cards
const hiddenWorkLocationInput = document.getElementById(
  "hidden-employee-work-location-input"
);
const remoteCard = document.getElementById("remote-location-card");
const hybridCard = document.getElementById("hybrid-location-card");
const inOfficeCard = document.getElementById("in-office-card");
const otherCard = document.getElementById("other-card");
const workLocationCards = [remoteCard, hybridCard, inOfficeCard, otherCard];

let selectedWorkLocationCard = null;

function selectWorkLocationCard(card) {
  if (selectedWorkLocationCard) {
    selectedWorkLocationCard.classList.remove('card-selected');
  }
  selectedWorkLocationCard.classList.add('card-selected');
  selectedWorkLocationCard = card;
}

workLocationCards.forEach(card => {
  card.addEventListener('click', function () {
    selectWorkLocationCard(card);
  });
  card.addEventListener('mouseover', function () {
    card.classList.add('hover');
  });
  card.addEventListener('mouseout', function () {
    card.classList.remove('hover');
  });
});

document.addEventListener('click', function (event) {
  const isClickInsideWorkLocationCard = Array.from(workLocationCards).some(card => card.contains(event.target));
  if (!isClickInsideWorkLocationCard && selectedWorkLocationCard) {
    // Prevents deselection if clicking outside of any card
    event.stopPropagation();
  }
});

// Function to update the text field
function updateWorkLocationInput(value) {
  hiddenWorkLocationInput.value = value;
  enableBtn();
}

// Add click event listeners to each card
remoteCard.addEventListener("click", () => updateWorkLocationInput("Remote"));
hybridCard.addEventListener("click", () => updateWorkLocationInput("Hybrid"));
inOfficeCard.addEventListener("click", () =>
  updateWorkLocationInput("In Office")
);
otherCard.addEventListener("click", () => updateWorkLocationInput("Other"));
// END - Script to get employe work location and enable next button

// BEGIN - Script to get employe type and enable next button
// Get references to the text field and the cards
const hiddenInput = document.getElementById("hidden-employee-type-input");
const card1 = document.getElementById("w2-employee-type-card");
const card2 = document.getElementById("1099-contractor-employee-type-card");
const card3 = document.getElementById("intern-employee-type-card");
const card4 = document.getElementById("freelancer-agency-employee-type-card");
const employeeTypeCards = [card1, card2, card3, card4];

let selectedEmployeeTypeCard = null;

function selectEmployeeTypeCard(card) {
  if (selectedEmployeeTypeCard) {
    selectedEmployeeTypeCard.classList.remove('card-selected');
  }
  selectedEmployeeTypeCard.classList.add('card-selected');
  selectedEmployeeTypeCard = card;
}

employeeTypeCards.forEach(card => {
  card.addEventListener('click', function () {
    selectEmployeeTypeCard(card);
  });
  card.addEventListener('mouseover', function () {
    card.classList.add('hover');
  });
  card.addEventListener('mouseout', function () {
    card.classList.remove('hover');
  });
});

document.addEventListener('click', function (event) {
  const isClickInsideEmployeeTypeCard = Array.from(employeeTypeCards).some(card => card.contains(event.target));
  if (!isClickInsideEmployeeTypeCard && selectedEmployeeTypeCard) {
    // Prevents deselection if clicking outside of any card
    event.stopPropagation();
  }
});

// Function to update the text field
function updateEmployeeTypeInput(value) {
  hiddenInput.value = value;
  enableBtn();
}

// Add click event listeners to each card
card1.addEventListener("click", () => updateEmployeeTypeInput("W-2 Employee"));
card2.addEventListener("click", () =>
  updateEmployeeTypeInput("1099 Contractor")
);
card3.addEventListener("click", () => updateEmployeeTypeInput("Intern"));
card4.addEventListener("click", () =>
  updateEmployeeTypeInput("Freelancer/Agency")
);
// END - Script to get employe type and enable next button

// BEGIN - Script to get employee work schedule and enable next button
// Get references to the text field and the cards
const hiddenEmployeeWorkScheduleInput = document.getElementById(
  "hidden-employee-work-schedule-input"
);
const fullTimeCard = document.getElementById("employee-full-time-card");
const partTimeCard = document.getElementById("employee-part-time-card");
const workScheduleCards = [fullTimeCard, partTimeCard];

let selectedWorkScheduleCard = null;

function selectWorkScheduleCard(card) {
  if (selectedWorkScheduleCard) {
    selectedWorkScheduleCard.classList.remove('card-selected');
  }
  selectedWorkScheduleCard.classList.add('card-selected');
  selectedWorkScheduleCard = card;
}

workScheduleCards.forEach(card => {
  card.addEventListener('click', function () {
    selectWorkLocationCard(card);
  });
  card.addEventListener('mouseover', function () {
    card.classList.add('hover');
  });
  card.addEventListener('mouseout', function () {
    card.classList.remove('hover');
  });
});

document.addEventListener('click', function (event) {
  const isClickInsideWorkScheduleCard = Array.from(workScheduleCards).some(card => card.contains(event.target));
  if (!isClickInsideWorkScheduleCard && selectedWorkScheduleCard) {
    // Prevents deselection if clicking outside of any card
    event.stopPropagation();
  }
});

// Function to update the text field
function updateEmployeeWorkScheduleInput(value) {
  hiddenEmployeeWorkScheduleInput.value = value;
  enableBtn();
}

// Add click event listeners to each card
fullTimeCard.addEventListener("click", () =>
  updateEmployeeWorkScheduleInput("Full-Time")
);
partTimeCard.addEventListener("click", () =>
  updateEmployeeWorkScheduleInput("Part-Time")
);
// END - Script to get employee work schedule and enable next button

// BEGIN - Script to get employee pay structure and enable next button
// Get references to the text field and the cards
const hiddenEmployeePayStructureInput = document.getElementById(
  "hidden-employee-pay-structure-input"
);
const salaryPayCard = document.getElementById("salary-pay-card");
const hourlyPayCard = document.getElementById("hourly-pay-card");
const projectBasedPayCard = document.getElementById("project-based-pay-card");
const commissionPayCard = document.getElementById("commission-pay-card");
const employeePayStructureCards = [salaryPayCard, hourlyPayCard, projectBasedPayCard, commissionPayCard];

let selectedEmployeePayStructureCard = null;

function selectEmployeePayStructureCard(card) {
  if (selectedEmployeePayStructureCard) {
    selectedEmployeePayStructureCard.classList.remove('card-selected');
  }
  selectedEmployeePayStructureCard.classList.add('card-selected');
  selectedEmployeePayStructureCard = card;
}

employeePayStructureCards.forEach(card => {
  card.addEventListener('click', function () {
    selectEmployeePayStructureCard(card);
  });
  card.addEventListener('mouseover', function () {
    card.classList.add('hover');
  });
  card.addEventListener('mouseout', function () {
    card.classList.remove('hover');
  });
});

document.addEventListener('click', function (event) {
  const isClickInsideEmployeePayStructureCard = Array.from(employeePayStructureCards).some(card => card.contains(event.target));
  if (!isClickInsideEmployeePayStructureCard && selectedEmployeePayStructureCard) {
    // Prevents deselection if clicking outside of any card
    event.stopPropagation();
  }
});

// Function to update the text field
function updateEmployeePayStructureInput(value) {
  hiddenEmployeePayStructureInput.value = value;
  setRateStepVisibility(value);
  enableBtn();
}

// Add click event listeners to each card
salaryPayCard.addEventListener("click", () =>
  updateEmployeePayStructureInput("Salary")
);
hourlyPayCard.addEventListener("click", () =>
  updateEmployeePayStructureInput("Hourly")
);
projectBasedPayCard.addEventListener("click", () =>
  updateEmployeePayStructureInput("Project-Based")
);
commissionPayCard.addEventListener("click", () =>
  updateEmployeePayStructureInput("Commission")
);

function setRateStepVisibility(payFrequency) {
  switch (payFrequency.toLowerCase()) {
    case "salary":
      $(".s-annual-salary").css("display", "flex");
      $(".s-hourly-rate").css("display", "none");
      $(".s-project-compensation").css("display", "none");
      $(".s-commission-details").css("display", "none");
      break;
    case "hourly":
      $(".s-annual-salary").css("display", "none");
      $(".s-hourly-rate").css("display", "flex");
      $(".s-project-compensation").css("display", "none");
      $(".s-commission-details").css("display", "none");
      break;
    case "commission":
      $(".s-annual-salary").css("display", "none");
      $(".s-hourly-rate").css("display", "none");
      $(".s-project-compensation").css("display", "none");
      $(".s-commission-details").css("display", "flex");
      break;
    case "project-based":
      $(".s-annual-salary").css("display", "none");
      $(".s-hourly-rate").css("display", "none");
      $(".s-project-compensation").css("display", "flex");
      $(".s-commission-details").css("display", "none");
      break;
    default:
      return;
  }
}
// END - Script to get employee pay structure and enable next button

// BEGIN - Script to get employee pay frequency and enable next button
// Get references to the text field and the cards
const hiddenEmployeePayFrequencyInput = document.getElementById(
  "hidden-employee-pay-frequency-input"
);
const weeklyPayCard = document.getElementById("weekly-pay-card");
const biWeeklyPayCard = document.getElementById("bi-weekly-pay-card");
const monthlyPayCard = document.getElementById("monthly-pay-card");
const projectBasedFrequencyPayCard = document.getElementById(
  "project-based-frequency-pay-card"
);
const employeePayFrequencyCards = [weeklyPayCard, biWeeklyPayCard, monthlyPayCard, projectBasedFrequencyPayCard];

let selectedEmployeePayFrequencyCard = null;

function selectEmployeePayFrequencyCard(card) {
  if (selectedEmployeePayFrequencyCard) {
    selectedEmployeePayFrequencyCard.classList.remove('card-selected');
  }
  selectedEmployeePayFrequencyCard.classList.add('card-selected');
  selectedEmployeePayFrequencyCard = card;
}

employeePayFrequencyCards.forEach(card => {
  card.addEventListener('click', function () {
    selectEmployeePayFrequencyCard(card);
  });
  card.addEventListener('mouseover', function () {
    card.classList.add('hover');
  });
  card.addEventListener('mouseout', function () {
    card.classList.remove('hover');
  });
});

document.addEventListener('click', function (event) {
  const isClickInsideEmployeePayFrequencyCard = Array.from(employeePayFrequencyCards).some(card => card.contains(event.target));
  if (!isClickInsideEmployeePayFrequencyCard && selectedEmployeePayFrequencyCard) {
    // Prevents deselection if clicking outside of any card
    event.stopPropagation();
  }
});

// Function to update the text field
function updateEmployeePayFrequencyInput(value) {
  hiddenEmployeePayFrequencyInput.value = value;
  enableBtn();
}

// Add click event listeners to each card
weeklyPayCard.addEventListener("click", () =>
  updateEmployeePayFrequencyInput("Weekly")
);
biWeeklyPayCard.addEventListener("click", () =>
  updateEmployeePayFrequencyInput("Bi-Weekly")
);
monthlyPayCard.addEventListener("click", () =>
  updateEmployeePayFrequencyInput("Monthly")
);
projectBasedFrequencyPayCard.addEventListener("click", () =>
  updateEmployeePayFrequencyInput("Project-Based")
);
// END - Script to get employee pay frequency and enable next button

{
  /* <script>
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
</script> */
}
