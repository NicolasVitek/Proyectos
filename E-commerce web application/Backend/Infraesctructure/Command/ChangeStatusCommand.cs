using Application.Interface;
using Infraesctructure.Persistence;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;

namespace Infraesctructure.Command
{
    public class ChangeStatusCommand:IChangeStatusCommand
    {
        public void SetStatus(int clienteId, bool status)
        {
            //using (var context = new AppDbContext())
            //{
            //    var carrito = context.Carrito.Where(c => c.ClienteId == clienteId).ToList(); ;
            //    carrito.ForEach(a => a.Estado = status);
            //    context.SaveChanges();
            //}
        }
    }
}
