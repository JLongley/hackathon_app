import React from 'react';
import { connect } from 'react-redux'
import Customers from './Customers'
import Feed from './Feed'
import CreateCustomer from './CreateCustomer'


class Home extends React.Component {

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
                <h1>Trump Stories</h1>
                <hr/>
                
                {feed}

                <button type="button" className="btn btn-primary btn-lg">
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
    feed: state.feed
  };
};

export default connect(mapStateToProps)(Home);
