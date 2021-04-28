import React from 'react';
import Nav from 'react-bootstrap/Nav'

class Link extends React.Component {

  render() {
    return (
      <>
        <Nav.Item>
          <Nav.Link
            eventKey={this.props.children}
            onClick={this.props.onClick}
            disabled={this.props.active}>
            {this.props.children}
          </Nav.Link>
        </Nav.Item>
      </>
    );
  }
}

export default Link;