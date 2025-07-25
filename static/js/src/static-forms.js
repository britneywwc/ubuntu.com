function setUpStaticForms(form, formId) {
  /**
   *
   * @param {Node[]} otherContainers
   *
   * Attaches event listeners to the "other" checkboxes/radios in
   * the form to reveal a text input when selected, and hide
   * it when unselected
   */
  function setUpOtherContainers(otherContainers) {
    function updateOtherInputVisibility(otherInput, textInput) {
      if (otherInput.checked) {
        textInput.classList.remove("u-hide");
        textInput.focus();
      } else {
        textInput.classList.add("u-hide");
        textInput.value = "";
      }
    }

    Array.prototype.forEach.call(otherContainers, function (otherContainer) {
      const otherInput = otherContainer.querySelector(
        ".js-other-container__other-toggle",
      );
      const textInput = otherContainer.querySelector(
        ".js-other-container__input",
      );

      if (otherInput.type === "radio") {
        const radioGroupName = otherInput.name;
        const radioGroup = Array.from(
          document.querySelectorAll(`input[name="${radioGroupName}"]`),
        );
        radioGroup.forEach((radio) => {
          radio.addEventListener("change", () =>
            updateOtherInputVisibility(otherInput, textInput),
          );
        });
      } else if (otherInput.type === "checkbox") {
        otherInput.addEventListener("change", () =>
          updateOtherInputVisibility(otherInput, textInput),
        );
      }
    });
  }
  const otherContainers = document.querySelectorAll(".js-other-container");
  if (otherContainers?.length) {
    setUpOtherContainers(otherContainers);
  }

  /**
   *
   * Get the user's default language, and if it's a sub-language,
   * infer the parent language - e.g. for "en-GB", infer "en"
   */
  function getPrimaryParentLanguage() {
    let language =
      navigator.language ||
      navigator.userLanguage ||
      navigator.browserLanguage ||
      navigator.systemLanguage;

    if (language.indexOf("-") !== -1) {
      if (language !== "zh-TW") {
        language = language.split("-")[0];
      }
    }

    return language;
  }
  const preferredLanguageInput = document.querySelector("#preferredLanguage");
  if (preferredLanguageInput) {
    preferredLanguageInput.value = getPrimaryParentLanguage() || "";
  }

  /**
   *
   * @param {number} formId
   *
   * Builds a message from the form fields and populates the
   * Comments from Lead field
   */
  function buildCommentsForLead() {
    var message = "";

    form?.addEventListener("submit", (e) => {
      var message = "";
      var commentsFromLead = document.querySelector("#Comments_from_lead__c");
      var formFields = document.querySelectorAll(".js-formfield");
      formFields.forEach(function (formField) {
        var comma = ",";
        var fieldTitle = formField.querySelector(".js-formfield-title");
        var inputs = formField.querySelectorAll("input, textarea, select");
        if (fieldTitle) {
          message += fieldTitle.innerText + "\r\n";
        }

        inputs.forEach(function (input) {
          switch (input.type) {
            case "select-one":
              message +=
                input.options[input.selectedIndex]?.textContent + comma + " ";
              break;
            case "radio":
              if (input.checked) {
                message += input.value + comma + " ";
              }
              break;
            case "checkbox":
              if (input.checked) {
                message += input.value + comma + " ";
              }
              break;
            case "text":
            case "number":
            case "textarea":
              if (input.value !== "") {
                message += input.value + comma + " ";
              }
              break;
          }
        });
        message += "\r\n\r\n";
      });

      const radioFieldsets = document.querySelectorAll(
        ".js-remove-radio-names",
      );
      if (radioFieldsets.length > 0) {
        radioFieldsets.forEach((radioFieldset) => {
          const radioInputs = radioFieldset.querySelectorAll(
            "input[type='radio']",
          );
          radioInputs.forEach((radioInput) => {
            radioInput.removeAttribute("name");
          });
        });
      }

      if (formFields.length) {
        commentsFromLead.value = message;
      }

      return message;
    });
  }
  const commentsFromLead = document.querySelector("#Comments_from_lead__c");
  if (commentsFromLead) {
    buildCommentsForLead();
  }

  /**
   *
   * @param {Node} submitButton
   *
   * Attaches a loading spinner to the submit button on
   * form submission
   */
  function attachLoadingSpinner(submitButton) {
    let spinnerClassName = "p-icon--spinner u-animation--spin";
    if (submitButton.classList.contains("p-button--positive")) {
      spinnerClassName += " is-light";
    }

    const spinnerIcon = document.createElement("i");
    spinnerIcon.className = spinnerClassName;
    const buttonRect = submitButton.getBoundingClientRect();
    submitButton.style.width = buttonRect.width + "px";
    submitButton.style.height = buttonRect.height + "px";
    submitButton.classList.add("is-processing");
    submitButton.disabled = true;
    submitButton.innerText = "";
    submitButton.appendChild(spinnerIcon);
  }

  const submitButton = form.querySelector('button[type="submit"]');
  // Exclude forms that don't need loader
  const cancelLoader = submitButton.classList.contains("no-loader");

  if (submitButton && !cancelLoader) {
    // Save the state of the button to get around bfcache
    const originalButtonHTML = submitButton.innerHTML;
    const originalDisabled = submitButton.disabled;

    const resetSubmitButton = () => {
      submitButton.classList.remove("is-processing");
      submitButton.disabled = originalDisabled;
      submitButton.style.width = "";
      submitButton.style.height = "";
      submitButton.innerHTML = originalButtonHTML;
    };

    // Reset button when loaded from cache to avoid stuck loading spinner
    window.addEventListener("pageshow", (event) => {
      if (event.persisted) {
        resetSubmitButton();
      }
    });

    form.addEventListener("submit", () => attachLoadingSpinner(submitButton));
  }

  // Disable submit button if there are required checkboxes
  const requiredCheckboxes = document.querySelectorAll(
    "fieldset.js-required-checkbox",
  );
  if (requiredCheckboxes.length) {
    submitButton.disabled = true;
  }

  form.addEventListener("submit", function (e) {
    setDataLayerConsentInfo();
  });
}

/**
 *
 * @param {*} str
 * @returns {number} Marketo ID
 */
function extractMarketoID(str) {
  var matches = str.match(/\d+/);
  if (matches) {
    return parseInt(matches[0], 10);
  }
  return null;
}

const forms = document.querySelectorAll(
  "form[action='/marketo/submit']:not(.js-modal-form)",
);
if (forms.length) {
  forms.forEach((form) => setUpStaticForms(form, extractMarketoID(form.id)));
}

/**
 *
 * @param {*} fieldset
 * @param {*} checklistItem
 *
 * Disable & enable checklist visibility based on user selection
 * - When any visible checkbox is checked, it will disable the .js-checkbox-visibility__other checkboxes
 * - Can only check one __other item at a time
 * - When all visible checkboxes or any __other checkbox is unchecked, all checkboxes will be enabled
 */
function toggleCheckboxVisibility(fieldset, checklistItem) {
  const checkboxes = fieldset.querySelectorAll(".js-checkbox-visibility");
  const otherCheckboxes = fieldset.querySelectorAll(
    ".js-checkbox-visibility__other",
  );
  const isVisible = checklistItem.classList.contains("js-checkbox-visibility");
  if (checklistItem.checked) {
    if (isVisible) {
      otherCheckboxes.forEach((checkbox) => {
        checkbox.disabled = true;
      });
    } else {
      checkboxes.forEach((checkbox) => {
        checkbox.disabled = true;
      });
      otherCheckboxes.forEach((checkbox) => {
        checklistItem == checkbox ? null : (checkbox.disabled = true);
      });
    }
  } else {
    if (isVisible) {
      var uncheck = true;
      checkboxes.forEach((checkbox) => {
        checkbox.checked ? (uncheck = false) : null;
      });
      if (uncheck) {
        otherCheckboxes.forEach((checkbox) => {
          checkbox.disabled = false;
        });
      }
    } else {
      checkboxes.forEach((checkbox) => {
        checkbox.disabled = false;
      });
      otherCheckboxes.forEach((checkbox) => {
        checkbox.disabled = false;
      });
    }
  }
}
const ubuntuVersionCheckboxes = document.querySelector(
  "fieldset.js-toggle-checkbox-visibility",
);
ubuntuVersionCheckboxes?.addEventListener("change", function (event) {
  toggleCheckboxVisibility(ubuntuVersionCheckboxes, event.target);
});

// Add event listeners to required fieldsets
const requiredFieldsets = document.querySelectorAll(
  "fieldset.js-required-checkbox",
);
requiredFieldsets?.forEach((fieldset) => {
  fieldset.addEventListener("change", function (event) {
    checkRequiredCheckboxes();
  });
});

/**
 * Check all required fieldsets and enable/disable submit button accordingly
 * Submit button is only enabled when ALL required fieldsets have at least one checkbox checked
 */
function checkRequiredCheckboxes() {
  const submitButton = document.querySelector(".js-submit-button");
  const allRequiredFieldsets = document.querySelectorAll(
    "fieldset.js-required-checkbox",
  );
  let allFieldsetsValid = true;

  allRequiredFieldsets.forEach((fieldset) => {
    const checkboxes = fieldset.querySelectorAll("input[type='checkbox']");
    let hasCheckedCheckbox = false;

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        hasCheckedCheckbox = true;
      }
    });
    if (!hasCheckedCheckbox) {
      allFieldsetsValid = false;
    }
  });
  submitButton.disabled = !allFieldsetsValid;
}

/**
 * Sets the consent info from the data layer into the consent_info cookie
 */
function setDataLayerConsentInfo() {
  const dataLayer = window.dataLayer || [];
  const latestConsentUpdateElements = dataLayer
    .slice()
    .reverse()
    .filter(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        item[0] === "consent" &&
        item[1] === "update",
    )[0]?.[2];

  if (latestConsentUpdateElements) {
    document.cookie =
      "consent_info=" +
      JSON.stringify(latestConsentUpdateElements) +
      ";max-age=31536000;";
  }
}
