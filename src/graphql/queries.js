/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProducts = /* GraphQL */ `
  query GetProducts($nextToken: String) {
    getProducts(nextToken: $nextToken) {
      products {
        productId
        createdDate
        modifiedDate
        name
        category
        description
        picture
        price
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($productId: ID!) {
    getProduct(productId: $productId) {
      productId
      createdDate
      modifiedDate
      name
      category
      description
      picture
      price
    }
  }
`;
export const getProductsByCategory = /* GraphQL */ `
  query GetProductsByCategory($category: String!) {
    getProductsByCategory(category: $category) {
      products {
        productId
        createdDate
        modifiedDate
        name
        category
        description
        picture
        price
      }
      nextToken
    }
  }
`;
