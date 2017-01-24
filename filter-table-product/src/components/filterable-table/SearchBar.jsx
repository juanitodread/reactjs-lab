import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(this.filterTextInput.value,
      this.inStockOnlyInput.checked);
  }

  render() {
    return (
      <form>
        <input type='text'
          placeholder='Search...'
          value={this.props.filterText}
          ref={input => this.filterTextInput = input}
          onChange={this.handleChange} />
        <p>
          <input type='checkbox'
            id='searchChk'
            checked={this.props.inStockOnly}
            ref={input => this.inStockOnlyInput = input}
            onChange={this.handleChange} />
          {' '}
          <label htmlFor='searchChk'>Only show products in stock</label>
        </p>
      </form>
    );
  }
}

export default SearchBar;
