import React, { useState, useEffect } from "react";
import './IndexComponent.css'


const IndexComponent = () => {
    const [isFocused, setFocus] = useState(false)
    const [description, setDescription] = useState('');
    const [company, setCompany] = useState('');
    const [project, setProject] = useState(''); // aqui se debe hacer mediante una tabla relacionada mysql y relacionar el nombre de la empresa y el proyecto que tienen contratado, esta el cliente no debe tener opcion de cambiar se pone automatico al tu establecer el nombre de la empresa
    const [endDate, setEndDate] = useState(''); // esto se debe poner automaticamente al dia laborable siguiente de cuando se crea el ticket
    const [contact, setContact] = useState('');
    const [username, setUsername] = useState('');



    const handleFocus = (id) => {
        setFocus(id);
    };
    const handleBlur = () => {
        setFocus(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();


    };

    return (
        <div id="ticketContainer">
            <form id="ticketForm" action="submit">

                <div className="tittleTicket"><h1>TICKETS SICTEMAS</h1></div>
                
                <div id="inputArea">
                    
                    <div id="usernameContainer" className={`form-inp ${isFocused==='input1' ? "focused" : ""}`}>
                    <div className="text">Nombre y apellidos</div>
                        <input placeholder="Nombre" type="text" id="username" required value={username} onChange={e => setUsername(e.target.value)} onFocus={() => handleFocus('input1')} onBlur={handleBlur} />
                    </div>

                    <div id="descriptionContainer" className={`form-inp ${isFocused==='input2' ? "focused" : ""}`}>
                    <div className="text">Descripcion de la incidencia</div>
                        <input placeholder="Descripcion de la incidencia" type="text" id="description" required value={description} onChange={e => setDescription(e.target.value)} onFocus={() => handleFocus('input2')} onBlur={handleBlur} />
                    </div>

                    

                    <div className="companyProjectContainer"> 
                        <div id="companyContainer" className={`form-inp ${isFocused==='input3' ? "focused" : ""}`}>
                            <div className="text">Nombre de tu compañia</div>
                            <input placeholder="Nombre de tu compañia" type="text" id="company" required value={company} onChange=  {e => setCompany(e.target.value)} onFocus={() => handleFocus('input3')} onBlur={handleBlur} />
                        </div>

                        <div id="projectContainer" className="form-inp">
                            <div className="text">Proyecto</div>
                            <input placeholder="" type="text" id="project" required value={project} onChange={e => setProject(e.    target.value)} onFocus={() => handleFocus('input4')} onBlur={handleBlur} readOnly />
                        </div>
                    </div>
                    
                    <div className="endDateContactContainer">
                        <div id="endDateContainer" className="form-inp">
                            <div className="text">Plazo de atencion</div>
                            <input placeholder="" type="text" id="endDate" required value={endDate} onChange={e => setEndDate(e.target.value)} onFocus={() => handleFocus('input5')} onBlur={handleBlur} readOnly />
                        </div>

                        <div id="contactContainer" className={`form-inp ${isFocused==='input6' ? "focused" : ""}`}>
                            <div className="text">Telefono de contacto</div>
                            <input placeholder="Descripcion de la incidencia" type="text" id="contact" required value={contact} onChange={e => setContact(e.target.value)} onFocus={() => handleFocus('input6')} onBlur={handleBlur} />
                        </div>
                    </div>
                </div>
                <div id="submitButtonLogin">
                    <button id="submitButtonTicket" type="submit" onClick={handleSubmit}>Enviar</button>
                </div>

            </form>
            </div>
    );
};

export default IndexComponent;