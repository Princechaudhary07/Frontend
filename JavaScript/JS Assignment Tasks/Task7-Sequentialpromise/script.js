const stepsList = document.getElementById("stepsList");

function createStepPromise(message) {
  return new Promise(resolve => {
    setTimeout(() => resolve(message), 1000);
  });
}

function addStep(text, isBold = false) {
  const li = document.createElement("li");
  li.textContent = text;
  if (isBold) li.classList.add("bold");
  stepsList.appendChild(li);
  return li;
}

async function runSteps() {
  
  let step1Item = addStep("Running Step 1...", true);
  const result1 = await createStepPromise("Step 1 done");
  step1Item.textContent = result1;
  step1Item.classList.remove("bold");

  
  let step2Item = addStep("Running Step 2...", true);
  const result2 = await createStepPromise("Step 2 done");
  step2Item.textContent = result2;
  step2Item.classList.remove("bold");

  
  let step3Item = addStep("Running Step 3...", true);
  const result3 = await createStepPromise("Step 3 done");
  step3Item.textContent = result3;
  step3Item.classList.remove("bold");
}


runSteps();
