import './App.css';
import { useEffect, useState } from 'react';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';
import api from './api/atividade';

function App() {
  const [index, setIndex] = useState(0);
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({id:0});

  const obterAtividades = () => {
    const response = api.get('atividade')

    
  }

  useEffect(() => {
    

  },[atividades]);

  function addAtividade(ativ){
    /*
    const atividade = {
      id: Math.max.apply(Math, atividades.map(item => item.id)) + 1,
      prioridade: document.getElementById('prioridade').value,
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value,
    }
    */    
    //atividades.push(atividade);    
    setAtividades([...atividades, { ...ativ, id: index } ]);
  }

  function atualizarAtividade(ativ){
    setAtividades(atividades.map(item => item.id === ativ.id ? ativ : item));
    setAtividade({id: 0});
  }

  function deletarAtividade(id){
    const atividadesFiltradas = atividades.filter(atv => atv.id !== id);
    setAtividades([...atividadesFiltradas]);
  } 

  function pegarAtividade(id){
      const atividade = atividades.filter(atv => atv.id === id);
      setAtividade(atividade[0]);
  }

  function cancelarAtividade(){
    setAtividade({id: 0});
  }

  return (
    <>
      <AtividadeForm
        addAtividade={addAtividade}
        atualizarAtividade={atualizarAtividade}
        cancelarAtividade={cancelarAtividade}
        ativSelecionada={atividade}
        atividades={atividades}
      />
      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        pegarAtividade={pegarAtividade}
      />
    </>    
  );
}

export default App;
