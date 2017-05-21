import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import Article from './Article'

const POLL_INTERVAL = 16000;

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      customers: ["Trump", "Bill Clinton"]
    }
  }

  loadArticlesFromServer() {
    $.ajax({
      url: '/api/articles',
      dataType: 'json',
      success: function(articles) {
        // if(articles)
        articles[0].expanded = true;
        this.setState({articles: articles});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  componentDidMount() {
    this.loadArticlesFromServer();
    // setInterval(this.loadArticlesFromServer, POLL_INTERVAL);
  }

  render() {
    const customers = this.state.customers.map((customer) =>
      <a href="#" key={customer} className="list-group-item">
        <h4 className="list-group-item-heading">{customer}</h4>
        <p className="list-group-item-text">...</p>
      </a>
    );

    const articles = this.state.articles.map((article) =>
      <Article key={article.id} {...article}></Article>
    )

    return (
      <div className="container-fluid">
        <Messages messages={this.props.messages} />
        <div className="row">



        <div className="col-sm-2">
          <div className="panel">
            <div className="list-group">
              {customers}
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
                {articles}
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
