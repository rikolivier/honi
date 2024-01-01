const { html } = require("common-tags");
// doesn't work at the moment
function Card({ title, link, linkText }) {
  return html`
    <div class="card__container">
      <h2 class="card__title">${title}</h2>
      <a class="card__link" href="${link}">${linkText}</a>
    </div>
  `;
}

module.exports = Card;
