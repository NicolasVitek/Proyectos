using Application.Interface;
using Application.Response;
using Microsoft.AspNetCore.Mvc;

namespace TP1_REST_Vitek_Nicolas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        private readonly IProductService _service;

        public ProductoController(IProductService service)
        {
            _service = service;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductResponse>>> GetAll([FromQuery] string name, [FromQuery] bool sort)
        {
            var result = await _service.GetAll(name, sort);
            return new JsonResult(result);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAll(int id)
        {
            try
            {
                var result = await _service.GetProduct(id);
                return new JsonResult(result);
            }
            catch (NullReferenceException)
            {
                return BadRequest("El producto con ese Id no existe");
            }
        }
    }
}