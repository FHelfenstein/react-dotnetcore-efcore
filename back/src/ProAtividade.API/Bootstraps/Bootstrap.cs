

using System.Reflection;
using Microsoft.OpenApi.Models;
using ProAtividade.API.Extensions;

namespace ProAtividade.API.Bootstraps;

public static class Bootstrap
{
    public static WebApplicationBuilder AddApiServices(this WebApplicationBuilder builder)
    {                        
        ConfigureSwagger(builder);
        
        return builder;    
    }

    public static WebApplication UseApiPipeline(this WebApplication app)
    {
        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            
            app.MapOpenApi();

            // Forçar abrir o swagger , mesmo que o mesmo esteja configurado no arquivo lauchSettings.json
            var url = "https://localhost:7036/swagger";
            System.Diagnostics.Process.Start(new System.Diagnostics.ProcessStartInfo
            {
                FileName = url,
                UseShellExecute = true
            });
            
            app.UseSwagger();
            app.UseSwaggerUI();            
        }

        app.AtividadesEndpoints();
        
        app.UseHttpsRedirection();              
                
        return app;
    }  

    private static void ConfigureSwagger(WebApplicationBuilder builder)
    {
        builder.Services.AddOpenApi();

        builder.Services.AddEndpointsApiExplorer();

        builder.Services.AddSwaggerGen(c =>
        {
            c.SwaggerDoc("v1", new OpenApiInfo { Title = "ProAtividade.API", Version = "v1"});
        });
    }       
}