  const signInForm = document.getElementById("signInForm");
  const signUpForm = document.getElementById("signUpForm");
  const signInTab = document.getElementById("signInTab");
  const signUpTab = document.getElementById("signUpTab");
  const toggleMessage = document.getElementById("toggleMessage");

  const applicantBtn = document.getElementById("applicantBtn");
  const adminBtn = document.getElementById("adminBtn");
  const signInIdField = document.getElementById("signInIdField");
  const signUpIdField = document.getElementById("signUpIdField");

  let currentRole = "applicant"; // default

  // Toggle between sign in and sign up
  signInTab.addEventListener("click", () => {
    signInForm.classList.remove("hidden");
    signUpForm.classList.add("hidden");
    signInTab.classList.add("active");
    signUpTab.classList.remove("active");
    toggleMessage.innerHTML = `Don't have an account? <strong><a href="#" id="switchToSignUp">Click Sign Up</a></strong>`;
    setupSwitchLinks();
  });

  signUpTab.addEventListener("click", () => {
    signUpForm.classList.remove("hidden");
    signInForm.classList.add("hidden");
    signUpTab.classList.add("active");
    signInTab.classList.remove("active");
    toggleMessage.innerHTML = `Already have an account? <strong><a href="#" id="switchToSignIn">Click Sign In</a></strong>`;
    setupSwitchLinks();
  });

  // Role switching logic
  applicantBtn.addEventListener("click", () => {
    currentRole = "applicant";
    applicantBtn.classList.add("active", "btn-primary");
    applicantBtn.classList.remove("btn-outline-primary");
    adminBtn.classList.remove("active", "btn-primary");
    adminBtn.classList.add("btn-outline-primary");

    signInIdField.placeholder = "ID Number (e.g. SA ID)";
    signUpIdField.placeholder = "ID Number (e.g. SA ID)";
  });

  adminBtn.addEventListener("click", () => {
    currentRole = "admin";
    adminBtn.classList.add("active", "btn-primary");
    adminBtn.classList.remove("btn-outline-primary");
    applicantBtn.classList.remove("active", "btn-primary");
    applicantBtn.classList.add("btn-outline-primary");

    signInIdField.placeholder = "Employee Number";
    signUpIdField.placeholder = "Employee Number";
  });

  function setupSwitchLinks() {
    const signInLink = document.getElementById("switchToSignIn");
    const signUpLink = document.getElementById("switchToSignUp");

    if (signInLink) {
      signInLink.addEventListener("click", (e) => {
        e.preventDefault();
        signInTab.click();
      });
    }

    if (signUpLink) {
      signUpLink.addEventListener("click", (e) => {
        e.preventDefault();
        signUpTab.click();
      });
    }
  }

  setupSwitchLinks();