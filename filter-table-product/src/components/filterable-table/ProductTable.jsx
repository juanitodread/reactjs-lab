import React from 'react';

import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

class ProductTable extends React.Component {
  render() {
    const products = this.props.products;
    const rows = [];

    let lastCategory = null;

    products.forEach(product => {
      if(product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow category={product.category}
            key={product.category} />
        );
      }

      rows.push(
        <ProductRow product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
