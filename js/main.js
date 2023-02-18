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
    card.style.backgroundColor = "#fff" ;
  }