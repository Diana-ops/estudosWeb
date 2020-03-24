import React,  { useState }  from 'react';
import { FireOutlined } from '@ant-design/icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

/*Mostrando os melhores filmes*/
function BestMovies(props) {

	const { movies } = props

	/*Para a construção da tela extra*/
	const { className } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

	return(
		<>
			<div className="button-description">
               	<Button color="danger" onClick={toggle} >See the best movies</Button>
                                        
                <Modal isOpen={modal} toggle={toggle} className={className}>
                
                	<ModalHeader toggle={toggle}>Movies with better score </ModalHeader>
	                    <ModalBody>
					        <div className="betsMovies">
				            		{ 
				              			movies.map(itemJson => {

				                			if(itemJson.rt_score > 94){
							                  return (
							                    <>
							                      <p>{itemJson.title} <FireOutlined /> {itemJson.rt_score}</p>
							                    </>
							                   
							                );
							              	}
							        })
				            }
				          </div>                   
	                    </ModalBody>
                    <ModalFooter>
                   		<Button color="secondary" onClick={toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>



        	
        </>
	);
}

export default BestMovies;