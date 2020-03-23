import React from 'react';
import './App.css'
import Routes from "./routes";

import { connect } from 'react-redux'

export function Teste(props) { 

	const { newValue } = props

	return (
		<p style={{color:"white"}}>{newValue}</p>
	);
}

const mapStateToProps = store => ({
	newValue: store.clickState.newValue
})

export default connect(mapStateToProps)(Teste);


