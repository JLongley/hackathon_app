import React from 'react';
import { connect } from 'react-redux'
import {created} from '../actions'
import axios from 'axios'


class CreateCustomer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {name: '', tag: '', tags: []}
  }

  onCreateCustomer = (e) => {
    e.preventDefault()
    this.props.onCreateCustomer()
  }

  onUpdateName = (e) => {
    this.setState({name: e.target.value})
  }

  updateTag = (e) => {
    this.setState({tag: e.target.value})
  }

  addTags = () => {
    const tags = [...this.state.tags]
    tags.push(this.state.tag)
    this.setState({tag: '', tags})
  }

  createCustomer = () => {
    const customer = {
      name: this.state.name,
      tags: this.state.tags
    }
    const onCreateCustomer = this.props.onCreateCustomer
    axios.post('/api/customers', customer)
      .then(function (response) {
        onCreateCustomer(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const tags = this.state.tags ? this.state.tags.map(tag =>(
      <span key={tag} className="label label-primary">{tag}</span>
    )) : "";

    return (
      <form>
        <div className="form-group">
          <label>Name</label>
          <input onChange={this.onUpdateName} type="text" className="form-control" name="name" placeholder="Name" />
        </div>
        <div className="form-group">
          <label>Tags</label>
          <div className="row">
            <div className="col-xs-8">
              <input onChange={this.updateTag} type="text" className="form-control" name="name" value={this.state.tag} placeholder="Tag" />
              <div className="pull-left">
                {tags}
              </div>
            </div>
            <div className="col-xs-4">
              <button onClick={this.addTags} type="button" className="btn btn-success btn-lg pull-right">Add Tag</button>
            </div>
          </div>
        </div>
        <div className="form-group">
          <button onClick={this.createCustomer} type="button" className="btn btn-primary btn-lg">Create</button>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateCustomer: (customer) => {
      dispatch(created(customer))
    }
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCustomer);
