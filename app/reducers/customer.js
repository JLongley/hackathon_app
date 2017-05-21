export default function messages(state = {}, action) {
  switch (action.type) {
    case 'LOAD_CUSTOMERS':
      return {
        customers: action.customers
      };
    case 'SELECT_CUSTOMER':
      return {
        selected: action.customer
      };
    default:
      return state;
  }
}
