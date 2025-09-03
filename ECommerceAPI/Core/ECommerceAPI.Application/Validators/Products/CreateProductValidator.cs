using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ECommerceAPI.Application.ViewModels.Products;

using FluentValidation;

namespace ECommerceAPI.Application.Validators.Products
{
    public class CreateProductValidator : AbstractValidator<ProductCreateViewModel>
    {
        public CreateProductValidator()
        {
            RuleFor(p => p.Name)
                .NotEmpty()
                .WithMessage("Name cannot be empty")
                .MaximumLength(150)
                .MinimumLength(3)
                .WithMessage("Product name can be at least 3 , max 150 character length");

            RuleFor(s => s.Stock)
                .NotEmpty()
                .WithMessage("Stock cannot be empty")
                .Must(s => s >= 0)
                .WithMessage("Stock must be bigger than 0");

            RuleFor(p => p.Price)
                .NotEmpty()
                .WithMessage("Price cannot be empty")
                .Must(p => p >= 0)
                .WithMessage("Price must be bigger than 0");



        }
    }
}
