using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProAtividade.Domain.Entities;

namespace ProAtividade.Domain.Interfaces.Services
{
    public interface IAtividadeService
    {
        Task<Atividade> AdicionarAtividadeAsync(Atividade model);
        Task<Atividade> AtualizarAtividadeAsync(Atividade model);
        Task<bool> DeletarAtividadeAsync(int atividadeId);
        Task<bool> ConcluirAtividadeAsync(Atividade model);
        Task<Atividade[]> ObterAtividadesAsync();
        Task<Atividade> ObterAtividadePorIdAsync(int atividadeId);
    }
}