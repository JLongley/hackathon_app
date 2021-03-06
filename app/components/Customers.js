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

  render() {
    const customers = this.state.customers.map((customer) => {
      let selected = '';
      if (this.props.selected && this.props.selected.id == customer.id) {
        selected = 'selected'
      }
      const tags = customer.tags && customer.tags.map(tag => {return (<span className="label label-primary tag">{tag}</span>)}).splice(0,2) || []
      return (<a onClick={(e) => {
        e.preventDefault();
        this.props.onSelectCustomer(customer)
      }} key={customer.id} className={`list-group-item hover-link ${selected}`}>
        <h4 className="list-group-item-heading">{customer.name}</h4>
        <p className="list-group-item-text">
          {tags}
          <span className="label label-primary tag">...</span>
        </p>
      </a>)
    });

    return (
    <div>
      <div className="panel">
        <div className="list-group">
          {customers}
          <span className="list-group-item text-center hover-link">
            <h4 className="list-group-item-heading">
              <a onClick={this.onCreateCustomer}>Create customer</a>
            </h4>
          </span>
        </div>
      </div>
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
    customers: state.customer.customers || [],
    selected: state.customer.selected
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
