using ProAtividade.Domain.Entities;
using ProAtividade.Domain.Interfaces.Services;

namespace ProAtividade.API.EndpointsHandlers
{
    public static class AtividadesHandlers  
    {
           
        public static async Task<IResult> GetAtividade(IAtividadeService _atividadeService)
        {
            try
            {
                var atividades =  await _atividadeService.ObterAtividadesAsync();
                if(atividades == null) return Results.NoContent();

                return Results.Ok(atividades);
                
            }
            catch (Exception)
            {                
                return Results.StatusCode(StatusCodes.Status500InternalServerError);
            }                                      
        }  

        public static async Task<IResult> GetAtividadeById(int id,IAtividadeService _atividadeService )
        {
            try
            {
                var atividade =  await _atividadeService.ObterAtividadePorIdAsync(id);
                if(atividade == null) return Results.NoContent();

                return Results.Ok(atividade);
                
            }
            catch (Exception)
            {               
                return Results.StatusCode(StatusCodes.Status500InternalServerError);
            }    
        }

        public static async Task<IResult> Post(Atividade model, IAtividadeService _atividadeService)
        {
            try
            {
                var atividade = await _atividadeService.AdicionarAtividadeAsync(model);
                if(atividade == null) return Results.NoContent();

                return Results.Ok(atividade);
            }
            catch (Exception)
            {                
                return Results.StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        public static async Task<IResult> Put(int id, Atividade model,IAtividadeService _atividadeService )
        {
            try
            {
                if(model.Id != id)
                {
                    Results.StatusCode(StatusCodes.Status409Conflict);
                }

                var atividade = await _atividadeService.AtualizarAtividadeAsync(model);
                if(atividade == null) return Results.NoContent();

                return Results.Ok(atividade);
                
            }
            catch (Exception)
            {                
                return Results.StatusCode(StatusCodes.Status500InternalServerError);
            }                                 
        }

        public static async Task<IResult> Delete(int id,IAtividadeService _atividadeService)
        {
            try
            {
                var atividade = await _atividadeService.ObterAtividadePorIdAsync(id);
                if(atividade == null) return Results.StatusCode(StatusCodes.Status422UnprocessableEntity);

                if(await _atividadeService.DeletarAtividadeAsync(id))
                {
                    return Results.Ok(new { message = "Atividade eliminada com sucesso."});
                } else
                {
                    return Results.BadRequest("Ocorreu um problema não específico ao tentar deletar a atividade");
                }                
            }
            catch (Exception)
            {                
                return Results.StatusCode(StatusCodes.Status500InternalServerError);
            }                                       
        }
    }
}