import { SaveKeyValues } from "../component/SaveKeyValues.js";
import { PrintKeyValues } from "../component/PrintKeyValues.js";
import { TranslateKeyValues } from "../component/TranslateKeyValues.js"

export const processKeyValues=(json)=>{
    let translator=new TranslateKeyValues(json);
    let translatedValues = translator.getTranslatedValues();  
    let container = document.getElementById("txtResult");
    SaveKeyValues.execute(translatedValues);
    PrintKeyValues.execute(translatedValues, container);
}