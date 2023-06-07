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

const addProject = (projectName, projectDescription, projectLink) => {
  const projectSection = document.getElementById("projects");
  const container = document.createElement("div");

  container.style.display = "flex";
  container.style.flexDirection = "column";

  const projectDiv = document.createElement("div");

  projectDiv.style.marginTop = "25px";
  projectDiv.style.marginLeft = "auto";
  projectDiv.style.marginRight = "auto";
  projectDiv.style.width = "75%";
  projectDiv.style.height = "auto";
  projectDiv.style.paddingBottom = "20px";
  projectDiv.style.boxSizing = "border-box";
  projectDiv.style.border = "1px solid";
  projectDiv.style.borderRadius = "2%";
  projectDiv.style.backgroundColor = "var(--white)";

  let name = document.createElement("h1");

  name.textContent = projectName;

  let description = document.createElement("p");

  description.style.marginLeft = "50px";
  description.style.marginRight = "50px";

  description.textContent = projectDescription;

  let link = document.createElement("a");

  link.style.marginLeft = "50px";
  link.style.marginRight = "50px";
  link.style.paddingBottom = "10px";

  link.href = projectLink;
  link.textContent = projectLink;

  projectDiv.appendChild(name);
  projectDiv.appendChild(description);
  projectDiv.appendChild(link);

  container.appendChild(projectDiv);

  projectSection.appendChild(container);

  projectSection.style.paddingBottom = "10px";
};

addProject(
  "CS410: SummarizationModel",
  "When fine-tuning a language model for the task of summarization, which datasets are chosen determines how effective the trained model will be on that task. Datasets vary in domain, scope, and context. Some datasets are superior to others when considering their ability to train a model to generate coherent and concise summaries within their associated domain. Additionally, the model you choose for fine-tuning can have a similar if not more significant impact. In our research, we tested three popular datasets available through the Hugging Face library XSum (Narayan et al., 2018), CNN/Daily Mail (See et al., 2017), and SAMSum (Gliwa et al., 2019) and analyzed their results when used to fine-tune the T5-Small model (Raffel et al., 2020). We also fine-tuned three models T5- Small, Bart-base (Lewis et al., 2019), and LED (Beltagy et al., 2020) on SAMSum, the smallest of the three datasets in an attempt to compare the relative performance of these models. We also tested BART and T5-Small on XSum and CNN/Daily Mail with three epochs. The evaluation in the former cases was performed in the context of ROUGE scores, and in the later tests ROUGE and UniEval (Zhong et al., 2022). More details and results in our paper in the github readme.",
  "https://github.com/ReidLuttrell/SummarizationModel"
);

addProject(
  "BjordOpti",
  "A BunnyHop script for Counter-Strike: source that gains optimal momentum through strafing. Compiles to a .dll (dynamically linked library), which is then memory mapped onto the hl2.exe process. From there it creates a thread, and accesses important game functionality through memory offsetting and VTable traversing. It does this by creating a hook on the CreateMove function, and modifies movement each tick. In terms of bunnyhopping, this means that the tick the player touches the ground, the IN_JUMP bitflag should be set in the buttons bitfield. For the optimal strafing, there is a 'silent' version, that strafes back and forth every tick, and a 'natural' version that optimizes for wishspeed using a trigonometric calculation. Contains various useful game structures derived through reverse engineering the game using IDA and ReCLASS. DLL attachment occurs in dllmain.cpp and most bunnyhop and strafing mechanics occur in Misc.cpp. Other files are the aforementioned game structures and several utility functions to traverse memory.",
  "https://github.com/Bjordsvennson/BjordOpti"
);
