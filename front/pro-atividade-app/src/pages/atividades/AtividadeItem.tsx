import React from 'react';
import {Prioridade} from '../../model/atividade';
import { AtividadeItemProps } from '@/model/atividadesProps';

const AtividadeItem : React.FC<AtividadeItemProps> = ({atv, pegarAtividade, handleConfirmModal} : AtividadeItemProps) => {

  function prioridadeLabel(param: number){
    switch(param){
      case Prioridade.Baixa:
        return 'Baixa';
      case Prioridade.Normal:       
        return 'Normal';
      case Prioridade.Alta:
        return 'Alta';
      default:
        return "Não definido"                ;
    }
  }

  function prioridadeStyle(param : number, icone: boolean){
    switch(param){
      case Prioridade.Baixa:
        return icone ? "smile" : "success";
      case Prioridade.Normal:
        return icone ? "meh" : "dark";
      case Prioridade.Alta:
        return icone ? "frown" : "warning";
      default:
        return "Não definido"                ;
    }
  }
   
  return (
    <div className={"card mb-2 shadow-sm border-" + prioridadeStyle(atv.prioridade,false)} >            
        <div className="card-body">
            <div className="d-flex justify-content-between">
                <h5 className="card-title">
                    <span className="badge bg-secondary me-1">{atv.id}</span> - {atv.titulo}                  
                </h5>
                <h6>
                    Prioridade:       
                    <span className={'ms-1 text-'+ prioridadeStyle(atv.prioridade,false)}>
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

export default AtividadeItem;