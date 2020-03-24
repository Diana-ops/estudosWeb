import React from 'react'
import './style.css'

import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

export function Footer() { 

	return (
		<>
			<div className="footer">
					<GithubOutlined style={{ width: '40px', color:"white" }}/>
					<LinkedinOutlined style={{ width: '40px', color:"white" }} />

					<h3 className="title-4">WoMakersCode | </h3>
					<h3 className="title-5">Diana Regina - Frontend JR</h3>
			</div>
		</>
	);

}