import { formForTextAnalyzed } from "./component/formTextAnalyzed.js";
import { inscriptionForm } from "./component/inscriptionForm.js";
import { datos } from "./services/fetch.js";
import { analizame } from "./services/fetchServices.js";

var container;

document.addEventListener("DOMContentLoaded", function () {
  analizame()
  container = document.querySelector(".textAnalyzed");
  inscriptionForm.addForm(document.body);
  document.getElementById("btnSubmit").addEventListener("click", () => {
    formForTextAnalyzed.addForm(document.body);
  });
  document.getElementById("btnSubmit").addEventListener("click", datos);
  document.getElementById("btnSubmit").addEventListener("click", () => {
    inscriptionForm.disableForm();
  });
});
