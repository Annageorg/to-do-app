import React from 'react';
import Nav from 'react-bootstrap/Nav'

class Link extends React.Component {

  render() {
    return (
      <>
        <Nav.Item>
          <Nav.Link eventKey={this.props.filter} onClick={() => this.props.onclick(this.props.filter)} disabled={this.props.active}>
            {this.props.filter}
          </Nav.Link>
        </Nav.Item>
      </>
    );
  }
}

export default Link;