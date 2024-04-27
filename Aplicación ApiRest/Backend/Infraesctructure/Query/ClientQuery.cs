
using Application.Interface;
using Domain.Entities;
using Infraesctructure.Persistence;

namespace Infraesctructure.Query
{
    public class ClientQuery : IClientQuery
    {
        private readonly AppDbContext _context;

        public ClientQuery(AppDbContext context)
        {
            _context = context;
        }
        public Cliente GetClient(int id)
        {
            var client = _context.Cliente
                .FirstOrDefault(c => c.ClienteId == id);
            return client;
        }
        public bool DniValidation(int dni)
        {
            List<Cliente> list;
            var query = from cl in _context.Cliente
                        where cl.DNI == dni
                        select cl;
            list = query.ToList();

            if (list.Count == 0)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
    }
}