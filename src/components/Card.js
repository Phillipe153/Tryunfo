import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <form>
        <fieldset>
          <h3 data-testid="name-card">
            { cardName }
          </h3>
          <h3 data-testid="description-card">
            { cardDescription }
          </h3>
          <h3 data-testid="attr1-card">
            { cardAttr1 }
          </h3>
          <h3 data-testid="attr2-card">
            { cardAttr2 }
          </h3>
          <h3 data-testid="attr3-card">
            { cardAttr3 }
          </h3>
          <h3
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          >
            { cardImage }
          </h3>
          <h3 data-testid="rare-card">
            { cardRare }
          </h3>
          { cardTrunfo
            ? <h3 data-testid="trunfo-card">Super Trunfo</h3>
            : null }
        </fieldset>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Form;