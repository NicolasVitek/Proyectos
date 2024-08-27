﻿using Application.Interface;
using Application.Response;
using Application.UserCase;
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
        public void UpdateStateCart(int clientId)
        {
            var query = from cl in _context.Client
                        where cl.ClientId == clientId
                        join c in _context.Cart on cl.ClientId equals c.ClientId
                        where c.Estado == true
                        select c;
            query.ToList().FirstOrDefault().Estado = false;
            _context.SaveChanges();
        }
        public OrderProductData CalculateTotal(int clientId)
        {
            Guid carId = new Guid();
            double total = 0;
            var query = from cl in _context.Client
                        where cl.ClientId == clientId
                        join c in _context.Cart on cl.ClientId equals c.ClientId
                        where c.Estado==false
                        join cp in _context.ProductCart on c.CartId equals cp.CartId
                        join p in _context.Product on cp.ProductId equals p.ProductId
                        select new OrderProductData
                        {
                            price=p.Precio,
                            cant=cp.Cantidad,
                            carId=c.CartId
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
            var query = from p in _context.Product
                        join cp in _context.ProductCart on p.ProductId equals cp.ProductId
                        join c in _context.Cart on cp.CartId equals c.CartId
                        join o in _context.Order on c.CartId equals o.CartId
                        join cl in _context.Client on c.ClientId equals cl.ClientId
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