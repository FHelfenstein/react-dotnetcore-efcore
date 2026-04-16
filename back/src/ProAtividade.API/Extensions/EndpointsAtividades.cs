using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProAtividade.API.EndpointsHandlers;

namespace ProAtividade.API.Extensions
{
    public static class EndpointsAtividades
    {
        public static void AtividadesEndpoints(this IEndpointRouteBuilder app)
        {
            app.MapGet("/api/atividade", AtividadesHandlers.GetAtividade).WithOpenApi();  // conceito de minimal API

            app.MapGet("/api/atividade/{id}", AtividadesHandlers.GetAtividadeById).WithOpenApi();

            app.MapPost("/api/atividade", AtividadesHandlers.Post).WithOpenApi();

            app.MapPut("/api/atividade/{id}", AtividadesHandlers.Put).WithOpenApi();

            app.MapDelete("/api/atividade/{id}", AtividadesHandlers.Delete).WithOpenApi();

        }
    }
}