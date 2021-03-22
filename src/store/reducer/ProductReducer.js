const initState = {
  products: [
    {
      id: 1,
      title: "POCO M3 Phone",
      price: 344,
      qty: 1,
      details:
        "Completely negotiate just in time web services rather than installed base content. Continually simplify mission-critical markets",
      image: "poco-m3.jpg",
    },
    {
      id: 2,
      title: "MI Data Cable",
      price: 25,
      qty: 1,
      details:
        "Completely negotiate just in time web services rather than installed base content. Continually simplify mission-critical markets",
      image: "data-cable.jpeg",
    },
    {
      id: 3,
      title: "POCO X3 Pro Phone",
      price: 355,
      qty: 1,
      details:
        "Completely negotiate just in time web services rather than installed base content. Continually simplify mission-critical markets",
      image: "Poco-X3-Pro.webp",
    },
    {
      id: 4,
      title: "MI Power Bank (65000)Kw",
      price: 240,
      qty: 1,
      details:
        "Completely negotiate just in time web services rather than installed base content. Continually simplify mission-critical markets",
      image: "power-bank.webp",
    },
    {
      id: 5,
      title: "SONY Xperia Pro 5G",
      price: 260,
      qty: 1,
      details:
        "Completely negotiate just in time web services rather than installed base content. Continually simplify mission-critical markets",
      image: "sony-xperia-pro-5g.jpg",
    },
    {
      id: 6,
      title: "XIAOMI POCO M3",
      price: 332,
      qty: 1,
      details:
        "Completely negotiate just in time web services rather than installed base content. Continually simplify mission-critical markets",
      image: "xiaomi-poco-m3-0.jpg",
    },
    {
      id: 7,
      title: "VIVO Neo 5",
      price: 340,
      qty: 1,
      details:
        "Completely negotiate just in time web services rather than installed base content. Continually simplify mission-critical markets",
      image: "vivo-iqoo-neo5-1.jpg",
    },
    {
      id: 8,
      title: "XIAOMI REDMI Note 10 Pro",
      price: 532,
      qty: 1,
      details:
        "Completely negotiate just in time web services rather than installed base content. Continually simplify mission-critical markets",
      image: "xiaomi-redmi-note10-pro.jpg",
    },
    {
      id: 9,
      title: "XIAOMI REDMI Note 9 Pro Max",
      price: 372,
      qty: 1,
      details:
        "Completely negotiate just in time web services rather than installed base content. Continually simplify mission-critical markets",
      image: "xiaomi-redmi-note-9-pro-max.jpg",
    },
    {
      id: 10,
      title: "XIAOMI REDMI Note 9 5G",
      price: 237,
      qty: 1,
      details:
        "Completely negotiate just in time web services rather than installed base content. Continually simplify mission-critical markets",
      image: "Xiaomi-Redmi-Note-9-Pro-5G.webp",
    },
    {
      id: 11,
      title: "POCO C3",
      price: 399,
      qty: 1,
      details:
        "Completely negotiate just in time web services rather than installed base content. Continually simplify mission-critical markets",
      image: "xiaomi-poco-c3-1.jpg",
    },
    {
      id: 12,
      title: "POCO X3",
      price: 352,
      qty: 1,
      details:
        "Completely negotiate just in time web services rather than installed base content. Continually simplify mission-critical markets",
      image: "xiaomi-poco-x3-1.jpg",
    },
  ],
  product: {},
};
const ProductReducer = (state = initState, action) => {
    switch (action.type) {
      case "PRODUCT":
      return { ...state, product: state.products.find(product => product.id === parseInt(action.id))}
        default:
            return state;
    }
}

export default ProductReducer;