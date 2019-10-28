export const authService = {
  isAuth: false,

  logIn(userId) {
    this.isAuth = true
    localStorage.setItem('userId', userId)
  },

  logOut() {
    this.isAuth = false
    localStorage.removeItem('userId')
  },
}
