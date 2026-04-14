using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProAtividade.Domain.Entities;

namespace ProAtividade.Data.Mappings;

public class AtividadeMap : IEntityTypeConfiguration<Atividade>
{
    public void Configure(EntityTypeBuilder<Atividade> entity)
    {
        entity.ToTable("Atividades");

        entity.Property(x => x.Titulo)
            .HasColumnType("varchar(100)");
        
        entity.Property(x => x.Descricao)
            .HasColumnType("varchar(255)");
    }
}
