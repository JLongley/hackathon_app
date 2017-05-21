import React from 'react';
import { connect } from 'react-redux'
import Article from './Article'
import Customers from './Customers'

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
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


    const articles = this.state.articles.map((article) =>
      <Article key={article.id} {...article}></Article>
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
