using Application.Interface;
using Domain.Entities;
using Infraesctructure.Persistence;

namespace Infraesctructure.Command
{
    public class CarCommand:ICarCommand
    {
        private readonly AppDbContext _context;

        public CarCommand(AppDbContext context)
        {
            _context = context;
        }

        public async Task InsertCar(Carrito car)
        {
            _context.Add(car);
            await _context.SaveChangesAsync();
        }
    }
}