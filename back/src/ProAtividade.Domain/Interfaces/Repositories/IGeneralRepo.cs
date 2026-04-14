using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProAtividade.Domain.Interfaces.Repositories
{
    public interface IGeneralRepo
    {
        void Adicionar<T>(T entity) where T: class;
        void Atualizar<T>(T entity) where T: class;
        void Deletar<T>(T entity) where T: class;
        void DeletarVarias<T>(T[] entity) where T: class;   // exemplo caso desejar deletar várias o mesmo vale para atualizar várias e adicionar várias
        Task<bool> SalvarMudancasAsync();
    }
}