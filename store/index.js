const sleep = sec => new Promise(r => setTimeout(r, sec));

const pizzaSizes = [
  {
    id: 1,
    type: "sizeSmall",
    name: "25см",
    price: 40
  },
  {
    id: 2,
    type: "sizeMedium",
    name: "30см",
    price: 50
  },
  {
    id: 3,
    type: "sizeLarge",
    name: "35см",
    price: 60
  }
];

const pizzasDoughs = [
  {
    id: 1,
    type: "doughThin",
    name: "Тонкое",
    price: 40
  },
  {
    id: 2,
    type: "doughFat",
    name: "Толстое",
    price: 50
  }
];

const pizzas = [
  {
    id: 1,
    name: "Пеперони",
    price: 310,
    imgUrl: "peperoni.jpg",
    recepi:
      'Пицца-соус, шампиньоны, сладкий перец, красный лук, маслины, цыпленок,колбаски "Пепперони", сыр "Моцарелла"',
    likes: 20
  },
  {
    id: 2,
    name: "Мясная",
    price: 330,
    imgUrl: "masnaia.jpg",
    recepi:
      'Пицца-соус, колбаски "Пепперони", говядина, ветчина, бекон, Сыр "Моцарелла"',
    likes: 35
  },
  {
    id: 3,
    name: "Гавайская",
    price: 300,
    imgUrl: "gavai.jpg",
    recepi: 'Пицца-соус, ананас, ветчина, сыр "Моцарелла"',
    likes: 83
  },
  {
    id: 4,
    name: "Средиземная",
    price: 350,
    imgUrl: "sredizemn.jpg",
    recepi:
      'Пицца-соус томаты, шампиньоны, сладкий перец, красный лук, орегано, сыр "Фета", Маслины, сыр "Моцарелла"',
    likes: 83
  },
  {
    id: 5,
    name: "Техас",
    price: 360,
    imgUrl: "texas.jpg",
    recepi:
      'Пицца-соус, томаты, сладкий перец, красный лук, острые перчики Халапеньо, говядина, Сыр "Моцарелла"',
    likes: 76
  },
  {
    id: 6,
    name: "Четыре сезона",
    price: 390,
    imgUrl: "four-seasons.jpg",
    recepi:
      'Пицца-соус, ананасы, креветка, цыпленок, колбаски "Пепперони", ветчина, сыр "Моцарелла"',
    likes: 98
  },
];

export const state = () => ({
  pizzas: [],
  pizzaSizes: [],
  pizzaDoughs: []
});

export const mutations = {
  SET_PIZZAS(state) {
    state.pizzas = pizzas;
  },
  SET_SIZES(state) {
    state.pizzaSizes = pizzaSizes;
  },
  SET_DOUGHS(state) {
    state.pizzaDoughs = pizzasDoughs;
  }
};

export const actions = {
  async getAllPizzas({ commit }) {
    try {
      await sleep(500);
      await commit("SET_PIZZAS");
    } catch (e) {
      console.log(e);
      throw new Error("Внутреняя ошибка сервера, сообщите администратору");
    }
  },
  async getPizzaSizes({ commit }) {
    try {
      await sleep(500);
      await commit("SET_SIZES");
    } catch (e) {
      console.log(e);
      throw new Error("Внутреняя ошибка сервера, сообщите администратору");
    }
  },
  async getPizzasDough({ commit }) {
    try {
      await sleep(500);
      await commit("SET_DOUGHS");
    } catch (e) {
      console.log(e);
      throw new Error("Внутреняя ошибка сервера, сообщите администратору");
    }
  }
};
