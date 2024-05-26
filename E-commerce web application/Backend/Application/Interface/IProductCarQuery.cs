using Domain.Entities;

namespace Application.Interface
{
    public interface IProductCarQuery
    {
        public CarritoProducto GetProductCar(int clientId, int productId);
    }
}
