// lodash library for tested, optimized and stable utility functions for collection/obj manipulation.
const _ = require('lodash');

const RootCategory = require('./catalog-data');

// Might generate lot of data
console.log(JSON.stringify(RootCategory, null, 2));

/**
 * [This function traverses the Category tree and for any given product name, returns a sorted list of products attached
 * to the tree up till this level]
 * @param  {[String]} productName [Name of product]
 * @return {[Array]}             [Array of products at same level across the tree, sorted by price ascending]
 */
function getSortedProductListUptoLevel(productName) {

  if (!productName) {
    throw new Error("productName is missing");
  }

  let categories = [RootCategory];
  let children;
  let products = [];

  do {
    // reset children in every iteration
    children = [];

    //get all the child nodes at this current level
    categories.forEach(function (category) {
      children = children.concat((category && category.children) || []);
    });

    // remove products from children and add to final result set products.
    products = products.concat(_.remove(children, function (child) {
      return child.type == 'Product';
    }));

    // assign all the categories left in the children to categories, to process in next iteration.
    categories = children;

    // check if the input product name found, if found return the products gathered so far as final result.
    if (_.map(products, 'name').includes(productName)) {
      return _.map(_.sortBy(products, 'price'), 'name');
    }
  } while (categories.length > 0); // continue to next iteration if any categories left to process
  
  return 'Product not found'; // return a message indicating product not found.
}

let ProductList = getSortedProductListUptoLevel('Prod_1');
console.log(ProductList); // product list sorted by price in ascending order.

