import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import FormEdicionEntidad from './FormEdicionEntidad';
import '../assets/css/style.css';
import type { ModalProps } from '../interfaces/ModalProps';
import type { EntidadesProps } from '../interfaces/EntidadesProps';

  // Componente funcional que recibe la lista de entidades como props
  const ListaEntidades = ({ entidades }: EntidadesProps): JSX.Element => {
    const [isModalVisible, setModalVisible] = useState<Boolean>(false);
    const [idEntidadEdit, setIdEntidadEdit] = useState<Number>(0);

    const handleOpenModal = (id:Number) => {
      setIdEntidadEdit(id);
      setModalVisible(true);
    };
  
    const handleCloseModal = () => {
      setModalVisible(false);
    };

    return (
      <div>
        <h2 className='titulo'>Entidades</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th className='celda-angosta'>*</th>
            </tr>
          </thead>
          <tbody>
            {entidades.map((item) => (
              <tr key={item.id.toString()}>
                <td>{item.id.toString()}</td>
                <td>{item.nombre}</td>
                <td>{item.proposito}</td>
                <td className='celda-angosta'><button onClick={() => handleOpenModal(item.id)}><FontAwesomeIcon icon={faPenToSquare} style={{ marginLeft: '5px' }} />Editar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        {isModalVisible && (
          <Modal onSubmit={handleCloseModal} onClose={handleCloseModal}> 
            <div className='boton'> 
              <button className="modal-close-btn" onClick={handleCloseModal}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <h2 className='title'>Entidad Nº {idEntidadEdit.toString()}</h2>
            <FormEdicionEntidad id={idEntidadEdit}/>
          </Modal>
        ) // Renderizado de modal con pequeño formulario para editar el nombre y la descripcion de la entidad.
        } 
      </div>
    );
  };
  
  const Modal = ({ children }: ModalProps): JSX.Element => {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <div className='container'>{children}</div>
        </div>
      </div>
    );
  };
  
  export default ListaEntidades;