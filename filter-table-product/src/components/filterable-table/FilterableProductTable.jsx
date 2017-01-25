import React, {Component} from 'react';

import SearchBar from './SearchBar';
import NavBar from './NavBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      inStockOnly: false,
      user: props.user
    };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filterText, inStockOnly) {
    this.setState({
      filterText,
      inStockOnly
    });
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          user={this.state.user}
          onUserInput={this.handleUserInput}
          auth={['admin']} />
        <NavBar user={this.state.user} />
        <ProductTable products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly} />
      </div>
    );
  }
}

export default FilterableProductTable;
