import React from 'react'
import Modal from 'react-modal'

const OptionModal = ({ selectedOption, handleDeleteSelectedOption }) => (
  <Modal
    isOpen={!!selectedOption}
    onRequestClose={handleDeleteSelectedOption}
    contentLabel='Selected Option'
  >
    <h3>Selected Option</h3>
    {selectedOption && <p>{selectedOption}</p>}
    <button onClick={handleDeleteSelectedOption}>Okay</button>
  </Modal>
)

export default OptionModal