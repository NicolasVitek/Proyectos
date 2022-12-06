using Application.Interface;
using Domain.Entities;
using Infraesctructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace Infraesctructure.Query
{
    public class ProductQuery : IProductQuery
    {
        private readonly AppDbContext _context;

        public ProductQuery(AppDbContext context)
        {
            _context = context;
        }
        public async Task<List<Producto>> GetAll(string name, bool sort)
        {
            var products = from p in _context.Producto
                           where p.Nombre == name
                           select p;
            switch (sort)
            {
                case false:
                    products = products.OrderByDescending(p => p.Precio);
                    break;
                case true:
                    products = products.OrderBy(p => p.Precio);
                    break;
            }
            return await (products.ToListAsync());
        }

        public Producto GetProduct(int id)
        {
            var product = _context.Producto
                .FirstOrDefault(p => p.ProductoId == id);
            return product;
        }
    }
}