using Domain.Entities;

namespace Application.Interface
{
    public interface IProductQuery
    {
        public Producto GetProduct(int id);
        public Task<List<Producto>> GetAll(string name, bool sort);
    }
}
