using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using ProAtividade.API.Data;
using ProAtividade.API.Extensions;

namespace ProAtividade.API.Bootstraps;

public static class Bootstrap
{
    public static WebApplicationBuilder AddApiServices(this WebApplicationBuilder builder)
    {                        
        ConfigureDataBase(builder);
        
        ConfigureSwagger(builder);
            
        return builder;    
    }

    public static WebApplication UseApiPipeline(this WebApplication app)
    {
        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.MapOpenApi();
                      
            app.UseSwagger();

            app.UseSwaggerUI();            
        }

        app.AtividadesEndpoints();
        
        app.UseHttpsRedirection();              
                
        return app;
    }  

    private static void ConfigureDataBase(WebApplicationBuilder builder)
    {
        var connectionStringsOptions = new ConnectionStringsOptions();
        builder.Configuration.GetSection("ConnectionStrings").Bind(connectionStringsOptions);

        var databaseConnection = connectionStringsOptions.DatabaseConnection;

        builder.Services.AddDbContext<DataContext>(options =>
            options.UseSqlServer(
                        databaseConnection,
                        y => y.UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery))
                   .UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking));
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

    private class ConnectionStringsOptions
    {
        public string? DatabaseConnection { get; set; }
    }     
}
