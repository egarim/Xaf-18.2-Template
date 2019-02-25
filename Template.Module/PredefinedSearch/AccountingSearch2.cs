using DevExpress.Data.Filtering;
using DevExpress.ExpressApp.DC;
using DevExpress.Persistent.BaseImpl;
using DevExpress.Xpo;
using System;
using System.Linq;

namespace Template.Module.PredefinedSearch
{
    [DomainComponent]
    public class AccountingSearch2 : BaseObject, IGetCriteria
    {
        public AccountingSearch2()
        {
        }

        public AccountingSearch2(Session session) : base(session)
        {
        }

        public string FromColumn1 { get; set; }
        public string ToColumn1 { get; set; }

        public CriteriaOperator GetCriteria()
        {
            return CriteriaOperator.Parse($"Column1 >='{FromColumn1}' AND Column1<='{ToColumn1}'");
        }
    }
}