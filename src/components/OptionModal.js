import React from 'react'
import Modal from 'react-modal'

const OptionModal = ({ selectedOption, handleDeleteSelectedOption }) => (
  <Modal
    isOpen={!!selectedOption}
    onRequestClose={handleDeleteSelectedOption}
    contentLabel='Selected Option'
    closeTimeoutMS={200}
    className='modal'
  >
    <h3 className='modal__title'>Selected Option</h3>
    {selectedOption && <p className='modal__body'>{selectedOption}</p>}
    <button className='button' onClick={handleDeleteSelectedOption}>Okay</button>
  </Modal>
)

export default OptionModal