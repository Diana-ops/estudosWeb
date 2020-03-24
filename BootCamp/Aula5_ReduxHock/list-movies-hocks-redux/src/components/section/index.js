import React from 'react'
import imgFundo from '../../assets/section-white.jpg' 
import './style.css'

export function Section() { 

	return (
		<div className="section">
			<img className="img" src={imgFundo} alt="Imagem de Fundo para a Section"/>		
		</div>
	);

}