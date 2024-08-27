
using Infraesctructure.Persistence;

namespace Infraesctructure.Query
{
    public class SalesQuery
    {
        //public List<SalesData> GetList()
        //{
        //    using (var context = new AppDbContext())
        //    {
        //        var query = from cl in context.Client
        //                    join c in context.Cart on cl.ClientId equals c.ClientId
        //                    join o in context.Order on c.CartId equals o.CartId
        //                    join cp in context.ProductCart on c.CartId equals cp.CartId
        //                    join p in context.Product on cp.ProductId equals p.ProductId
        //                    select new SalesData
        //                    {
        //                        NombreClient = cl.Nombre,
        //                        ApellidoClient = cl.Apellido,
        //                        NombreProduct = p.Nombre,
        //                        PrecioProduct = p.Precio,
        //                        CantidadProduct = cp.Cantidad,
        //                        FechaOrder = o.Fecha,
        //                        ProductId = p.ProductId
        //                    };
        //        return query.ToList();
        //    }
        //}
        //public override string ToString()
        //{
        //    string text = "";
        //    foreach (SalesData data in GetList())
        //    {
        //        text = text + "El cliente " + data.NombreClient + " " + data.ApellidoClient + " compro " + data.CantidadProduct + " unidad/es de " + data.NombreProduct + " (Id: " + data.ProductId + ")" + " a $" + data.PrecioProduct + " el dia " + data.FechaOrder + "\n";
        //    }
        //    return text;
        //}
    }
}
