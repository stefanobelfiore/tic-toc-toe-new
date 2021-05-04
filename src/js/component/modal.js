import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

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
					<Row>
						<Col xs={12} md={8}>
							.col-xs-12 .col-md-8
						</Col>
						<Col xs={6} md={4}>
							.col-xs-6 .col-md-4
						</Col>
					</Row>

					<Row>
						<Col xs={6} md={6}>
							.col-xs-6 .col-md-4
						</Col>
						<Col xs={6} md={6}>
							.col-xs-6 .col-md-4
						</Col>
					</Row>
				</Container>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export function App() {
	const [modalShow, setModalShow] = useState(false);

	return (
		<>
			<Button variant="primary" onClick={() => setModalShow(true)}>
				Launch modal npwith grid
			</Button>

			<MyModal show={modalShow} onHide={() => setModalShow(false)} />
		</>
	);
}

render(<App />);
