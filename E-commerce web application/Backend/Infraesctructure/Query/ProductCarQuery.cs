using Application.Interface;
using Domain.Entities;
using Infraesctructure.Persistence;

namespace Infraesctructure.Query
{
    public class ProductCarQuery : IProductCarQuery
    {
        private readonly AppDbContext _context;

        public ProductCarQuery(AppDbContext context)
        {
            _context = context;
        }
        public CarritoProducto GetProductCar(int clientId, int productId)
        {
            var productCar = from c in _context.Carrito
                             where c.ClienteId == clientId
                             join cp in _context.CarritoProducto on c.CarritoId equals cp.CarritoId
                             where cp.ProductoId == productId
                             select new CarritoProducto
                             {
                                 CarritoId = cp.CarritoId,
                                 ProductoId=cp.ProductoId,
                                 Cantidad=cp.Cantidad
                             };
            var list = productCar.ToList();
            return list.First();
        }
    }
}
