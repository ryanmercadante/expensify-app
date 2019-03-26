class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)

    this.state = {
      options: []
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
  
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {
      // Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  componentWillUnmount() {
    console.log('component will unmount')
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption(option) {
    this.setState((prevState) => ({ options: prevState.options.filter(item => item !== option) }))
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }))
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer'
    const { options } = this.state

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action hasOptions={options.length > 0} handlePick={this.handlePick} />
        <Options options={options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

const Header = ({ title, subtitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      { subtitle && <h2>{subtitle}</h2> }
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = ({ handlePick, hasOptions }) => {
  return (
    <div>
      <button onClick={handlePick} disabled={!hasOptions} >What should I do?</button>
    </div>
  )
}

const Options = ({ options, handleDeleteOptions, handleDeleteOption }) => {
  return (
    <div>
      <button onClick={handleDeleteOptions}>Remove All</button>
      { options.length === 0 && <p>Please add an option to get started!</p> }
      {
        options.map(option => {
          return <Option 
            key={option} 
            optionText={option} 
            handleDeleteOption={handleDeleteOption}
          />
        })
      }
    </div>
  )
}

const Option = ({ optionText, handleDeleteOption }) => {
  return (
    <div>
      {optionText}
      <button 
        onClick={e => handleDeleteOption(optionText)} 
      >
        Remove
      </button>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props) 
    this.handleAddOption = this.handleAddOption.bind(this)

    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault()
    
    let option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    
    this.setState(() => ({ error }))

    if (!error) {
      e.target.elements.option.value = ''
    }
  }
  render() {
    return (
      <div>
      { this.state.error && <p>{ this.state.error }</p> }
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option'/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))