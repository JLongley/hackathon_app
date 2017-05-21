import React from 'react'
import { connect } from 'react-redux'
import Article from './Article'
import { accept } from '../actions'
import {Loading} from './Loading'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      accept: true,
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
    this.reject();
  }

  reject = () => {
    let articles = this.state.articles;
    articles.shift();
    this.setState({
      articles: articles,
      accept: false
    });
  }

  onAccept = (e) => {
    e.preventDefault()
    this.accept();
  }

  accept = () => {
    this.props.onAccept(this.state.articles[0])
    let articles = this.state.articles;
    articles.shift();
    this.setState({
      articles: articles,
      accept: true
    });
  }

  onKeydown = (e) => {
    console.log('keypress', e.key)
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault()
        return this.reject();
      case 'ArrowRight':
        e.preventDefault()
        return this.accept();
      default:
        return;
    }
  }

  render() {
    let articles;

    if (this.state.articles.length) {
      articles = this.state.articles.map((article, index) =>
        <Article key={article.id} index={index} {...article}></Article>)
    }
    return (
      <div>
        {this.props.selectedCustomer &&
        <div>
            <div onKeyPress={this.onKeyPress}>
              <button type="button" onClick={this.onReject} className="tinderButton no">
                <span className="glyphicon glyphicon-remove" aria-hidden="true"> </span>
              </button>
              <button type="button" onClick={this.onAccept} className="tinderButton yes pull-right">
                <span className="glyphicon glyphicon-ok" aria-hidden="true"> </span>
              </button>
            </div>
            <hr/>
          {this.state.loading && <Loading/> ||
            <div>
            {this.state.articles.length &&
              <div>
              <ReactCSSTransitionGroup
                transitionName={this.state.accept ? "accept" : "reject"}
                transitionLeaveTimeout={300}>
                {articles}
              </ReactCSSTransitionGroup>
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