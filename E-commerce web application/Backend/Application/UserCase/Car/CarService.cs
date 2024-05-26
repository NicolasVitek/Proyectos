using Application.Interface;
using Application.Models;
using Application.Response;
using Domain.Entities;

namespace Application.UserCase.Car
{
    public class CarService: ICarService
    {
        private readonly IProductCarQuery _query;
        private readonly IProductCarCommand _command;
        private readonly ICarQuery _carQuery;

        public CarService(IProductCarQuery query, IProductCarCommand command, ICarQuery carQuery)
        {
            _query = query;
            _command = command;
            _carQuery = carQuery;
        }
        public async Task<CarritoProducto> CreateProductCar(ProductCarRequest request)
        {
            Guid carId = _carQuery.GetCarId(request.clientID);
            var productCar = new CarritoProducto
            {
                CarritoId = carId,
                ProductoId = request.productId,
                Cantidad = request.amount,
            };
            await _command.InsertProductCar(productCar);
            return productCar;
        }
        public async Task<CarritoProducto> DeleteProductCar(int clientId, int productId)
        {
            var productCar= _query.GetProductCar(clientId, productId);
            await _command.DeletedProductCar(productCar);
            return productCar;
        }

        public async Task<CarritoProducto> UpdateProductCar(ProductCarRequest request)
        {
            Guid carId = _carQuery.GetCarId(request.clientID);
            var productCar = new CarritoProducto
            {
                CarritoId = carId,
                ProductoId = request.productId,
                Cantidad = request.amount,
            };
            await _command.UpdateProductCar(productCar);
            return productCar;
        }
    }
}