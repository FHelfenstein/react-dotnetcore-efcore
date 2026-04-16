import React from 'react'

function prioridadeLabel(param){
    switch(param){
      case 1:
        return "Baixa";
      case 2:
        return "Normal";
      case 3:
        return "Alta";
      default:
        return "Não definido"                ;
    }
  }

  function prioridadeStyle(param, icone){
    switch(param){
      case 1:
        return icone ? "smile" : "success";
      case 2:
        return icone ? "meh" : "dark";
      case 3:
        return icone ? "frown" : "warning";
      default:
        return "Não definido"                ;
    }
  }

export default function AtividadeItem({atv, pegarAtividade, handleConfirmModal}) {
  return (
    <div className={"card mb-2 shadow-sm border-" + prioridadeStyle(atv.prioridade)} >            
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <h5 className="card-title">
                    <span className="badge bg-secondary me-1">{atv.id}</span> - {atv.titulo}                  
                </h5>
                <h6>
                    Prioridade:       
                    <span className={'ms-1 text-'+ prioridadeStyle(atv.prioridade)}>
                      <i className={"me-1 far fa-" + prioridadeStyle(atv.prioridade,true)}></i>
                      {prioridadeLabel(atv.prioridade)}
                    </span>                              
                </h6>
            </div>
            <p className="card-text">
                {atv.descricao}
            </p>
            <div className="d-flex justify-content-end pt-2 m-0 border-top">
                <button className="btn btn-outline-primary me-2 btn-sm" onClick={ () => pegarAtividade(atv.id)} >
                    <i className='fas fa-pen me-2'></i>
                    Editar
                </button>
                <button className="btn btn-outline-danger btn-sm" onClick={ () => handleConfirmModal(atv.id)}>
                    <i className='fas fa-trash me-2'></i>
                    Deletar
                </button>
            </div>
        </div>
    </div>
  )
}
