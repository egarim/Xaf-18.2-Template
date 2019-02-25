using System;
using System.Linq;
using System.Text;
using DevExpress.Xpo;
using DevExpress.ExpressApp;
using System.ComponentModel;
using DevExpress.ExpressApp.DC;
using DevExpress.Data.Filtering;
using DevExpress.Persistent.Base;
using System.Collections.Generic;
using DevExpress.ExpressApp.Model;
using DevExpress.Persistent.BaseImpl;
using DevExpress.Persistent.Validation;

namespace Template.Module.BusinessObjects.SuperSearch
{
    [DomainComponent, DefaultClassOptions]
    public class SearchResult
    { // Inherit from a different class to provide a custom primary key, concurrency and deletion behavior, etc. (https://documentation.devexpress.com/eXpressAppFramework/CustomDocument113146.aspx).
        public string ObjectDisplayName { get; set; }
        public string Display { get; set; }

        [Browsable(false)]
        public Type ObjectType { get; set; }

        [Browsable(false)]
        public string ObjectKey { get; set; }
    }
}