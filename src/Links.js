import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Link from './Link'

class Links extends React.Component {

  render() {
    return (
      <>
       <Nav variant="tabs" defaultActiveKey="All">
        <Link onclick={(filter) => this.props.onclick(filter)} filter="All">All</Link>
        <Link onclick={(filter) => this.props.onclick(filter)} filter="To purchase">To Purchase</Link>
        <Link onclick={(filter) => this.props.onclick(filter)} filter="Purchased">Purchased</Link>
      </Nav>
      </>
    );
  }
}

export default Links;