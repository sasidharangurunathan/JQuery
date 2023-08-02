// Sample data for card iteration
const cardData = [
    { title: "Vnst Transport", content: "This is the content of Card 1." },
    { title: "SRS Transport", content: "This is the content of Card 2." },
    { title: "SVL Transport", content: "This is the content of Card 3." },
    { title: "SVL Transport", content: "This is the content of Card 3." },
    { title: "SVL Transport", content: "This is the content of Card 3." },
  ];
  
  // Function to create a card
  function createCard(title, content) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
  
    const titleElement = document.createElement("h2");
    titleElement.textContent = title;
  
    const contentElement = document.createElement("p");
    contentElement.textContent = content;
  
    cardElement.appendChild(titleElement);
    cardElement.appendChild(contentElement);
  
    return cardElement;
  }
  
  // Function to iterate over cardData and create cards
  function createCards() {
    const cardContainer = document.getElementById("cardContainer");
  
    cardData.forEach((data) => {
      const card = createCard(data.title, data.content);
      cardContainer.appendChild(card);
    });
  }
  
  // Call the createCards function when the DOM is loaded
  document.addEventListener("DOMContentLoaded", createCards);
  