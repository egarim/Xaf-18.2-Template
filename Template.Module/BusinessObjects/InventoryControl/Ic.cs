﻿using System;
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
using Template.Module.Metadata;
using Template.Module.Controllers;

namespace Template.Module.BusinessObjects.InventoryControl
{
    [DefaultClassOptions]
    [Module("InventoryControlModule")]
    [SuperSearchAttribute("Column1;Column2")]
    //[ImageName("BO_Contact")]
    //[DefaultProperty("DisplayMemberNameForLookupEditorsOfThisType")]
    //[DefaultListViewOptions(MasterDetailMode.ListViewOnly, false, NewItemRowPosition.None)]
    //[Persistent("DatabaseTableName")]
    // Specify more UI options using a declarative approach (https://documentation.devexpress.com/#eXpressAppFramework/CustomDocument112701).
    public class Ic : BaseObject
    { // Inherit from a different class to provide a custom primary key, concurrency and deletion behavior, etc. (https://documentation.devexpress.com/eXpressAppFramework/CustomDocument113146.aspx).
        public Ic(Session session)
            : base(session)
        {
        }

        public override void AfterConstruction()
        {
            base.AfterConstruction();
            // Place your initialization code here (https://documentation.devexpress.com/eXpressAppFramework/CustomDocument112834.aspx).
        }

        private string column6;
        private string column5;
        private string column4;
        private string colum3;
        private string column2;
        private string column1;

        [Size(SizeAttribute.DefaultStringMappingFieldSize)]
        public string Column1
        {
            get => column1;
            set => SetPropertyValue(nameof(Column1), ref column1, value);
        }

        [Size(SizeAttribute.DefaultStringMappingFieldSize)]
        public string Column2
        {
            get => column2;
            set => SetPropertyValue(nameof(Column2), ref column2, value);
        }

        [Size(SizeAttribute.DefaultStringMappingFieldSize)]
        public string Colum3
        {
            get => colum3;
            set => SetPropertyValue(nameof(Colum3), ref colum3, value);
        }

        [Size(SizeAttribute.DefaultStringMappingFieldSize)]
        public string Column4
        {
            get => column4;
            set => SetPropertyValue(nameof(Column4), ref column4, value);
        }

        [Size(SizeAttribute.DefaultStringMappingFieldSize)]
        public string Column5
        {
            get => column5;
            set => SetPropertyValue(nameof(Column5), ref column5, value);
        }

        [Size(SizeAttribute.DefaultStringMappingFieldSize)]
        public string Column6
        {
            get => column6;
            set => SetPropertyValue(nameof(Column6), ref column6, value);
        }
    }
}