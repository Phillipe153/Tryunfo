import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  constructor() {
    super();

    this.state = {
      filterName: '',
    };

    this.nameFilter = this.nameFilter.bind(this);
  }

  nameFilter(event) {
    // const {
    //   filterName,
    // } = this.state;

    this.setState({ filterName: event.target.value });
  }

  render() {
    const {
      filterName,
    } = this.state;
    const {
      cards,
    } = this.props;

    return (
      <div>
        <fieldset>
          Filtros de busca
          <input
            type="text"
            data-testid="name-filter"
            onChange={ this.nameFilter }
          />
          {/* <button>Buscar</button> */}
        </fieldset>
        Cartas no baralho:
        { cards.filter((x) => x.cardName.includes(filterName))
          .map((e, index) => (
            <fieldset key={ e.cardName }>
              <h4>{e.cardName}</h4>
              <h4>{e.cardDescription}</h4>
              <h4>{e.cardAttr1}</h4>
              <h4>{e.cardAttr2}</h4>
              <h4>{e.cardAttr3}</h4>
              <h4>{e.cardImage}</h4>
              <h4>{e.cardRare}</h4>
              <h4>{e.cardTrunfo ? 'Super Trunfo' : null }</h4>
              <button
                type="button"
                data-testid="delete-button"
                onClick={ () => this.deleteCard(index) }
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
  // cardName: PropTypes.string.isRequired,
  // cardDescription: PropTypes.string.isRequired,
  // cardAttr1: PropTypes.string.isRequired,
  // cardAttr2: PropTypes.string.isRequired,
  // cardAttr3: PropTypes.string.isRequired,
  // cardImage: PropTypes.string.isRequired,
  // cardRare: PropTypes.string.isRequired,
  // cardTrunfo: PropTypes.bool.isRequired,
  cards: PropTypes.arrayOf.isRequired,
};

export default Filter;
