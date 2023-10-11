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
    const [isChecked, setIsChecked] = useState(false);
    const [timeLimit, setTimeLimit] = useState('24');

    const today = new Date();  // Obtiene la fecha actual
    const tomorrow = new Date(today);  // Crea una nueva instancia de Date con la fecha de hoy
    tomorrow.setDate(today.getDate() + 1);

    const formattedToday = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;

    const formattedTomorrow = `${tomorrow.getDate().toString().padStart(2, '0')}/${(tomorrow.getMonth() + 1).toString().padStart(2, '0')}/${tomorrow.getFullYear()}`;

    const handleTimeLimit = (e) => {
        setIsChecked(e.target.checked);
        
        if (isChecked) {
            setTimeLimit('24')
        } else {
            setTimeLimit('4')
        }
    };



    const handleFocus = (id) => {
        setFocus(id);
    };
    const handleBlur = () => {
        setFocus(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            username,
            description,
            company,
            project,
            formattedTomorrow,
            contact
        };

        fetch('http://localhost:3001/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  // Indica que estás enviando datos JSON
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
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
                        <input placeholder="Describe tu problema con pocas palabras" type="text" id="description" required value={description} onChange={e => setDescription(e.target.value)} onFocus={() => handleFocus('input2')} onBlur={handleBlur} />
                    </div>

                    <div className="companyProjectContainer"> 
                        <div id="companyContainer" className={`form-inp ${isFocused==='input3' ? "focused" : ""}`}>
                            <div className="text">Nombre de tu compañia</div>
                            <input placeholder="Nombre de tu compañia" type="text" id="company" required value={company} onChange=  {e => setCompany(e.target.value)} onFocus={() => handleFocus('input3')} onBlur={handleBlur} />
                        </div>

                        <div id="projectContainer" className="form-inp noType">
                            <div className="text">Proyecto</div>
                            <input value="01 Mantenimiento informatico" placeholder="---" type="text" id="project" required onChange={e => setProject(e.target.value)} onFocus={() => handleFocus('input4')} onBlur={handleBlur} readOnly />
                        </div>
                    </div>
                    
                    <div className="endDateContactContainer">
                        <div id="endDateContainer" className="form-inp noType">
                            <div className="text">Fecha limite de atencion</div>
                            <input alt="Este campo se autorrellenará" placeholder="---" type="text" id="endDate" required value={`${isChecked ? formattedToday : formattedTomorrow } (${timeLimit} horas)`} onFocus={() => handleFocus('input5')} onBlur={handleBlur} readOnly />
                            
                                <input
                                  type="checkbox"
                                  id="checkbox"
                                  checked={isChecked}
                                  onChange={handleTimeLimit}
                                /> <span>Es urgente tu incidencia?</span>
                            
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