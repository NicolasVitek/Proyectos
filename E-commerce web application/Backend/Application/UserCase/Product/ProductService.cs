using Application.Interface;
using Application.Response;

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
                Id = p.ProductId,
                Name =p.Name,
                Brand=p.Brand,
                Code=p.Code,
                Price=p.Price,
                Image=p.Image,
                Description=p.Description
                
            });
        }
        public Task<ProductResponse> GetProduct(int id)
        {
            var product = _query.GetProduct(id);
            return Task.FromResult(new ProductResponse
            {
                Id=product.ProductId,
                Name=product.Name,
                Brand=product.Brand,
                Price=product.Price,
                Code=product.Code,
                Image=product.Image,
                Description=product.Description
            });
        }
    }
}