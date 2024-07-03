import { DivComponent } from '../../common/div-component';
import './card.css';

export class Card extends DivComponent {
  constructor(appState, cardState) {
    super();
    this.appState = appState;
    this.cardState = cardState;
  }

  render() {
    this.el.classList.add('card');

    const isInFavorites = this.appState.favorites.find(
      b => b.key == this.cardState.key
    );

    this.el.innerHTML = `
      <div class='card__image'>
        <img
          src='https://covers.openlibrary.org/b/olid/${
            this.cardState.cover_edition_key
          }-M.jpg'
          alt='Обложка книги'
        />
      </div>
      <div class="card__info">
        <div class="card__tag">
        ${this.cardState.subject?.[0] || 'Не задано'}
        </div>
        <div class="card__name">
          ${this.cardState.title}
        </div>
        <div class="card__author">
          ${this.cardState.author_name}
        </div>
        <div class="card__footer">
          <button
            class="button-add ${isInFavorites ? 'button__active' : ''}">
            ${
              isInFavorites
                ? '<img src="/static/favorites.svg" />'
                : '<img src="/static/favorites-white.svg" />'
            }
          </button>
        </div>
      </div>
      `;

    return this.el;
  }
}
