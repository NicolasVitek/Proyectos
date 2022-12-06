using Application.Interface;
using Application.Response;
using Application.UserCase.Order;
using Infraesctructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace Infraesctructure.Query
{
    public class OrderQuery : IOrderQuery
    {
        private readonly AppDbContext _context;

        public OrderQuery(AppDbContext context)
        {
            _context = context;
        }
        public void UpdateStateCar(int clientId)
        {
            var query = from cl in _context.Cliente
                        where cl.ClienteId == clientId
                        join c in _context.Carrito on cl.ClienteId equals c.ClienteId
                        where c.Estado == true
                        select c;
            query.ToList().FirstOrDefault().Estado = false;
            _context.SaveChanges();
        }
        public OrderProductData CalculateTotal(int clientId)
        {
            Guid carId = new Guid();
            double total = 0;
            var query = from cl in _context.Cliente
                        where cl.ClienteId == clientId
                        join c in _context.Carrito on cl.ClienteId equals c.ClienteId
                        where c.Estado==false
                        join cp in _context.CarritoProducto on c.CarritoId equals cp.CarritoId
                        join p in _context.Producto on cp.ProductoId equals p.ProductoId
                        select new OrderProductData
                        {
                            price=p.Precio,
                            cant=cp.Cantidad,
                            carId=c.CarritoId
                        };
            var list = query.ToList();
            foreach (OrderProductData product in list)
            {
                total = total + (product.price * product.cant);
                carId = product.carId;
            }
            OrderProductData result = new OrderProductData
            {
                total = total,
                carId = carId
            };
            return result;
        }
        public async Task<List<DataBalanceResponse>> GetBalance(DateTime desde, DateTime hasta)
        {
            var query = from p in _context.Producto
                        join cp in _context.CarritoProducto on p.ProductoId equals cp.ProductoId
                        join c in _context.Carrito on cp.CarritoId equals c.CarritoId
                        join o in _context.Orden on c.CarritoId equals o.CarritoId
                        join cl in _context.Cliente on c.ClienteId equals cl.ClienteId
                        where o.Fecha> desde & o.Fecha<hasta
                        select new DataBalanceResponse
                        {
                            nameClient=cl.Nombre,
                            lastNameClient=cl.Apellido,
                            productName = p.Nombre,
                            cantProduct = cp.Cantidad,
                            subTotal=cp.Cantidad*p.Precio,
                            income = o.Total,
                            priceProduct=p.Precio
                        };
            return await query.ToListAsync();
        }
    }   
}   