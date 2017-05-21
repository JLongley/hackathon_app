import React from 'react';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const tags = this.props.tags ? this.props.tags.map(tag =>(
      <span key={tag} className="label label-primary">{tag}</span>
    )) : "";

    return (
      <div>
        <h2>{this.props.title}</h2>
        <div>
          <span className="badge">Posted {this.props.date}</span>
          <div className="pull-right">
            {tags}
          </div>
        </div>
        <div className="well space-above">
          {this.props.body.split('\n').map((item, key) => {
            return <span key={key}>{item}<br/></span>
          })}
        </div>
        <hr/>
      </div>
    );
  }
}

export default Home;