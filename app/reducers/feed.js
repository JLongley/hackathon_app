export default function feed(state = {}, action) {
  switch (action.type) {
    case 'ARTICLE_ACCEPTED':
      return [action.article, ...state]
    default:
      return state;
  }
}
