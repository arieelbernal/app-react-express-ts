import React, { useState, useEffect } from 'react';
import { Entidad } from '../interfaces/Entidad';

const FormEdicionEntidad: React.FC<{ id: Number }> = ({ id }) => {
  const [formData, setFormData] = useState<Entidad>({id: 0,
    nombre: '',
    anioFundacion: 0,
    proposito: '',
    activa: false
  });
  const[error, setError] = useState<Boolean>(false);

  useEffect(() => {
    try {
      fetch(`http://localhost:5000/api/entidades/${id}`)
    .then(results => results.json())
    .then(data => {
      setFormData(data);
    });
  } catch (e) {
      setError(true);
  }
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await sendPutRequest(formData);
      setFormData({id: 0,
        nombre: '',
        anioFundacion: 0,
        proposito: '',
        activa: false
      });
      window.location.reload();
    } catch (error) {
      console.error('Error al enviar la solicitud PUT:', error);
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label className='label'>
        Nombre:
        <input type="text" value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} className='input'/>
      </label>
      <label className='label'>
        Descripción:
        <input type="text" value={formData.proposito} onChange={(e) => setFormData({ ...formData, proposito: e.target.value })} className='input'/>
      </label>
      {/* Agrega más campos según tus datos */}
      <button className='button' type="submit">Guardar</button>
    </form>
  );
};

// Función simulada para enviar una solicitud PUT a la API
const sendPutRequest = (data: Entidad) => {
  console.log(data.id);
  console.log(data.proposito);
    fetch(`http://localhost:5000/api/entidades/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(response => response.json())
      .then((resp) => { console.log(resp);
      });
    }
export default FormEdicionEntidad;