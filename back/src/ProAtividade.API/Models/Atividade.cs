using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProAtividade.API.Models
{
    public class Atividade
    {
        public int Id { get; set; }
        public string Titulo { get; set; } = default!;
        public string Descricao { get; set; } = default!;
        public string Prioridade { get; set; } = default!;

        public Atividade() {}

        public Atividade(int id)
        {
            Id = id;
        }
    }
}