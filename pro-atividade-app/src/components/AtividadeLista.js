import React from 'react'
import Atividade from './Atividade'

export default function AtividadeLista(props) {
  return (
          <div className="mt-3">           
        {props.atividades.map(atv => (
          <Atividade key={atv.id}
            atv={atv}
            deletarAtividade={props.deletarAtividade}
            pegarAtividade={props.pegarAtividade}
          />          
        ))}                                
      </div>
  )
}
