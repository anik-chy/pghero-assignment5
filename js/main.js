// blog button
function goToBlog() {
  window.location.href = "blog.html";
}

// hover effect on the cards
function changeRandColor(cardName) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const card = document.getElementById(cardName);
  card.style.backgroundColor = "#" + randomColor;
}

// reset the hover effect of the cards
function resetCardColor(cardName) {
  const card = document.getElementById(cardName);
  card.style.backgroundColor = "#fff";
}

// reset fields
function resetFields(field1, field2) {
  field1.value = "";
  field2.value = "";
}

// result card text formater
function resultTestFormater(objName, calculatedArea){
    const names = objName.split('-')
    let name = names[0].charAt(0).toUpperCase()+names[0].slice(1);
    const finalStr = name.padEnd(15,' ') + (Math.round(calculatedArea * 100) / 100).toFixed(2)+' cm²';

    return finalStr;
}
// area calculation
function calArea(multiFactor, objName) {
  const field1 = document.getElementById(objName + "-f1");
  const field2 = document.getElementById(objName + "-f2");

  const field1Val = Number(field1.value);
  const field2Val = Number(field2.value);

  if (Object.is(field1Val, NaN) || Object.is(field2Val, NaN)) {
    window.alert("Please Recheck Your Inputs....");
    resetFields(field1, field2);
  } else {
    let calculatedArea = multiFactor * field1Val * field2Val;
    const areaList = document.getElementById("area-list");

    const str = resultTestFormater(objName, calculatedArea);
    console.log(str);

    const li = document.createElement("li");
    li.setAttribute("id", objName + "-li");
    li.innerText = str;
    li.innerHTML = `${str} <button type="button" class="btn btn-primary px-1";
    onclick="calArea(1,'parallel-card')">Convert to m²</button>`;
    areaList.appendChild(li);

    resetFields(field1, field2);
  }
}
