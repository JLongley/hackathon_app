export default function feed(state = {}, action) {
  switch (action.type) {
    case 'ARTICLE_ACCEPTED':
      return [action.article, ...state]
    case 'SELECT_CUSTOMER':
      return []
    default:
      return state;
  }
}
