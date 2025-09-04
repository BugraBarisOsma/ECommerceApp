using System.Net;
using System.Reflection.Metadata.Ecma335;
using ECommerceAPI.Application.Repositories;
using ECommerceAPI.Application.ViewModels.Products;
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
        //[HttpGet]
        //public async Task Get()
        //{
        //    await _productWriteRepository.AddRangeAsync(new List<Product>
        //       {
        //           new Product { Name = "Ürün 1", Price = 100, Stock = 50 },
        //           new Product { Name = "Ürün 2", Price = 200, Stock = 30 },
        //           new Product { Name = "Ürün 3", Price = 300, Stock = 40 },
        //           new Product { Name = "Ürün 4", Price = 600, Stock = 10 },
        //           new Product { Name = "Ürün 5", Price = 500, Stock = 80 }
        //       });
        //    await _productWriteRepository.SaveAsync();
        //}

        // Test amaci ile yazildi
        [HttpGet("All")]
        public async Task<IActionResult> GetProducts()
        {
            return Ok(_productReadRepository.GetAll(false).Select(p => new
            {
                p.Id,
                p.Name,
                p.Stock,
                p.Price,
                p.CreatedDate,
                p.UpdatedDate,
                p.DeletedDate
            }));   
        }
        [HttpPost]
        public async Task<IActionResult> PostProduct(ProductCreateViewModel product)
        {
            if (ModelState.IsValid)
            {

            }
            await _productWriteRepository.AddAsync(new()
            {
                Name = product.Name,
                Price = product.Price,
                Stock = product.Stock,
            });
            await _productWriteRepository.SaveAsync();
            return StatusCode((int)HttpStatusCode.Created);
        }
        [HttpPut]
        public async Task<IActionResult> PutProduct(ProductUpdateViewModel newProduct)
        {
            Product product =  await _productReadRepository.GetByIdAsync(newProduct.Id,true);
            product.Stock = newProduct.Stock;
            product.Price = newProduct.Price;
            product.Name = newProduct.Name;
            await _productWriteRepository.SaveAsync();
            return StatusCode((int)HttpStatusCode.Accepted);

        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(string id)
        {
            await _productWriteRepository.RemoveAsync(id);
            await _productWriteRepository.SaveAsync();
            return Ok();
        }
        [HttpGet("hello")]
        public IActionResult Hello() {
            return Ok("Hello");
        }


    }
}
