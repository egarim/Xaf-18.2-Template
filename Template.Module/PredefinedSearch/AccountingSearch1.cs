using DevExpress.Data.Filtering;
using DevExpress.ExpressApp.DC;
using DevExpress.Persistent.BaseImpl;
using DevExpress.Xpo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Template.Module.PredefinedSearch
{
    [DomainComponent]
    public class AccountingSearch1 : BaseObject, IGetCriteria
    {
        public AccountingSearch1()
        {
        }

        public AccountingSearch1(Session session) : base(session)
        {
        }

        public string FromColumn2 { get; set; }
        public string ToColumn2 { get; set; }

        public CriteriaOperator GetCriteria()
        {
            return CriteriaOperator.Parse($"Column1 >='{FromColumn2}' AND Column1<='{ToColumn2}'");
        }
    }
}