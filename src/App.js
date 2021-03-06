import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
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
      cards: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.saveButtonDisabled = this.saveButtonDisabled.bind(this);
    this.saveButtonFunction = this.saveButtonFunction.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.hasTrunfoFucntion = this.hasTrunfoFucntion.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
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
      // cards,
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
    }), this.hasTrunfoFucntion);
  }

  deleteCard(index) {
    const { cards } = this.state;
    cards.splice(index, 1);
    this.setState({ cards }, this.hasTrunfoFucntion);
  }

  hasTrunfoFucntion() {
    const { cards } = this.state;
    if (cards.find((e) => e.cardTrunfo)) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
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
          <Filter
            cards={ cards }
            trunfoFilterProp={ hasTrunfo }
            deleteCard={ this.deleteCard }
          />
        </div>
      </div>
    );
  }
}

export default App;
