using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProAtividade.Domain.Entities;
using ProAtividade.Domain.Interfaces.Repositories;
using ProAtividade.Domain.Interfaces.Services;

namespace ProAtividade.Domain.Services
{
    public class AtividadeService : IAtividadeService
    {
        
        private readonly IAtividadeRepo _atividadeRepo;
                
        public AtividadeService(IAtividadeRepo atividadeRepo)
        {
            _atividadeRepo = atividadeRepo;                    
        }

        public async Task<Atividade> AdicionarAtividadeAsync(Atividade model)
        {
            if(await _atividadeRepo.obterAtividadePorTituloAsync(model.Titulo) != null)
            {
                throw new Exception("Já existe uma atividade com esse título.");
            }

            if (await _atividadeRepo.obterAtividadePorIdAsync(model.Id) == null)
            {
                _atividadeRepo.Adicionar(model);
                if (await _atividadeRepo.SalvarMudancasAsync()){
                    return model;
                }
            }

            return new Atividade();
        }

        public async Task<Atividade> AtualizarAtividadeAsync(Atividade model)
        {
            if(model.DataConclusao != null)
            {
                throw new Exception("Não se pode alterar atividade já concluída.");
            }

            if(await _atividadeRepo.obterAtividadePorIdAsync(model.Id) != null)
            {
                _atividadeRepo.Atualizar(model);
                if(await _atividadeRepo.SalvarMudancasAsync())
                {
                    return model;
                }
            }

            return new Atividade();
        }

        public async Task<bool> ConcluirAtividadeAsync(Atividade model)
        {
            if(model != null)
            {
                model.Concluir();
                _atividadeRepo.Atualizar<Atividade>(model);
                return await _atividadeRepo.SalvarMudancasAsync();
            }

            return false;
        }

        public async Task<bool> DeletarAtividadeAsync(int atividadeId)
        {
            var atividade = await _atividadeRepo.obterAtividadePorIdAsync(atividadeId);
            if (atividade == null) throw new Exception("Atividade que tentou eliminar não existe.");

            _atividadeRepo.Deletar(atividade);
            return await _atividadeRepo.SalvarMudancasAsync();
        }

        public async Task<Atividade> ObterAtividadePorIdAsync(int atividadeId)
        {
            try
            {
               var atividade = await _atividadeRepo.obterAtividadePorIdAsync(atividadeId);
               if(atividade == null) return new Atividade();

               return atividade;
                
            }
            catch (Exception ex)
            {
                
                throw new Exception(ex.Message);
            }
        }

        public async Task<Atividade[]> ObterAtividadesAsync()
        {
            try
            {
                var atividades = await _atividadeRepo.obterAtividadesAsync();
                if (atividades == null) return [];

                return atividades;
            }
            catch (Exception ex)
            {
                
                throw new Exception(ex.Message);
            }
        }
    }
}