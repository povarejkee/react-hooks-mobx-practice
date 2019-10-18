import axios from 'axios'
const URL = process.env.REACT_APP_API_URL

export const goodsService = {
  goods: [],
  loading: false,

  getGoods() {
    this.loading = true
    axios.get(`${URL}/goods`).then(({ data }) => {
      this.goods = data
      this.loading = false
    })
  },
}
