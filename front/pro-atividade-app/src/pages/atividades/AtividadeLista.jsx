import React from 'react'
import AtividadeItem from './AtividadeItem'

export default function AtividadeLista({atividades, pegarAtividade, handleConfirmModal}) {
  return (
      <div className="mt-3">           
        {atividades.map(atv => (
          <AtividadeItem key={atv.id}
            atv={atv}
            pegarAtividade={pegarAtividade}
            handleConfirmModal={handleConfirmModal}
          />          
        ))}                                
      </div>
  )
}
