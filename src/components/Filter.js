import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  constructor() {
    super();

    this.state = {
      nameFilter: '',
      rareFilter: 'todas',
      trunfoFilter: false,

    };

    this.nameFilterFunction = this.nameFilterFunction.bind(this);
    this.rareFilterFunction = this.rareFilterFunction.bind(this);
    this.trunfoFilterFunction = this.trunfoFilterFunction.bind(this);
  }

  nameFilterFunction(event) {
    this.setState({ nameFilter: event.target.value });
  }

  rareFilterFunction(event) {
    this.setState({ rareFilter: event.target.value });
  }

  trunfoFilterFunction(event) {
    this.setState({ trunfoFilter: event.target.checked });
  }

  render() {
    const {
      nameFilter,
      rareFilter,
      trunfoFilter,
    } = this.state;
    const {
      cards,
      deleteCard,
    } = this.props;

    return (
      <div>
        <fieldset>
          Filtros de busca
          <input
            type="text"
            data-testid="name-filter"
            onChange={ this.nameFilterFunction }
            disabled={ trunfoFilter }
          />
          <select
            onChange={ this.rareFilterFunction }
            data-testid="rare-filter"
            disabled={ trunfoFilter }
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          <label
            htmlFor="trunfo-filter"
            data-testid="trunfo-filter"
          >
            <input
              onChange={ this.trunfoFilterFunction }
              type="checkbox"
            />
            Super Trybe Trunfo
          </label>
        </fieldset>
        Cartas no baralho:
        { trunfoFilter
          ? cards.filter((card) => card.cardTrunfo === true)
            .map((card, index) => (
              <fieldset key={ card.cardName }>
                <h4>{card.cardName}</h4>
                <h4>{card.cardDescription}</h4>
                <h4>{card.cardAttr1}</h4>
                <h4>{card.cardAttr2}</h4>
                <h4>{card.cardAttr3}</h4>
                <h4>{card.cardImage}</h4>
                <h4>{card.cardRare}</h4>
                <h4>{card.cardTrunfo ? 'Super Trunfo' : null }</h4>
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => deleteCard(index) }
                >
                  Excluir
                </button>
              </fieldset>
            ))
          : cards.filter((card) => card.cardName.includes(nameFilter)
          && (card.cardRare === rareFilter || rareFilter === 'todas'))
            .map((allCards, index) => (
              <fieldset key={ allCards.cardName }>
                <h4>{allCards.cardName}</h4>
                <h4>{allCards.cardDescription}</h4>
                <h4>{allCards.cardAttr1}</h4>
                <h4>{allCards.cardAttr2}</h4>
                <h4>{allCards.cardAttr3}</h4>
                <h4>{allCards.cardImage}</h4>
                <h4>{allCards.cardRare}</h4>
                <h4>{allCards.cardTrunfo ? 'Super Trunfo' : null }</h4>
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => deleteCard(index) }
                >
                  Excluir
                </button>
              </fieldset>
            ))}
      </div>

    );
  }
}

Filter.propTypes = {
  cards: PropTypes.arrayOf.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Filter;
