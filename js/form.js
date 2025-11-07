console.log("loaded instruction...");

const form = document.querySelector("form");

const navnOutput = document.querySelector("#fulde_navn_output");
const emailOutput = document.querySelector("#email_output");
const datoOgTidOutput = document.querySelector("#dato_tid_output");
const steddOutput = document.querySelector("#sted_output");
const harDuSetOutput = document.querySelector("#har_du_set_output");
const beskrivelseOutput = document.querySelector("#beskrivelse_output");
const tegnOutput = document.querySelector("#tegn_output");
const foelgerOutput = document.querySelector("#foelger_output");
const vilkaarOutput = document.querySelector("#vilkaar_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const navn = formData.get("navn");
  const email = formData.get("email");
  const datoTid = formData.get("dato_tid");
  const sted = formData.get("sted");
  const harDuSet = formData.get("har_du_set");
  const beskrivelse = formData.get("beskrivelse");
  let tegn = formData.get("kliklyde");
  if (formData.get("kliklyde")) {
    tegn += ", " + formData.get("kuglepen");
  } else {
    tegn = formData.get("kuglepen");
  }
  if (formData.get("kuglepen")) {
    tegn += ", " + formData.get("bid");
  } else {
    tegn = formData.get("bid");
  }
  if (formData.get("bid")) {
    tegn += ", " + formData.get("aggressiv");
  } else {
    tegn = formData.get("aggressiv");
  }

  let foelger = formData.get("soevnproblemer");
  if (formData.get("soevnproblemer")) {
    foelger += ", " + formData.get("bidemaerke");
  } else {
    foelger = formData.get("bidemaerke");
  }
  if (formData.get("bidemaerke")) {
    foelger += ", " + formData.get("genklikninger");
  } else {
    foelger = formData.get("genklikninger");
  }

  const acceptere_vilkaar = formData.get("acceptere_vilkaar");

  navnOutput.textContent = navn;
  emailOutput.textContent = email;
  datoOgTidOutput.textContent = datoTid;
  steddOutput.textContent = sted;
  harDuSetOutput.textContent = harDuSet;
  beskrivelseOutput.textContent = beskrivelse;
  tegnOutput.textContent = tegn;
  foelgerOutput.textContent = foelger;
  vilkaarOutput.textContent = acceptere_vilkaar;

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
