import axios from 'axios'
const URL = process.env.REACT_APP_API_URL

export const goodsService = {
  goods: [],
  basketGoods: localStorage.getItem('basket')
    ? JSON.parse(localStorage.getItem('basket'))
    : [],
  loading: false,

  getGoods() {
    this.loading = true
    axios.get(`${URL}/goods`).then(({ data }) => {
      this.goods = data
      this.loading = false
    })
  },

  addToBasket(good) {
    this.basketGoods.push(good)
    localStorage.setItem('basket', JSON.stringify(this.basketGoods))
  },
}
