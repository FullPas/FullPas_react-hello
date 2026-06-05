import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Props from "./Props";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Modal from "./Modal";

//create your first component.
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div>
				<Modal>
					<div className="card p-5 shadow text-center">
						<h3 className="mb-3">Tarjeta</h3>
						<p>Pulsa el botón.</p>
						<button className="btn btn-primary" onClick={() => setOpened(true)}>Abrir</button>
					</div>
				</Modal>
				<Modal />
				<Modal />
				<Modal />
				<Modal />
				<Modal />
				<Modal />
				<Modal />
			</div>
			<Card />
			<Props nombre="Juan" apellido="Perez" edad={25} />
			
			<Props>
				<h5 className="card-title">Usamos la propiedad props.children en props.jsx</h5>
			</Props>
		</div>
	);
};

export default Home;