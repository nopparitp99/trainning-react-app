import React,{ Component } from 'react'
import logo from '../logo.svg'
import '../assets/css/App.css'
import Counter from '../components/Counter'
import DummyComponent from '../components/FunctionalComponent'
import Hook from '../components/Hook'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
			number: 0
		}
  }
  
  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  increase = _ => {
    this.setState({ number: this.state.number + 1 })
  }

  decrease = _ => {
    this.setState({ number: this.state.number - 1 })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Counter number={ this.state.number } />
          
          <DummyComponent number={ this.state.number }/>
          <div>
          <button onClick={ _ => this.increase() }>+</button>
          <button onClick={ _ => this.decrease() }>-</button>
          </div>

          <div>
            <Hook />
          </div>
        
        </header>
      </div>
    ); 
  }
}

export default App;
