import React from 'react';
import RoleAwareComponent from '../security/RoleAwareComponent';

class SearchBar extends RoleAwareComponent {
  constructor(props) {
    super(props);

    //Auth
    this.user = props.user;
    this.auth = props.auth;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(this.filterTextInput.value,
      this.inStockOnlyInput.checked);
  }

  render() {
    const jsxComponent = (
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

    return this.shouldBeVisible() ? jsxComponent : null;
  }
}

export default SearchBar;
