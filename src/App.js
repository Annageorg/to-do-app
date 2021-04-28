import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Add from './Add'
import Links from './Links'
import VisibleItems from './VisibleItems'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listItems: []
    }
  }

  updateListItems(id, description, completed) {
    const listItem = { id, description, completed }
    this.setState((state) => ({
      listItems: state.listItems.concat(listItem),
      nextId: id
    }), () => localStorage.setItem("list", JSON.stringify(this.state.listItems)))
  }

  onClick(id) {
    const newState = this.state.listItems.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed
        return item
      }
      return item
    })
    this.setState({ newState }, () => localStorage.setItem("list", JSON.stringify(this.state.listItems)))
  }

  onRemove(itemId) {
    const newState = this.state.listItems.filter((_, id) => id !== itemId)
    this.setState({ listItems: newState }, () => 
    localStorage.setItem("list", JSON.stringify(this.state.listItems))
    )
  }

  linkClick(filter) {
    console.log(filter)
    const listItems = JSON.parse(localStorage.getItem("list"));
    let newState = []
    switch (filter) {
      case "Purchased":
        newState = listItems.filter((item) => item.completed === true)
        this.setState({listItems: newState})
      break;
      case "To purchase":
        newState = listItems.filter((item) => item.completed === false)
        this.setState({listItems: newState})
      break;
      default:
        this.setState({listItems})
      break;
    }
  }

  componentDidMount() {
    const listItems = localStorage.getItem("list");
    this.setState(
      { listItems: JSON.parse(listItems) || [] }
    )
  }

  render() {
    return (
      <>
        <Navbar bg="info" variant="dark">
          <Navbar.Brand>
            React Shopping List
          </Navbar.Brand>
        </Navbar>
        <Container>
          <Add onsubmit={(id, description, completed) => this.updateListItems(id, description, completed)} />
          <Links onclick={(filter) => this.linkClick(filter)} />
          <VisibleItems items={this.state.listItems} onItemClick={(id) => this.onClick(id)} removeClick={(id) => this.onRemove(id)} />
        </Container>
      </>
    );
  }
}

export default App;
