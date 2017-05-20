import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Messages messages={this.props.messages}/>
        <div className="row">



        <div className="col-sm-2">
          <div className="panel">
            <div className="list-group">
              <a href="#" className="list-group-item active">
                <h4 className="list-group-item-heading">Trump</h4>
                <p className="list-group-item-text">...</p>
              </a>
              <a href="#" className="list-group-item">
                <h4 className="list-group-item-heading">Other guy</h4>
                <p className="list-group-item-text">...</p>
              </a>
              <a href="#" className="list-group-item">
                <h4 className="list-group-item-heading">Scuba Steve</h4>
                <p className="list-group-item-text">...</p>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-10 row">

          <div className="col-sm-8">
            <div className="panel">
              <div className="panel-body">

                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search for tags..."/>
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Go!</button>
                  </span>
                </div>

                <div>
                  <span className="label label-default">bombs</span>
                  <span className="label label-info">boring</span>
                  <span className="label label-primary">terrorism</span>
                  <span className="label label-success">kittens</span>
                </div> 

                <div className="space-above">
                  <button type="button" className="btn btn-danger btn-lg">
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"> </span> Accept
                  </button>
                  <button type="button" className="btn btn-success btn-lg pull-right">
                    <span className="glyphicon glyphicon-ok" aria-hidden="true"> </span> Reject
                  </button>
                </div>
                <hr/>
                
                <div>
                  <h2>Story 1 Headline</h2>
                  <p>Here's a basic description of what happened in the first news article. Some great stuff happened and everyone had an all around good time.</p>
                  <div>
                    <span className="badge">Posted 2012-08-02 20:47:04</span>
                    <div className="pull-right">
                      <span className="label label-default">bombs</span>
                      <span className="label label-info">boring</span>
                      <span className="label label-primary">terrorism</span>
                      <span className="label label-success">kittens</span>
                    </div>         
                  </div>
                  <div className="well space-above">
                    <p>Since I am the story in focus, I am going to throw in a few paragraph summary of the article so that you can get a better guess if you want to keep it or not. Lorem Ipsum etc.</p>
                    <p>Here's the second sentence in the summary.  Since I am the story in focus, I am going to throw in a few paragraph summary of the article so that you can get a better guess if you want to keep it or not. Lorem Ipsum etc.</p>
                  </div>
                  <hr/>
                </div>
                <div>
                  <h2>Story 2 Headline</h2>
                  <p>Here's a basic description of what happened in the first news article. Some great stuff happened and everyone had an all around good time.</p>
                  <div>
                    <span className="badge">Posted 2012-08-02 20:47:04</span>
                    <div className="pull-right">
                      <span className="label label-default">bombs</span>
                      <span className="label label-info">boring</span>
                      <span className="label label-warning">terrorism</span>
                      <span className="label label-success">kittens</span>
                    </div>         
                  </div>
                  <hr/>
                </div>
                <div>
                  <h2>Story 3 Headline</h2>
                  <p>Here's a basic description of what happened in the first news article. Some great stuff happened and everyone had an all around good time.</p>
                  <div>
                    <span className="badge">Posted 2012-08-02 20:47:04</span>
                    <div className="pull-right">
                      <span className="label label-default">bombs</span>
                      <span className="label label-danger">boring</span>
                      <span className="label label-primary">terrorism</span>
                      <span className="label label-success">kittens</span>
                    </div>         
                  </div>
                  <hr/>
                </div>

                <div>
                  <h2>Story 4 Headline</h2>
                  <p>Here's a basic description of what happened in the first news article. Some great stuff happened and everyone had an all around good time.</p>
                  <div>
                    <span className="badge">Posted 2012-08-02 20:47:04</span>
                    <div className="pull-right">
                      <span className="label label-default">bombs</span>
                      <span className="label label-danger">boring</span>
                      <span className="label label-primary">terrorism</span>
                      <span className="label label-success">kittens</span>
                    </div>         
                  </div>
                </div>

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
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Home);
