
using Application.Interface;
using Infraesctructure.Persistence;

namespace Infraesctructure.Query
{
    public class CarQuery : ICarQuery
    {
        private readonly AppDbContext _context;

        public CarQuery(AppDbContext context)
        {
            _context = context;
        }

        public Guid GetCarId(int clientId)
        {
            var query = from c in _context.Carrito
                        where c.ClienteId == clientId && c.Estado == true
                        select c.CarritoId;
            var list = query.ToList();
            return list.First();
        }
    }
}
