using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProAtividade.Domain.Entities;

namespace ProAtividade.Domain.Interfaces.Repositories
{
    public interface IAtividadeRepo : IGeneralRepo
    {
        Task<Atividade[]> obterAtividadesAsync();
        Task<Atividade> obterAtividadePorIdAsync(int id);
        Task<Atividade> obterAtividadePorTituloAsync(string titulo);

    }
}