import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.saveButtonDisabled = this.saveButtonDisabled.bind(this);
    this.saveButtonFunction = this.saveButtonFunction.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    console.log(value);
    const checkValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: checkValue }, this.saveButtonDisabled);
  }

  saveButtonDisabled() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const maxSum = 211;
    const maxValueUnit = 91;
    const cardSum = parseInt(cardAttr1, 10)
    + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10);

    if (
      cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardAttr1 >= 0
      && cardAttr2 >= 0
      && cardAttr3 >= 0
      && cardAttr1 < maxValueUnit
      && cardAttr2 < maxValueUnit
      && cardAttr3 < maxValueUnit
      && cardSum < maxSum

    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else { this.setState({ isSaveButtonDisabled: true }); }
  }

  saveButtonFunction(event) {
    event.preventDefault();

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cards,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    };

    this.setState((prevState) => ({
      cards: [...prevState.cards, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    }));

    return cards.map((e) => e.cardTrunfo)
      ? this.setState({ hasTrunfo: true })
      : this.setState({ hasTrunfo: false });
  }

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
      hasTrunfo,
      isSaveButtonDisabled,
      cards,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.saveButtonFunction }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
        />
        <div>
          Cartas no baralho:
          { cards.map((e) => (
            <fieldset key={ e.cardName }>
              <h4>{e.cardName}</h4>
              <h4>{e.cardDescription}</h4>
              <h4>{e.cardAttr1}</h4>
              <h4>{e.cardAttr2}</h4>
              <h4>{e.cardAttr3}</h4>
              <h4>{e.cardImage}</h4>
              <h4>{e.cardRare}</h4>
              <h4>{e.cardTrunfo ? 'Super Trunfo' : null }</h4>
            </fieldset>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
