using DevExpress.Data.Filtering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Template.Module.PredefinedSearch
{
    public interface IGetCriteria
    {
        CriteriaOperator GetCriteria();
    }
}