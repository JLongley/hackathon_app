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
      customer: customer
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


const accept = (article) => {
  return (dispatch) => {
    dispatch({
      type: 'ARTICLE_ACCEPTED',
      article: article
    });
  }
}

export {creating, created, accept, selectCustomer}
