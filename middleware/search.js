export default function ( context) {
  return context.$axios.get(`https://itunes.apple.com/search?term=${context.params.id}&entity=album`)
    .then((response) => {
      context.store.commit("add", response.data.results )
    })
}
