export default (state, action) => {
  switch (action.type) {
    case "CREATE_PLAN":
      return {
        plan: {...state, details: action.payload},
      }
    default:
      return state
  }
}
