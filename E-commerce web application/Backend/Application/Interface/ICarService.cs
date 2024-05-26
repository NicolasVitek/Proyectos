using Application.Models;
using Application.Response;
using Domain.Entities;

namespace Application.Interface
{
    public interface ICarService
    {
        Task<CarritoProducto> CreateProductCar(ProductCarRequest request);
        Task<CarritoProducto> UpdateProductCar(ProductCarRequest request);
        public Task<CarritoProducto> DeleteProductCar(int clientId, int productId);
    }
}
