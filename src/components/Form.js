import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <input
            data-testid="name-input"
            type="text"
            value="nome"
          />
          <input
            data-testid="description-input"
            type="textarea"
            value="descriçao"
          />
          <input
            data-testid="attr1-input"
            type="number"
            value="atributo 1"
          />
          <input
            data-testid="attr2-input"
            type="number"
            value="atributo 2"
          />
          <input
            data-testid="attr3-input"
            type="number"
            value="atributo 3"
          />
          <input
            data-testid="image-input"
            type="text"
            value="imagem"
          />
          <select
            data-testid="rare-input"
            type="select"
            value="raridade"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          <input
            data-testid="trunfo-input"
            type="checkbox"
            value="nome"
          />
          <button
            data-testid="save-button"
            type="submit"
          >
            Salvar
          </button>
        </fieldset>
      </form>
    );
  }
}

export default Form;
