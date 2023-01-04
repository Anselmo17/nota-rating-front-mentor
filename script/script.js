
function nextFeedback() {
    const feedback = document.querySelector(".feedback");
    const step = document.querySelector(".container-step");
    feedback.style = "display:block";
    step.style = "display:none";
}

function itemSelected(item) {
    clearSelecteStep();
    const stepSelected = document.querySelector(".step-selected");
    stepSelected.textContent = `You selected ${item} out of 5`;

    const itemSelected = document.querySelector(`.item${item}`);
    itemSelected.style = " background: hsl(25, 97%, 53%);";
}

function clearSelecteStep() {
    const steps = ["item1", "item2", "item3", "item4", "item5"];
    
    steps.forEach((item)=>{
        let itemCurrent = document.querySelector(`.${item}`);
        itemCurrent.style = "background: hsl(216deg 21% 24%)";
    })
}