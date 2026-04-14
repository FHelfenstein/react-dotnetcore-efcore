using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProAtividade.Domain.Entities
{
    public class Atividade
    {
        public int Id { get; set; }
        public string Titulo { get; set; } = default!;
        public string Descricao { get; set; } = default!;
        public DateTime DataCriacao { get; set; } = default!;
        public DateTime? DataConclusao { get; set; }
        
        public Prioridade Prioridade { get; set; } = default!;

        public Atividade()
        {
            DataCriacao = DateTime.Now;
            DataConclusao = null;
        } 
            
        
        public Atividade(int id, string titulo, string descricao) : this()
        {
            Id = id;
            Titulo = titulo;
            Descricao = descricao;
        }

        public void Concluir()
        {
            if(DataConclusao == null)
            {
                DataConclusao = DateTime.Now;
            } else
            {
                throw new InvalidOperationException($"Atividade já concluída em: {DataConclusao?.ToString("dd/MM/yyyy hh:mm")}");
            }
        }
    }
}