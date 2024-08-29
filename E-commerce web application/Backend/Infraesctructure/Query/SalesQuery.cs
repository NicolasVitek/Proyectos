
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
        //                        NameClient = cl.FirstName,
        //                        LastNameClient = cl.LastName,
        //                        FirstNameProduct = p.Name,
        //                        PriceProduct = p.Price,
        //                        AmountProduct = cp.Amount,
        //                        DateOrder = o.Date,
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
        //        text = text + "El cliente " + data.NameClient + " " + data.LastNameClient + " compro " + data.AmountProduct + " unidad/es de " + data.NameProduct + " (Id: " + data.ProductId + ")" + " a $" + data.PriceProduct + " el dia " + data.DateOrder + "\n";
        //    }
        //    return text;
        //}
    }
}
