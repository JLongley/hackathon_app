import React from 'react';
import { connect } from 'react-redux'
import {creating, selectCustomer} from '../actions'
import axios from 'axios'

class Customers extends React.Component {

  constructor(props) {
    super(props)
    this.state ={customers:props.customers}
  }

  onCreateCustomer = (e) => {
    e.preventDefault()
    this.props.onCreateCustomer()
  }

  loadCustomer= () => {
    const setState = this.setState;
    axios.get('/api/customers')
      .then((response) => {
        this.setState({customers: response.data})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.customers != this.props.customers) {
      const customers = [...this.state.customers, ...nextProps.customers]
      this.setState({customers})
    }
  }

  componentDidMount() {
    this.loadCustomer();
  }

  onCustomerClick = () => {

  }

  render() {
    const customers = this.state.customers.map((customer) =>
      <a onClick={(e) => {e.preventDefault(); this.props.onSelectCustomer(customer)}} key={customer.id} className="list-group-item">
        <h4 className="list-group-item-heading">{customer.name}</h4>
        <p className="list-group-item-text">...</p>
      </a>
    );

    return (
    <div>
      <div className="panel">
        <div className="list-group">
          {customers}
        </div>
      </div>
      <a onClick={this.onCreateCustomer}>Create customer</a>
    </div>)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateCustomer: () => {
      dispatch(creating())
    },
    onSelectCustomer: (customer) => {
      dispatch(selectCustomer(customer))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    customers: state.customer.customers || []
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
