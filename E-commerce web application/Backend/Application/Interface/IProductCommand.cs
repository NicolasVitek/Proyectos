
using Domain.Entities;

namespace Application.Interface
{
    public interface IProductCommand
    {
        public Task Delete(Producto product);
    }
}
