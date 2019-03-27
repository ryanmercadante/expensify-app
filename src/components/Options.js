import React from 'react'
import Option from './Option'

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

export default Options