import React from 'react'
import { connect } from 'react-redux'
import Article from './Article'
import ArticlePreview from './ArticlePreview'
import { accept } from '../actions'
import {Loading} from './Loading'

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false
    }
  }

  componentWillReceiveProps = (nextProps) => {
    console.log(this.props.selectedCustomer)
    if (this.props.selectedCustomer != nextProps.selectedCustomer && nextProps.selectedCustomer.id) {
      this.loadArticlesFromServer(nextProps.selectedCustomer.id)
    }
  }

  loadArticlesFromServer(customerId) {
    this.setState({loading: true})
    $.ajax({
      url: `/api/articles/${customerId}`,
      dataType: 'json',
      success: function(articles) {
        this.setState({loading: false, articles: articles});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  componentDidMount() {
    $(document.body).on('keydown', this.onKeydown);
  }

  componentWillUnMount() {
    $(document.body).off('keydown', this.onKeydown);
  }

  onReject = (e) => { 
    e.preventDefault()
    ths.reject();
  }

  reject = () => {
    let articles = this.state.articles;
    articles.shift();
    this.setState({articles: articles})
  }

  onAccept = (e) => {
    e.preventDefault()
    this.accept();
  }

  accept = () => {
    this.props.onAccept(this.state.articles[0])
    let articles = this.state.articles;
    articles.shift();
    this.setState({articles: articles})
  }

  onKeydown = (e) => {
    e.preventDefault()
    console.log('keypress', e.key)
    switch (e.key) {
      case 'ArrowLeft':
        return this.reject();
      case 'ArrowRight':
        return this.accept();
      default:
        return;
    }
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
            <div onKeyPress={this.onKeyPress}>
              <button type="button" onClick={this.onReject} className="btn btn-danger btn-lg">
                <span className="glyphicon glyphicon-remove" aria-hidden="true"> </span> Reject
              </button>
              <button type="button" onClick={this.onAccept} className="btn btn-success btn-lg pull-right">
                <span className="glyphicon glyphicon-ok" aria-hidden="true"> </span> Accept
              </button>
            </div>
            <hr/>
          {this.state.loading && <Loading/> ||
            <div>
            {this.state.articles.length &&
              <div>
                {article}
                {previews}
              </div> || <p>No articles for {this.props.selectedCustomer.name}</p>
              }
            </div>
          }
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