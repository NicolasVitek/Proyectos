using Domain.Entities;

namespace Application.Interface
{
    public interface IProductCarCommand
    {
        public Task InsertProductCar(CarritoProducto productCar);

        public Task UpdateProductCar(CarritoProducto productCar);
        public Task DeletedProductCar(CarritoProducto productCar);
    }
}
