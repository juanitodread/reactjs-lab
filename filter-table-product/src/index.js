import React from 'react';
import ReactDOM from 'react-dom';

import FilterableProductTable from './components/filterable-table/FilterableProductTable';

const Products = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

const user = {name: 'Juan', role: 'admin'};
// const user = {name: 'Antonio', role: 'service'};
// const user = {name: 'Root', role: 'root'};

ReactDOM.render(<FilterableProductTable products={Products} user={user} />,
  document.getElementById('filterable'));
