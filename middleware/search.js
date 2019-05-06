export default function ( context) {
  // context.params.id = "Changed"
  console.log("CONTEXT", context)
  console.log("CONTEXT2", context.store)
  return context.$axios.get(`https://itunes.apple.com/search?term=${context.params.id}&entity=album`)
    .then((response) => {
      console.log("DATQA", response.data.results)
      context.store.commit("add", response.data.results )
    })
}
