import { PrintValues } from "../component/printKeyValues.js";
import { translateKeyValues } from "../component/translateKeyValues.js";

const formdata = new FormData();
formdata.append("key", "86c2bbd98a3a00d5b15330c4fcdc17a3");
formdata.append("txt", "ESTOY MUY triste hoy, tengo ganas de morirme");
formdata.append("lang", "es"); // Código de lenguaje

var json = {
  status: {
    code: "0",
    msg: "OK",
    credits: "1",
    remaining_credits: "19998",
  },
  model: "general_en",
  score_tag: "P",
  agreement: "AGREEMENT",
  subjectivity: "SUBJECTIVE",
  confidence: "100",
  irony: "NONIRONIC",
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

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow",
};

export const analisar = async (constructor) => {
  await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Éxito:", data);
      constructor(data);
    })
    .catch((error) => {
      console.error("Error al hacer la solicitud:", error);
    });
};

const translator = new translateKeyValues(json);
const translatedValues = translator.getTranslatedValues();
export const datos = () => {
  const area=document.querySelector("#txtResult")
  PrintValues.print(translatedValues, area)
};
