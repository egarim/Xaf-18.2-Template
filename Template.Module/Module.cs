﻿using System;
using System.Text;
using System.Linq;
using DevExpress.ExpressApp;
using System.ComponentModel;
using DevExpress.ExpressApp.DC;
using System.Collections.Generic;
using DevExpress.Persistent.Base;
using DevExpress.Persistent.BaseImpl;
using DevExpress.Persistent.BaseImpl.PermissionPolicy;
using DevExpress.ExpressApp.Model;
using DevExpress.ExpressApp.Actions;
using DevExpress.ExpressApp.Editors;
using DevExpress.ExpressApp.Updating;
using DevExpress.ExpressApp.Model.Core;
using DevExpress.ExpressApp.Model.DomainLogics;
using DevExpress.ExpressApp.Model.NodeGenerators;
using DevExpress.ExpressApp.Xpo;
using Template.Module.SuperSearch;
using Template.Module.BusinessObjects.Accounting;
using Template.Module.BusinessObjects.InventoryControl;
using Template.Module.PredefinedSearch;

namespace Template.Module
{
    // For more typical usage scenarios, be sure to check out https://documentation.devexpress.com/eXpressAppFramework/clsDevExpressExpressAppModuleBasetopic.aspx.
    public sealed partial class TemplateModule : ModuleBase, IGetSuperSearchTypes, IPredefinedSearch
    {
        public TemplateModule()
        {
            InitializeComponent();
            BaseObject.OidInitializationMode = OidInitializationMode.AfterConstruction;
        }

        public override IEnumerable<ModuleUpdater> GetModuleUpdaters(IObjectSpace objectSpace, Version versionFromDB)
        {
            ModuleUpdater updater = new DatabaseUpdate.Updater(objectSpace, versionFromDB);
            return new ModuleUpdater[] { updater };
        }

        public override void Setup(XafApplication application)
        {
            base.Setup(application);
            // Manage various aspects of the application UI and behavior at the module level.
        }

        public override void CustomizeTypesInfo(ITypesInfo typesInfo)
        {
            base.CustomizeTypesInfo(typesInfo);
            CalculatedPersistentAliasHelper.CustomizeTypesInfo(typesInfo);
        }

        public List<Type> GetSupperSearchTypes()
        {
            //HACK this can be done by reflection
            List<Type> Types = new List<Type>();
            Types.Add(typeof(Accounting));
            Types.Add(typeof(Ic));
            return Types;
        }

        public List<Tuple<Type, Type>> GetPredefinedSearch()
        {
            List<Tuple<Type, Type>> PredefinedSearch = new List<Tuple<Type, Type>>();
            PredefinedSearch.Add(new Tuple<Type, Type>(typeof(Accounting), typeof(AccountingSearch1)));
            PredefinedSearch.Add(new Tuple<Type, Type>(typeof(Accounting), typeof(AccountingSearch2)));
            return PredefinedSearch;
        }
    }
}