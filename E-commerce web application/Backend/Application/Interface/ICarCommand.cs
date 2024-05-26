using Domain.Entities;

namespace Application.Interface
{
    public interface ICarCommand
    {
        public Task InsertCar(Carrito car);

    }
}
