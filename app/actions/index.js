const creating = () => {
  return (dispatch) => {
    dispatch({
      type: 'CREATING_CUSTOMER'
    });
  }
}

const created = (customer) => {
  return (dispatch) => {
    dispatch({
      type: 'CUSTOMER_CREATED',
      customerId: customer._id,
      customerName: customer.name
    });
  }
}

export {creating, created}