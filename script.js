const searchForm = document.getElementById("search-box");

searchForm.addEventListener("submit", (e) => {
  const searchTerm = document.getElementById("searchTerm").value;

  window.alert(
    "Oh, you are trying to search for: <<" + searchTerm + ">>! Good luck!"
  );
  e.preventDefault();
});

const contactUsForm = document.getElementById("contact-us-form");

contactUsForm.addEventListener("submit", (e) => {
  const terms1 = document.getElementById("terms1").checked;
  const terms2 = document.getElementById("terms2").checked;
  e.preventDefault();

  if (!terms1 || !terms2) {
    document.getElementById("error-message").style.display = "block";

    if (!terms1) {
      document.getElementById("terms1-box").focus();
    } else {
      document.getElementById("terms2-box").focus();
    }
  } else {
    document.getElementById("error-message").style.display = "none";
    window.alert("Thanks for your message!");
  }
});

const subscribeForm = document.getElementById("subscrbe-form");

subscribeForm.addEventListener("submit", (e) => {
  const subscriptionEmail = document.getElementById("subscriptionEmail").value;

  window.alert("Your email is - " + subscriptionEmail + "!");
  e.preventDefault();
});

function toggleCheckbox(id) {
  const checkboxDiv = document.getElementById(`${id}`);
  const input = document.getElementById(id);

  if (input.checked) {
    checkboxDiv.setAttribute("aria-checked", "false");
    input.checked = false;
  } else {
    checkboxDiv.setAttribute("aria-checked", "true");
    input.checked = true;
  }
}

document.querySelectorAll(".custom-checkbox").forEach(function (checkbox) {
  checkbox.addEventListener("keydown", function (e) {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      const id = checkbox.querySelector("input").id;
      toggleCheckbox(id);
    }
  });
});

function toggleRadio(id) {
  const allRadios = document.querySelectorAll(".custom-radio");
  const input = document.getElementById(id);
  const radioDiv = input.parentElement;

  allRadios.forEach(function (radio) {
    const radioInput = radio.querySelector("input");
    const radioDiv = radio;

    if (radioInput.id !== id) {
      radioInput.checked = false;
      radioDiv.setAttribute("aria-checked", "false");
    }
  });

  if (!input.checked) {
    input.checked = true;
    radioDiv.setAttribute("aria-checked", "true");
  }
}

document.querySelectorAll(".custom-radio").forEach(function (radio) {
  radio.addEventListener("keydown", function (e) {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      const id = radio.querySelector("input").id;
      toggleRadio(id);
    }
  });
});
