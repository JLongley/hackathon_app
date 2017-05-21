import React from 'react'
import { connect } from 'react-redux'
import Article from './Article'
import ArticlePreview from './ArticlePreview'
import { accept } from '../actions'

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    }
  }

  componentWillReceiveProps = (nextProps) => {
    console.log(this.props.selectedCustomer)
    if (this.props.selectedCustomer != nextProps.selectedCustomer && nextProps.selectedCustomer.id) {
      this.loadArticlesFromServer(nextProps.selectedCustomer.id)
    }
  }

  loadArticlesFromServer(customerId) {
    $.ajax({
      url: `/api/articles/${customerId}`,
      dataType: 'json',
      success: function(articles) {
        this.setState({articles: articles});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }


  onReject = (e) => { 
    e.preventDefault()
    let articles = this.state.articles;
    articles.shift();
    this.setState({articles: articles})
  }

  onAccept = (e) => {
    e.preventDefault()
    this.props.onAccept(this.state.articles[0])
    let articles = this.state.articles;
    articles.shift();
    this.setState({articles: articles})
  }

  render() {
    let article, previews;

    if (this.state.articles.length) {
      article = <Article {...this.state.articles[0]}></Article>

      const articles = [...this.state.articles]
      articles.shift();
      previews = articles.map((article) =>
        <ArticlePreview key={article.id} {...article}></ArticlePreview>)
    }
    return (
      <div>
        {this.props.selectedCustomer &&
          <div>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for tags..."/>
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">Go!</button>
              </span>
            </div>

          <div>
            < span className="label label-default">bombs</span>
            <span className="label label-info">boring</span>
            <span className="label label-primary">terrorism</span>
            <span className="label label-success">kittens</span>
          </div>

        <div className="space-above">
          <button type="button" onClick={this.onReject} className="btn btn-danger btn-lg">
            <span className="glyphicon glyphicon-remove" aria-hidden="true"> </span> Reject
          </button>
          <button type="button" onClick={this.onAccept} className="btn btn-success btn-lg pull-right">
            <span className="glyphicon glyphicon-ok" aria-hidden="true"> </span> Accept
          </button>
          </div>
          <hr/>
          {article}
          {previews}
        </div>
        ||
        <div>Select a customer</div>
        }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAccept: (article) => {
      dispatch(accept(article))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCustomer: state.customer.selected,
    selectedArticles: state.selectedArticles
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);