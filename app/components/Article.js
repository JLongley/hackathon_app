import React from 'react';

const POLL_INTERVAL = 16000;

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const tags = this.props.tags.map(tag =>(
      <span key={tag} className="label label-primary">{tag}</span>
    ))

    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
        <div>
          <span className="badge">Posted {this.props.date}</span>
          <div className="pull-right">
            {tags}
          </div>         
        </div>
        <div className="well space-above">
          <p>{this.props.body}</p>
        </div>
        <hr/>
      </div>
    );
  }
}

export default Home;


// <div>
//   <h2>{article.title}</h2>
//   <p>{article.body}</p>
//   <div>
//     <span className="badge">Posted {article.date}</span>
//     <div className="pull-right">

//       <span className="label label-primary">{article.tags}</span>
//     </div>         
//   </div>
//   <div className="well space-above">
//     <p>{article.body}</p>
//   </div>
//   <hr/>
// </div>