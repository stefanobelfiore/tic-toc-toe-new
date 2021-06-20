import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import PropTypes from "prop-types";

function MyModal(props) {
	return (
		<Modal {...props} aria-labelledby="contained-modal-title-vcenter">
			<form>
				<Modal.Header className="show-grid bg-warning" closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						<span className="text-danger">Tic Tac Toe GAME</span>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="show-grid bg-warning">
					<Container>
						<Row>
							<Col className="text-center" md={4}>
								Player Sun
							</Col>
							<Col className="text-center" md={4}>
								VS
							</Col>
							<Col className="text-center" md={4}>
								Player Moon
							</Col>
						</Row>
					</Container>
				</Modal.Body>
				<Modal.Footer className="show-grid bg-warning d-flex justify-content-center">
					<Button variant="danger" onClick={props.onHide}>
						Go!
					</Button>
				</Modal.Footer>
			</form>
		</Modal>
	);
}

const App = () => {
	const [modalShow, setModalShow] = useState(true);

	return (
		<>
			<div className="d-flex justify-content-between">
				<h1>Pasadlo bieeeeen!!</h1>
				<Button
					variant="danger"
					onClick={() => {
						window.location.reload(false);
					}}>
					New game
				</Button>
				<h1>Que gane el mejor!</h1>
			</div>

			<MyModal show={modalShow} onHide={() => setModalShow(false)} />
		</>
	);
};

export default App;

MyModal.propTypes = {
	onHide: PropTypes.func
};

//reactDOM.renderDOM(<App />);
