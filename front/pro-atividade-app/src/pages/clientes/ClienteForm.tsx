import React from 'react'
import TitlePage from '../../components/TitlePage'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'

 const ClienteForm : React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <>
      <TitlePage title={"Cliente Detalhe: " + (id !== undefined ? id : " ")}>
        <Button variant='outline-secondary' onClick={() => navigate("/cliente/lista")}>
          <i className="fas fa-undo-alt me-2"></i>
          Voltar
        </Button>
      </TitlePage>      
      <div><hr /></div>
    </>
  )
}

export default ClienteForm;
