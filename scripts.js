let main = document.querySelector("main");

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name");
  let email = document.getElementById("email");

  let buttons = document.querySelectorAll("[name=pronoun]");

  let pronouns;

  for (let button of Array.from(buttons)) {
    if (button.checked) {
      pronouns = button.id;
    }
  }

  if (name.value == "" || email.value == "" || pronouns == "") {
    alert("Please fill out the entire form before submission.");
  } else {
    console.group("========= Form Submission =========");
    console.log("Name: ", name.value);
    console.log("Email: ", email.value);
    console.log("Preferred Pronouns: ", pronouns);
    console.groupEnd();
    alert("form submission printed to console");
  }
});
