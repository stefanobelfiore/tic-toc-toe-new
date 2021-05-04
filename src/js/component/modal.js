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
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Using Grid in Modal
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className="show-grid">
				<Container>
					<form action="input">
						<Row>
							<Col md={6}>
								<input
									type="text"
									placeholder="Jugador 1 (X)"></input>
							</Col>
							<Col md={6}>
								<input
									type="text"
									placeholder="Jugador 2 (O)"></input>
							</Col>
						</Row>
						<Row>
							<Col xs={6} md={6}>
								<div className="x">X</div>
							</Col>
							<Col xs={6} md={6}>
								<div className="o">O</div>
							</Col>
						</Row>
					</form>
				</Container>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

const App = () => {
	const [modalShow, setModalShow] = useState(true);

	return (
		<>
			<Button variant="primary" onClick={() => setModalShow(true)}>
				Launch modal npwith grid
			</Button>

			<MyModal show={modalShow} onHide={() => setModalShow(false)} />
		</>
	);
};

export default App;

MyModal.propTypes = {
	onHide: PropTypes.func
};

//reactDOM.renderDOM(<App />);
