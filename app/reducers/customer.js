export default function messages(state = {}, action) {
  switch (action.type) {
    case 'LOAD_CUSTOMERS':
      return Object.assign({}, state, {
        customers: action.customers
      });
    case 'CREATING_CUSTOMER':
      return Object.assign({}, state,{
        creating: true
      });
    case 'SELECT_CUSTOMER':
      return Object.assign({}, state,{
        selected: action.customer,
        creating: false
      });
    case 'CUSTOMER_CREATED':
      return Object.assign({}, state,{
        creating: false,
        customers: [...state.customers, {name: action.customer.name, id: action.customer._id, tags: action.customer.tags}]
      });
    default:
      return state;
  }
}
