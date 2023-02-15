export const PRODUCT_QUERY = `
query {
  products {
    data {
      id
      attributes {
        title
        description
        price
        slug
        image {
          data {
            	attributes 
            { 
              formats
            }
          }
        }
      }
    }
  }
}
`;

export const GET_PRODUCT_QUERY = `
query GetProduct($slug: String!) {
  products(filters: {slug: {eq: $slug}}) {
    data {
      id
      attributes {
        title
        description
        price
        slug
        image {
          data {
            attributes {
              formats
            }
          }
        }
      }
    }
  }
}
`;