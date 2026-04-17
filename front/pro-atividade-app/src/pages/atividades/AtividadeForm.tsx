import React, { useEffect, useState } from 'react'
import { AtividadeFormProps } from '@/model/atividadesProps';
import { IAtividade, Prioridade } from '../../model/atividade';

const atividadeInicial : IAtividade = {
        id: 0,
        titulo: "",
        prioridade: Prioridade.NaoDefinido,
        descricao: ""
}

const AtividadeForm: React.FC<AtividadeFormProps> = ({
        ativSelecionada, 
        atualizarAtividade, 
        addAtividade, 
        cancelarAtividade
    } : AtividadeFormProps) => { 
    const [atividade, setAtividade] = useState<IAtividade>(atividadeAtual());

    useEffect( () => {
        if(ativSelecionada.id !== 0)
            setAtividade(ativSelecionada);    
    },[ativSelecionada])
    
    const handleValue = (e: any) => {
        const {name, value} = e.target;
        setAtividade({...atividade, [name]: value, [name]: name === "prioridade" ? Number(value) : value });
    }

    function atividadeAtual() : IAtividade {
        if (ativSelecionada.id !== 0){
            return ativSelecionada;
        }
        else {
            return atividadeInicial;
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (ativSelecionada.id !== 0){
            atualizarAtividade(atividade);

        }else {
            addAtividade(atividade);
        }
        setAtividade(atividadeInicial);        
    }

    const handleCancelar = (e: any) => {
        e.preventDefault();

        cancelarAtividade()
        setAtividade(atividadeInicial);        
    }
    
    return (  
        <>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label className="form-label">
                        Título
                    </label>
                    <input 
                        name="titulo"
                        type="text" 
                        className="form-control" 
                        id="titulo" 
                        onChange={handleValue}
                        value={atividade.titulo}
                    />
                </div>                    
                <div className="col-md-6">
                    <label className="form-label">
                        Prioridade
                    </label>
                    <select 
                        name="prioridade" 
                        id="prioridade" 
                        className="form-select" 
                        onChange={handleValue} 
                        value={atividade.prioridade}
                    >
                        <option defaultValue={0}>Selecione...</option>
                        <option value={1}>Baixa</option>
                        <option value={2}>Normal</option>
                        <option value={3}>Alta</option>
                    </select>
                </div>        
                <div className="col-md-12">
                    <label className="form-label">
                        Descrição
                    </label>
                    <textarea 
                        name="descricao"
                        className="form-control" 
                        id="descricao" 
                        onChange={handleValue}
                        value={atividade.descricao}
                    />
                    <hr/> 
                </div>   
                <div className="col-12 mt-0">
                    {
                        (atividade.id === 0 ? (
                            <button className="btn btn-outline-success me-2" type='submit'>
                                <i className='fas fa-plus me-2'></i>
                                Salvar
                            </button>
                        ) : 
                        (
                            <>
                                <button className="btn btn-outline-success me-2" type='submit' >
                                    <i className='fas fa-plus me-2'></i>
                                    Salvar
                                </button> 

                                <button 
                                    className="btn btn-outline-warning" onClick={handleCancelar} >
                                    <i className='fas fa-plus me-2'></i>
                                    Cancelar
                                </button> 
                            </>
                        ))
                    }
                </div>                    
            </form>            
        </>  
    )
}

export default AtividadeForm;