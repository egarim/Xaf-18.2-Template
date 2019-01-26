using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Template.Module.Metadata
{
    public class ModuleAttribute:Attribute
    {
        public string ModuleId { get; set; }
        public ModuleAttribute(string ModuleId)
        {
            this.ModuleId = ModuleId;
        }
    }
}
