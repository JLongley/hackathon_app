import React from 'react';

const POLL_INTERVAL = 16000;

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const tags = this.props.tags ? this.props.tags.map(tag =>(
      <span key={tag} className="label label-primary">{tag}</span>
    )) : "";

    const preview = this.props.body.substring(0,140) + '...';

    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{preview}</p>
        <div>
          <span className="badge">Posted {this.props.date}</span>
          <div className="pull-right">
            {tags}
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default Home;