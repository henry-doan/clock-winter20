import { Component } from 'react';
import Clock from './components/clocks/Clock';

class App extends Component {
  state = { showClock: false }

  toggleClock = () => {
    const { showClock } = this.state
    this.setState({ showClock: !showClock })
  }

  render() {
    const { showClock } = this.state
    return(
      <>
        { showClock && <Clock /> }
        <button onClick={this.toggleClock}>
          Toggle Clock
        </button>
      </>
    )
  }
}

export default App;
