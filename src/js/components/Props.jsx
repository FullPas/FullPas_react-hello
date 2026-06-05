import React, { useState } from "react";

const Props = (props) => {

        let nom = 'James'
        let nombre = props.nombre
        let apell = props.apellido
        let estilo = {with: '20rem', backgroundColor: 'lightblue'}

        return (
            <div className="card" style={estilo}>
                <img src="https://tse3.mm.bing.net/th/id/OIP.w7qCpTb-SYPa1MBrV43NXQHaGp?rs=1&pid=ImgDetMain&o=7&rm=3" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Tarjeta de prueba de {nombre} {apell} {props.edad}</h5>{/*Aqui se ven las dos formas de usar <props></props> y props.propiedad*/}
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Quería dedicarle más tiempo</a>
                    <div>
                        {props.children}
                    </div>
                </div>
            </div>
        )
    }

export default Props