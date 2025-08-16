using ECommerceAPI.Application.Repositories;
using ECommerceAPI.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ECommerceAPI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductWriteRepository _productWriteRepository;
        private readonly IProductReadRepository _productReadRepository;

        public ProductsController(IProductWriteRepository productWriteRepository , IProductReadRepository productReadRepository)
        {
            _productWriteRepository = productWriteRepository;
            _productReadRepository = productReadRepository;
        }

        [HttpGet]
        public async Task Get()
        {
            await _productWriteRepository.AddRangeAsync(new List<Product>
               {
                   new Product { Name = "Ürün 1", Price = 100, Stock = 50 },
                   new Product { Name = "Ürün 2", Price = 200, Stock = 30 },
                   new Product { Name = "Ürün 3", Price = 300, Stock = 40 },
                   new Product { Name = "Ürün 4", Price = 600, Stock = 10 },
                   new Product { Name = "Ürün 5", Price = 500, Stock = 80 }
               });
            await _productWriteRepository.SaveAsync();
        }

    }
}
