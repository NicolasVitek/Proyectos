using Application.Exceptions;
using Application.Interface;
using Application.Models;
using Microsoft.AspNetCore.Mvc;
using System.Web.Http.Cors;

namespace TP1_REST_Vitek_Nicolas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors(origins: "http://localhost:5500", headers: "*", methods: "*")]
    public class ClienteController : ControllerBase
    {
        private readonly IClientService _service;

        public ClienteController(IClientService service)
        {
            _service = service;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAll(int id)
        {
            try
            {
                var result = await _service.GetAll(id);
                return new JsonResult(result);
            }
            catch(NullReferenceException)
            {
                return BadRequest("El cliente con ese Id no existe");
            }
        }
        [HttpPost, ActionName("Crear cliente")]
        public async Task<IActionResult> CreateClient(CreateClientRequest request)
        {
            try
            {
                if (request.dni > 99999999 || request.dni < 1000000)
                {
                    throw new WrongDni();
                }
                if (_service.DniValidation(request.dni))
                {
                    throw new DuplicateDni();
                }
                var result = await _service.CreateClient(request);

                return new JsonResult(result) { StatusCode = 201 };
            }
            catch (WrongDni ex)
            {
                return BadRequest(ex.message);
            }
            catch(DuplicateDni ex)
            {
                return BadRequest(ex.message);
            }
        }
    }
}