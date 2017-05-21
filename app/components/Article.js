import React from 'react';

class Home extends React.Component {
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
    const preview = <p className="space-above">{this.props.body.substring(0,140) + '...'}</p>

    const full = <div className="well space-above">
      {this.props.body.split('\n').map((item, key) => {
        return <span key={key}>{item}<br/></span>
      })}
    </div>

    const content = this.state.expanded ? full : preview;

    const tags = this.props.tags ? this.props.tags.map(tag =>(
      <span key={tag} className="label label-primary">{tag}</span>
    )) : "";


    return (
      <div>
        <h2 className="hover-link" onClick={this.toggle}>{this.props.title}</h2>
        <div>
          <span className="badge">Posted {this.props.date}</span>
          <div className="pull-right">
            {tags}
          </div>
        </div>
        {content}
        <hr/>
      </div>
    );
  }
}

export default Home;