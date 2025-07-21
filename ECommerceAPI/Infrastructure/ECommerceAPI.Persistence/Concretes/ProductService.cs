using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ECommerceAPI.Application.Abstractions;
using ECommerceAPI.Domain.Entities;

namespace ECommerceAPI.Persistence.Concretes
{
    public class ProductService : IProductService
    {
        public List<Product> GetProducts()
        {
            List<Product> products = new List<Product>();
            products.Add(new() { Id =Guid.NewGuid(),Name="Test Product",Price=5,Stock=1}); 
            return products;
        }
    }
}
