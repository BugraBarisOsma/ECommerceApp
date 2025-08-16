using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ECommerceAPI.Domain.Entities;

//namespaceden Customer kismini cikardik cunku entityler ile ayni isimde oldugu icin goremiyordu
// bu islemi digerlerinde de yaptik

namespace ECommerceAPI.Application.Repositories
{
    public interface ICustomerReadRepository : IReadRepository<Customer> 
    {
    }
}
