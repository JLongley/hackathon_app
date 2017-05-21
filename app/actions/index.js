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

const accept = (article) => {
  return (dispatch) => {
    dispatch({
      type: 'ARTICLE_ACCEPTED',
      article: article
    });
  }
}

export {creating, created, accept}