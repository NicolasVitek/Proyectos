using Application.Interface;
using Application.Models;
using Domain.Entities;

namespace Application.UserCase.cart
{
    public class ProductCartService: IProductCartService
    {
        private readonly IProductCartQuery _query;
        private readonly IProductCartCommand _command;
        private readonly ICartQuery _carQuery;

        public ProductCartService(IProductCartQuery query, IProductCartCommand command, ICartQuery carQuery)
        {
            _query = query;
            _command = command;
            _carQuery = carQuery;
        }
        public async Task<ProductCart> CreateProductCart(ProductCartRequest request)
        {
            Guid carId = _carQuery.GetCartId(request.clientID);
            var productCart = new ProductCart
            {
                CartId = carId,
                ProductId = request.productId,
                Cantidad = request.amount,
            };
            await _command.InsertProductCart(productCart);
            return productCart;
        }
        public async Task<ProductCart> DeleteProductCart(int clientId, int productId)
        {
            var productCart= _query.GetProductCart(clientId, productId);
            await _command.DeletedProductCart(productCart);
            return productCart;
        }

        public async Task<ProductCart> UpdateProductCart(ProductCartRequest request)
        {
            Guid carId = _carQuery.GetCartId(request.clientID);
            var productCart = new ProductCart
            {
                CartId = carId,
                ProductId = request.productId,
                Cantidad = request.amount,
            };
            await _command.UpdateProductCart(productCart);
            return productCart;
        }
    }
}