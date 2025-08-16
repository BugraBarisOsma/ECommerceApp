using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ECommerceAPI.Application.Repositories;
using ECommerceAPI.Domain.Entities;
using ECommerceAPI.Persistence.Contexts;

//ayni sekilde burada da namespaceden Customer ismini sildik 
namespace ECommerceAPI.Persistence.Repositories
{
    // burada her iki repositoryde kullanmamizin sebebi su ; her seferinde entitylerin kendi repositorylerini (burada ICustomerReadRepository) kullanirsak 
    // bu cok buyuk is yogunlugu olusturur ve bagimlilik saglar. Bunu kullanmamizin amaci IReadRepositorynin kullaniminin dogrulugunu saglamak
    // ozetle ReadRepository'yi kullaniyor , ICustomerReadRepository bunun dogrulugunu bir nevi sagliyoruz.
    public class CustomerReadRepository : ReadRepository<Customer>, ICustomerReadRepository
    {
        public CustomerReadRepository(ECommerceAPIDbContext context) : base(context)
        {
        }
    }
}
