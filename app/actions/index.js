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

const selectCustomer = (customer) => {
  return (dispatch) => {
    dispatch({
      type: 'SELECT_CUSTOMER',
      customer,
    });
  }
}

export {creating, created, selectCustomer}