import React from 'react'
import AtividadeItem from './AtividadeItem'
import { AtividadeListaProps } from '@/model/atividadesProps'

const  AtividadeLista: React.FC<AtividadeListaProps> = ({atividades, pegarAtividade, handleConfirmModal} : AtividadeListaProps) => {
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

export default AtividadeLista;
