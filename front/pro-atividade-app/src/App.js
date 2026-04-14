import './App.css';
import {Button, Modal, ModalFooter} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';
import api from './api/atividade';
import { useTheme } from './hooks/useTheme';

function App() {
  const [showAtividadeModal, setShowAtividadeModal] = useState(false);
  const [smShowConfirmModal, setSmShowConfirmModal] = useState(false);
  
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({id:0});

  const {theme , toggleTheme} = useTheme();
 
  const handleAtividadeModal = () => setShowAtividadeModal(!showAtividadeModal)

  const handleConfirmModal = (id) => 
  {
    if(id !== 0 && id !=='undefined'){
      const atividade = atividades.filter(atv => atv.id === id)
      setAtividade(atividade[0]);
    }
    else {
      setAtividade({id: 0});
    }
    setSmShowConfirmModal(!smShowConfirmModal)
  };

  const obterAtividades = async () => {
    const response = await api.get('atividade');
    return response.data;    
  }

  const novaAtividade = () => {
    setAtividade({id: 0});
    handleAtividadeModal();
  }

  useEffect(() => {
    const getAtividades = async () => {
      const todasAtividades = await obterAtividades();
      if (todasAtividades) setAtividades(todasAtividades)
    }
    getAtividades();
  },[]);

  const addAtividade = async (ativ) => {   
    const response = await api.post('atividade', ativ);
    
    setAtividades([...atividades, { ...response.data } ]);
    handleAtividadeModal();
  }

  const atualizarAtividade = async (ativ) => {
    const response = await api.put(`atividade/${ativ.id}`, ativ);
    const {id} = response.data;
  
    setAtividades(atividades.map(item => item.id === id ? response.data : item));
    setAtividade({id: 0});
    handleAtividadeModal();
  }

  const deletarAtividade = async (id) => {
    handleConfirmModal(0);
    if (await api.delete(`atividade/${id}`)){
      const atividadesFiltradas = atividades.filter(x => x.id !== id);      
      setAtividades([...atividadesFiltradas]);
    };
  } 

  const pegarAtividade = (id) => {
      const atividade = atividades.filter(atv => atv.id === id);
      setAtividade(atividade[0]);
      handleAtividadeModal();    
  }

  const cancelarAtividade = () => {
    setAtividade({id: 0});
    handleAtividadeModal();
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-end mt-2 pb-3 border-bottom border-1">
        <h1 className='m-0 p-0'>Atividade {atividade.id !== 0 ? atividade.id : ''}</h1>
        <Button variant="outline-secondary" onClick={novaAtividade}>
           <i className='fas fa-plus align-items-center'></i>          
        </Button>                 
      </div>
      
      <AtividadeLista
        atividades={atividades}
        pegarAtividade={pegarAtividade}
        handleConfirmModal={handleConfirmModal}
      />

      <Modal show={showAtividadeModal} onHide={handleAtividadeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            Atividade {atividade.id !== 0 ? atividade.id : ''}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AtividadeForm
            addAtividade={addAtividade}
            atualizarAtividade={atualizarAtividade}
            cancelarAtividade={cancelarAtividade}
            ativSelecionada={atividade}
            atividades={atividades}
          />          
        </Modal.Body>        
      </Modal>

      <Modal 
        size='md' 
        show={smShowConfirmModal} 
        onHide={handleConfirmModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Excluindo Atividade {atividade.id !== 0 ? atividade.id : ''}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza que deseja Excluir a Atividade { atividade.id} ?
        </Modal.Body>        
        <ModalFooter className='d-flex justify-content-between'>
          <button className="btn btn-outline-success me-2" onClick={() => deletarAtividade(atividade.id)}>
            <i className='fas fa-check me-2'></i>
            Sim
          </button>
          <button className="btn btn-danger me-2" onClick={() => handleConfirmModal(0)}>
            <i className='fas fa-times me-2'></i>
            Não
          </button>
        </ModalFooter>
      </Modal>      
    </>    
  );
}

export default App;


/**
 * Exemplo de aplicação do Tema utilizando o useContext e o hook customizado aqui estamos aplicando o estilo no botão mas pode ser aplicado no container do App
 *         <button
            onClick={toggleTheme}
            style={{
              background: theme === "dark" ? "#333" : "#eee",
              color: theme === "dark" ? "#fff" : "#000"
            }}        
        >
          Tema atual: {theme}
        </button>     
 */