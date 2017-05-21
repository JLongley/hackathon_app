import React from 'react';
import { connect } from 'react-redux'


class Customers extends React.Component {


  onCreateCustomer = (e) => {
    e.preventDefault()
  }

  render() {
    const customers = this.props.customers.map((customer) =>
      <a href="#" key={customer} className="list-group-item">
        <h4 className="list-group-item-heading">{customer}</h4>
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

const mapStateToProps = (state) => {
  return {
    customers: ["Trump", "Bill Clinton"]
  };
};

export default connect(mapStateToProps)(Customers);
