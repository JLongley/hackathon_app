import React from 'react';
import { connect } from 'react-redux'
import Customers from './Customers'
import Feed from './Feed'
import CreateCustomer from './CreateCustomer'


class Home extends React.Component {

  export() {
    var csvContent = "data:text/csv;charset=utf-8,";
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "topSecret.pdf");
    document.body.appendChild(link); // Required for FF

    link.click();
  }

  render() {
    const feed = this.props.feed.map((article) =>
      <div key={article.title}>
        <h4>{article.title}</h4>
        <hr />
      </div>
    )

    return (
      <div className="container-fluid">
        <div className="row">
        <div className="col-sm-2">
          <Customers />
        </div>

        <div className="col-sm-10 row">
          <div className="col-sm-8">
            <div className="panel">
              <div className="panel-body">
                {this.props.creatingCustomer &&
                  <CreateCustomer />
                  ||
                  <Feed />
                }
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="panel">
              <div className="panel-body">
                <h1>{this.props.customerName && this.props.customerName + "'s Stories"}</h1>
                <hr/>
                
                {feed}

                <button type="button" className="btn btn-primary btn-lg" onClick={this.export}>
                  <span className="glyphicon glyphicon-floppy-save" aria-hidden="true"></span> Export
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    creatingCustomer: state.customer.creating,
    feed: state.feed,
    customerName: state.customer.selected && state.customer.selected.name || ''
  };
};

export default connect(mapStateToProps)(Home);
