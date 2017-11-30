import React from 'react';
import GuessPeg from './../GuessPeg/GuessPeg';
import './GuessPegs.css';

const GuessPegs = (props) => {
  return (
    <div className="GuessPegs">
      <GuessPeg position={"0"} color={props.colors[props.code[0]]} currentGuess={props.currentGuess} handlePegClick={props.handlePegClick} />
      <GuessPeg position={"1"} color={props.colors[props.code[1]]} currentGuess={props.currentGuess} handlePegClick={props.handlePegClick} />
      <GuessPeg position={"2"} color={props.colors[props.code[2]]} currentGuess={props.currentGuess} handlePegClick={props.handlePegClick} />
      <GuessPeg position={"3"} color={props.colors[props.code[3]]} currentGuess={props.currentGuess} handlePegClick={props.handlePegClick} />
    </div>
  );
}

export default GuessPegs;