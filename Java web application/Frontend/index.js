import { formForTextAnalyzed } from "./component/formTextAnalyzed.js";
import { inscriptionForm } from "./component/inscriptionForm.js";
import { translateKeyValues } from "./component/translateKeyValues.js";
import { analizeText, datos, registerClient, registerResult } from "./services/fetch.js";

var container;
var json = {
  status: {
    code: "0",
    msg: "OK",
    credits: "1",
    remaining_credits: "19998",
  },
  model: "general_en",
  score_tag: "NONE",
  agreement: "AGREEMENT",
  subjectivity: "OBJECTIVE",
  confidence: "75",
  irony: "IRONIC",
  sentence_list: [
    {
      text: "I love this car.",
      inip: "0",
      endp: "15",
      bop: "y",
      confidence: "100",
      score_tag: "P",
      agreement: "AGREEMENT",
      segment_list: [
        {
          text: "I love this car.",
          segment_type: "main",
          inip: "0",
          endp: "15",
          confidence: "100",
          score_tag: "P",
          agreement: "AGREEMENT",
          polarity_term_list: [
            {
              text: "love",
              inip: "2",
              endp: "5",
              confidence: "100",
              score_tag: "P",
              sentimented_entity_list: [
                {
                  form: "car",
                  id: "6fa0e89a58",
                  variant: "car",
                  inip: "10",
                  endp: "12",
                  type: "Top>Product>Machine>Vehicle>Car",
                  score_tag: "P",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const submitClient=()=>{
  const name=document.getElementById("inpName").value;
  const lastName=document.getElementById("inpLastName").value;
  const userName=document.getElementById("userName").value;
  const city=document.getElementById("inpCity").value;
  const state=document.getElementById("inpState").value;
  const zipCode=document.getElementById("inpZipCode").value;
  registerClient(name,lastName,userName,city,state,zipCode);
}
export const textAnalizer=()=>{
  const text = document.getElementById("txtResult");
  analizeText(text, datos);
}
export const submitResult=()=>{
  const translator = new translateKeyValues(json)
  const translatedValues = translator.getJsonValues()
  const score_tag=translatedValues.score_tag;
  const irony=translatedValues.irony;
  const subjectivity=translatedValues.subjectivity;
  const agreement=translatedValues.agreement;
  const confidence=translatedValues.confidence;
  const userName=document.getElementById("userName").value;
  console.log(userName)
  registerResult(userName,score_tag,irony,subjectivity,agreement,confidence);
}

window.submitClient=submitClient;
window.datos=datos;
window.submitResult=submitResult;
window.textAnalizer=textAnalizer;

document.addEventListener("DOMContentLoaded", function () {
  container = document.querySelector(".textAnalyzed");
  inscriptionForm.addForm(document.querySelector(".divInscription"));
  document.getElementById("btnSubmit").addEventListener("click",(event) => {
    event.preventDefault();
    formForTextAnalyzed.addForm(document.querySelector(".divRsult"));
  });
});