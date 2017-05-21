import React from 'react';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  toggle = () => { 
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    const firstElement = this.props.index === 0;
    const previewSize = firstElement ? 500 : 140;
    const preview = <p className="space-above">{this.props.summary.substring(0,previewSize) + '...'}</p>

    const full = <div className="well space-above">
      {this.props.body.split('\n').map((item, key) => {
        return <span key={key}>{item}<br/></span>
      })}
    </div>

    const content = this.state.expanded ? full : preview;

    const tags = this.props.tags ? this.props.tags.map(tag =>(
      <span key={tag} className="label label-info tag">{tag}</span>
    )) : "";

    const className = firstElement ? 'firstElement' : '';
    return (
      <div>
        <div className={className} >
          {firstElement &&
          <h1 className="hover-link" onClick={this.toggle}><u className="ul">{this.props.title}</u></h1>
          ||
          <h4 className="hover-link" onClick={this.toggle}>{this.props.title}</h4>
          }
          <div>
            <span className="badge">Posted {this.props.date}</span>
            <div className="pull-right">
              {tags}
            </div>
          </div>
          {content}
        </div>
        <hr/>
        {firstElement && <br />}
      </div>
    );
  }
}

export default Article;