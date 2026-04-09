using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProAtividade.API.Data;
using ProAtividade.API.Models;

namespace ProAtividade.API.EndpointsHandlers
{
    public static class AtividadesHandlers  
    {
             
        public static IEnumerable<Atividade> GetAtividade(DataContext context)
        {
            return  context.Atividades;
                
        }  

        public static Atividade GetAtividadeById(int id, DataContext context)
        {
            return context.Atividades.FirstOrDefault(x => x.Id == id);
        }

        public static IEnumerable<Atividade> Post(Atividade atividade, DataContext context)
        {
            
            context.Atividades.Add(atividade);
            
            if (context.SaveChanges() > 0 )
                return context.Atividades;
            else
                throw new Exception("Você não conseguiu adicionar uma atividade.");    
        }

        public static Atividade Put(int id, Atividade atividade, DataContext context)
        {
            if (atividade.Id != id) throw new Exception("Você está tentando atualizar a atividade errada.");
            
            context.Update(atividade);

            if (context.SaveChanges() > 0 )
                return context.Atividades.FirstOrDefault(x => x.Id == id) ;
            else
                return new Atividade();
        }

        public static bool Delete(int id, DataContext context)
        {
            var atividade = context.Atividades.FirstOrDefault(x => x.Id == id) ;
            if (atividade == null)
            {
                throw new Exception("Você está tentando eliminar uma atividade que não existe.");
            }
            
            context.Remove(atividade);

            return  context.SaveChanges() > 0;                        
        }
    }
}