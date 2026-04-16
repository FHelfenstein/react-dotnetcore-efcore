import React from 'react'
import TitlePage from '../../components/TitlePage'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function ClienteForm() {
  const navigate = useNavigate();
  const {id} = useParams();

  return (
    <>
      <TitlePage title={"Cliente Detalhe: " + (id !== undefined ? id : " ")}>
        <Button variant='outline-secondary' onClick={() => navigate("/cliente/lista")}>
          <i class="fas fa-undo-alt me-2"></i>
          Voltar
        </Button>
      </TitlePage>      
      <div><hr /></div>
    </>
  )
}
