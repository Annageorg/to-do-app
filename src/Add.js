import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Add extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      description: "",
      completed: false
    }
  }

  submitHandler(event) {
    event.preventDefault();
    let newId = this.state.id +1
    this.props.onsubmit(this.state.id, this.state.description, this.state.completed);
    this.setState({
      id: newId,
      description: "",
      completed: false
    })
  }

  //sets decription value in state when input changes
  handleChange(event) {
    this.setState({description: event.target.value});
  }



  render() {
    return (
      <>
        <Card className="mb-5 mt-2">
          <Card.Body>
            <Form onSubmit={(e) => this.submitHandler(e)} >
            <input type="text" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)}/>
            <Button className="ml-5" type="submit">Add Item </Button>
            </Form>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Add;
