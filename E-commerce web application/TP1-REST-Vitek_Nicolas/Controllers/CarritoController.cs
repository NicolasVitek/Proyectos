using Application.Interface;
using Application.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace TP1_REST_Vitek_Nicolas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarritoController : ControllerBase
    {
        private readonly ICarService _service;

        public CarritoController(ICarService service)
        {
            _service = service;
        }
        [HttpDelete("{clientId}/{productId}")]
        public async Task<IActionResult> DeletedProductCar(int clientId, int productId)
        {
            var result = await _service.DeleteProductCar(clientId, productId);
            return new JsonResult(result);
        }
        [HttpPatch]
        public async Task<IActionResult> UpdateProductCar(ProductCarRequest request)
        {
            var result = await _service.UpdateProductCar(request);
            return new JsonResult(result);
        }
        [HttpPost]
        public async Task<IActionResult> CreateProductCar(ProductCarRequest request)
        {
            var result = await _service.CreateProductCar(request);
            return new JsonResult(result);
        }
    }
}