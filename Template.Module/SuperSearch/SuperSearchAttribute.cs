using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Template.Module.Controllers
{
    public class SuperSearchAttribute : Attribute
    {
        public string DisplayProperties { get; set; }

        public SuperSearchAttribute(string displayProperties)
        {
            DisplayProperties = displayProperties;
        }
    }
}