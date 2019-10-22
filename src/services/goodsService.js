import axios from 'axios'
const URL = process.env.REACT_APP_API_URL

export const goodsService = {
  goods: [],
  basketGoods: sessionStorage.getItem('basket')
    ? JSON.parse(sessionStorage.getItem('basket'))
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
    this.basketGoods = this.basketGoods.concat([good])
    sessionStorage.setItem('basket', JSON.stringify(this.basketGoods))
  },

  removeFromBasket(index) {
    this.basketGoods = this.basketGoods.filter((item, i) => i !== index)
    sessionStorage.setItem('basket', JSON.stringify(this.basketGoods))
  },

  get totalSum() {
    return this.basketGoods.reduce((total, { price }) => (total += price), 0)
  },
}
