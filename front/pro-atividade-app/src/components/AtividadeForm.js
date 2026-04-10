import { useEffect, useState } from 'react'

const atividadeInicial = {
    id: 0,
    titulo: "",
    prioridade: 0,
    descricao: ""
}

export default function AtividadeForm(props) {
    const [atividade, setAtividade] = useState(atividadeAtual());

    useEffect( () => {
        if(props.ativSelecionada.id !== 0)
            setAtividade(props.ativSelecionada);    
    },[props.ativSelecionada])
    
    const inputTextHandler = (e) => {
        const {name, value} = e.target;
        setAtividade({...atividade, [name]: value, [name]: name === "prioridade" ? Number(value) : value });
    }

    function atividadeAtual() {
        if (props.ativSelecionada.id !== 0){
            return props.ativSelecionada;
        }
        else {
            return atividadeInicial;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (props.ativSelecionada.id !== 0){
            props.atualizarAtividade(atividade);

        }else {
            props.addAtividade(atividade);
        }
        setAtividade(atividadeInicial);        
    }

    const handleCancelar = (e) => {
        e.preventDefault();

        props.cancelarAtividade()
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
                        onChange={inputTextHandler}
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
                        onChange={inputTextHandler} 
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
                        type="text" 
                        className="form-control" 
                        id="descricao" 
                        onChange={inputTextHandler}
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
