
using Application.Interface;
using Application.Response;
using Domain.Entities;

namespace Application.UserCase.Product
{
    public class ProductService : IProductService
    {
        private readonly IProductQuery _query;

        public ProductService(IProductQuery query)
        {
            _query = query;
        }

        public async Task<IEnumerable<ProductResponse>> GetAll(string name, bool sort)
        {
            var result = await _query.GetAll(name, sort);
            return result.Select(p=> new ProductResponse
            {
                Id = p.ProductoId,
                Nombre =p.Nombre,
                Marca=p.Marca,
                Codigo=p.Codigo,
                Precio=p.Precio,
                Image=p.Image
            });
        }
        public Task<ProductResponse> GetProduct(int id)
        {
            var product = _query.GetProduct(id);
            return Task.FromResult(new ProductResponse
            {
                Id=product.ProductoId,
                Nombre=product.Nombre,
                Marca=product.Marca,
                Precio=product.Precio,
                Codigo=product.Codigo,
                Image=product.Image
            });
        }
    }
}