using Application.Exceptions;
using Application.Interface;
using Application.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace TP1_REST_Vitek_Nicolas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdenController : ControllerBase
    {
        private readonly IOrderService _service;

        public OrdenController(IOrderService service)
        {
            _service = service;
        }

        [HttpPost("{clientId}")]
        public async Task<IActionResult> CreateOrder(int clientId)
        {
            try
            {
                var result = await _service.CreateOrder(clientId);
                return new JsonResult(result) { StatusCode = 201 };
            }
            catch (DbUpdateException)
            {
                return BadRequest("Ese cliente no tiene un carrito ingresado");
            }

        }
        [HttpGet]
        public async Task<IActionResult> ShowBalance([FromQuery]DateTime from, [FromQuery] DateTime to)
        {
            try
            {
                if (from==to)
                {
                    throw new WrongDate();
                }
                var result = await _service.ShowBalance(from, to);
                return new JsonResult(result);
            }
            catch (WrongDate ex)
            {
                return BadRequest(ex.message);
            }
        }
    }
}
