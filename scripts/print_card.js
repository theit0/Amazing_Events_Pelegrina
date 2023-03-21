function printCard(events) {
    const fragment = document.createDocumentFragment();
    events.forEach(event => {
      const { image, _id, name, description, price } = event;
      const card = $templateCard.cloneNode(true);
      card.querySelector('img').src = image;
      card.querySelector('img').alt = name;
      card.querySelector('a').href = `./details.html?id=${_id}`;
      card.querySelector('h4').textContent = name;
      card.querySelector('p').textContent = description;
      card.querySelector('h6').textContent = `Price: $${price}`;
      fragment.appendChild(card);
    });
    $cards.appendChild(fragment);
}