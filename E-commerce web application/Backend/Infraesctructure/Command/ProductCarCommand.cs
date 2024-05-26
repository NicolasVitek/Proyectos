using Application.Interface;
using Domain.Entities;
using Infraesctructure.Persistence;

namespace Infraesctructure.Command
{
    public class ProductCarCommand:IProductCarCommand
    {
        private readonly AppDbContext _context;

        public ProductCarCommand(AppDbContext context)
        {
            _context = context;
        }

        public async Task DeletedProductCar(CarritoProducto productCar)
        {
            _context.Remove(productCar);
            await _context.SaveChangesAsync();
        }
        public async Task UpdateProductCar(CarritoProducto productCar)
        {
            _context.Update(productCar);
            await _context.SaveChangesAsync();
        }
        public async Task InsertProductCar(CarritoProducto productCar)
        {
            _context.Add(productCar);
            await _context.SaveChangesAsync();
        }
    }
}