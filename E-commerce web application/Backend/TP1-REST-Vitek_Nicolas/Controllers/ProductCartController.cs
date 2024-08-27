using Application.Interface;
using Application.Models;
using Microsoft.AspNetCore.Mvc;

namespace TP1_REST_Vitek_Nicolas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductCartController : ControllerBase
    {
        private readonly IProductCartService _service;

        public ProductCartController(IProductCartService service)
        {
            _service = service;
        }
        /// <summary>Delete a product cart.</summary>
        /// <param name="clientId">Client ID.</param>
        /// <param name="productId">Product ID.</param>
        /// <returns>The product cart object that was deleted.</returns>
        [HttpDelete("{clientId}/{productId}")]
        public async Task<IActionResult> DeletedProductcart(int clientId, int productId)
        {
            var result = await _service.DeleteProductCart(clientId, productId);
            return new JsonResult(result);
        }
        /// <summary>Update a product cart.</summary>
        /// <returns>The product cart object that was updated.</returns>
        [HttpPatch]
        public async Task<IActionResult> UpdateProductCart(ProductCartRequest request)
        {
            var result = await _service.UpdateProductCart(request);
            return new JsonResult(result);
        }
        /// <summary>Create a product cart.</summary>
        /// <returns>The product cart object that was created.</returns>
        [HttpPost]
        public async Task<IActionResult> CreateProductcart(ProductCartRequest request)
        {
            var result = await _service.CreateProductCart(request);
            return new JsonResult(result);
        }
    }
}