const initState = {
  products: [
    {
      id: 1,
      title: "POCO M3 Phone",
      price: 344,
      qty: 1,
      details:
        "Completely negotiate just in time web services rather than installed base content. Continually simplify mission-critical markets",
      image: 'poco-m3.jpg',
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
      price: 232,
      qty: 1,
      details:
        "Completely negotiate just in time web services rather than installed base content. Continually simplify mission-critical markets",
      image: "xiaomi-poco-m3-0.jpg",
    },
  ],
  product: {}
};
const ProductReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default ProductReducer;