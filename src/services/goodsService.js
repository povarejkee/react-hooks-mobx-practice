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

  addToBasket(good, action) {
    const newBasketGood = { ...good, count: 1 }
    const idList = this.basketGoods.map(item => item.id)

    if (idList.includes(good.id)) {
      const updatedBasketGoods = [...this.basketGoods]
      const idx = this.basketGoods.findIndex(item => item.id === good.id)

      if (action === 'increment') {
        updatedBasketGoods[idx].count++
      } else if (action === 'decrement') {
        updatedBasketGoods[idx].count--
      }

      this.basketGoods = [...updatedBasketGoods]
    } else {
      this.basketGoods = this.basketGoods.concat([newBasketGood])
    }

    sessionStorage.setItem('basket', JSON.stringify(this.basketGoods))
  },

  removeFromBasket(id) {
    this.basketGoods = this.basketGoods.filter(item => item.id !== id)
    sessionStorage.setItem('basket', JSON.stringify(this.basketGoods))
  },

  clearBasket() {
    this.basketGoods = []
    sessionStorage.setItem('basket', JSON.stringify(this.basketGoods))
  },

  get totalSum() {
    return this.basketGoods.reduce(
      (total, { price, count }) => (total += price * count),
      0
    )
  },
}
