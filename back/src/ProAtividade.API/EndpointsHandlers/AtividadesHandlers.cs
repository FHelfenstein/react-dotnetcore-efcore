using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProAtividade.API.Models;

namespace ProAtividade.API.EndpointsHandlers
{
    public static class AtividadesHandlers  
    {
        public static IEnumerable<Atividade> Atividades = new List<Atividade>()
        {
            new Atividade(1),
            new Atividade(2),
            new Atividade(3),
            new Atividade(4)
        };

        public static IEnumerable<Atividade> GetAtividade()
        {
            return Atividades;
                
        }  

        public static Atividade GetAtividadeById(int id)
        {
            return Atividades.FirstOrDefault(x => x.Id == id);
        }

        public static IEnumerable<Atividade> Post(Atividade atividade)
        {
            
            return Atividades.Append<Atividade>(atividade);
        }

        public static Atividade Put(int id, Atividade atividade)
        {
            return atividade;
        }
    }
}