/**
 * Category class
 */
class Category {
    /**
     * name: Name of the Category,
     * level: level of the Category in the tree
     */
    constructor(name, level) {
        this.type = 'Category';
        this.name = name;
        this.level = level;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }
}

/**
 * Product class
 */
class Product {
    constructor(name, price) {
        this.type = 'Product';
        this.name = name;
        this.price = price;
    }
}

// Constants
const MIN_LEVELS = 3;
const MAX_LEVELS = 4;
const MIN_LEVEL_FOR_PRODUCTS = 2;
const MAX_CATS_PER_LEVEL = 5;
const MAX_PRODUCTS_PER_CAT = 5;
const MIN_PRICE = 100;
const MAX_PRICE = 5000;

// Set number of levels to build between MIN_LEVELS and MAX_LEVELS
const NUM_LEVELS = Math.floor(Math.random() * (MAX_LEVELS - MIN_LEVELS + 1)) + MIN_LEVELS;

// Counters for naming categories and products
let catCounter = 1, prodCounter = 1;
/**
 * Function to generate sub-tree
 * @param  {[Category]} cat  [Current category]
 * @return {[Array]}       [Array of categories and products]
 */
function generateSubtree(cat) {
  let currentLevel = cat.level + 1;
  // Stop building if levels filled
  if (currentLevel > NUM_LEVELS) {
    return;
  }
  // Determine number of categories to build in level (0 to MAX_CATS_PER_LEVEL)
  const numCatsInLevel = Math.round(Math.random() * (MAX_LEVELS + 1));
  // Generate categories
  for (let i = 0; i < numCatsInLevel; i++) {
    let newCat = new Category(`Cat_${catCounter++}`, currentLevel);
    // Add category to tree
    cat.addChild(newCat);
    // Generate subtree
    generateSubtree(newCat);
  }
  // Generate products inside category if applicable
  if (currentLevel >= MIN_LEVEL_FOR_PRODUCTS) {
    // Determine number of products to add in this category
    const numProductsInCat = Math.round(Math.random() * (MAX_PRODUCTS_PER_CAT + 1));
    // Generate products
    for (let i = 0; i < numCatsInLevel; i++) {
      // Generate random price
      let randomPrice = Math.floor(Math.random() * (MAX_PRICE - MIN_PRICE + 1))+ MIN_PRICE;
      cat.addChild(new Product(`Prod_${prodCounter++}`, randomPrice));
    }
  }
}

/*
 * Generate tree
 */
// Make root Category at level 0
let RootCategory = new Category('ROOT', 0);
// Build our tree
generateSubtree(RootCategory);

module.exports = RootCategory;
