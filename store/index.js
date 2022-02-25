export const state = () => ({
  searchBar: false
})

export const getters = {
  getSearchBarStatus: (state) => {
    return state.searchBar
  }
}

export const mutations = {
  changeSearchBarStatus (state, status) {
    state.searchBar = status
  }
}
