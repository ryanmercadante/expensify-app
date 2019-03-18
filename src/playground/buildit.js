let visibility = false

const toggleDetails = () => {
  visibility = !visibility
  render()
}

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleDetails}>
        {visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {visibility && (
        <div>
          <p>Hey these are some details</p>
        </div>
      )}
    </div>
  )
  ReactDOM.render(template, document.getElementById('app'))
}

render()