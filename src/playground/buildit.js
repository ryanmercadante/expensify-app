class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.toggleVisibility = this.toggleVisibility.bind(this)

    this.state = {
      visibility: false
    }
  }
  toggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render() {
    const { visibility } = this.state
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>
          {visibility ? 'Hide details' : 'Show details'}
        </button>
        {visibility && (
          <div>
            <p>Hey these are some details</p>
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))