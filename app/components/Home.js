import React from 'react';
import { connect } from 'react-redux'
import Customers from './Customers'
import Feed from './Feed'


class Home extends React.Component {

  render() {
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
                <div></div>
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
                
                <h4>Headline of an interesting article</h4>
                <p>This is a description of an article that I decided was relevant</p>
                <hr/>
                <h4>Headline of another interesting article</h4>
                <p>This is a description of an article that I decided was relevant</p>
                <hr/>
                <h4>Headline of a third article</h4>
                <p>This is a description of an article that I decided was relevant</p>
                <hr/>

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
    creatingCustomer: state.customer.creating
  };
};

export default connect(mapStateToProps)(Home);
