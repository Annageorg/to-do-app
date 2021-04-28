import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'
import { addItem } from './actions'

class Add extends React.Component {

  render() {
    let input
    return (
      <>
        <Card className="mb-5 mt-2">
          <Card.Body>
            <Form
              onSubmit={(e) => {
                e.preventDefault()
                if (!input.value.trim()) {
                  return
                }
                this.props.dispatch(addItem(input.value, this.props.store.getState().items.length))
                input.value = ''
              }}
            >
              <input ref={node => {
                input = node
              }}
              />
              <Button className="ml-5" type="submit">Add Item </Button>
            </Form>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default connect() (Add);
