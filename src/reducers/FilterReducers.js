export const filterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "PRODUCT_LIST":
      return { productList: payload.products };

    case "SORT_BY":
      return { ...state, sortBy: payload.sortBy };
    case "RATINGS":
      return { ...state, ratings: payload.ratings };
    case "BEST_SELLERS_ONLY":
      return { ...state, bestSellerOnly: payload.bestSellerOnly };
    case "IN_STOCK":
      return { ...state, onlyInStock: payload.onlyInStock };
    case "CLEAR_FILER":
      return {
        ...state,
        onlyInStock: false,
        bestSellerOnly: false,
        sortBy: null,
        ratings: null,
      };

    default:
      throw new Error("No case Found");
  }
};
