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

// area calculation
function calArea(multiFactor, objName) {
  const field1 = document.getElementById(objName + "-f1");
  const field2 = document.getElementById(objName + "-f2");

  const field1Val = Number(field1.value);
  const field2Val = Number(field2.value);

  console.log(field1Val + " " + field2Val);

  if (Object.is(field1Val,NaN) || Object.is(field2Val,NaN)) {
    window.alert("Please Recheck Your Inputs....");
    field1.value = "";
    field2.value = "";
  } else {
    field1.value = "";
    field2.value = "";
  }
}
