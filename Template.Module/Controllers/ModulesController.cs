﻿using DevExpress.ExpressApp;
using DevExpress.ExpressApp.Actions;
using DevExpress.ExpressApp.Model;
using DevExpress.ExpressApp.Security.Strategy;
using DevExpress.ExpressApp.SystemModule;
using DevExpress.Persistent.Base;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Template.Module.Metadata;

namespace Template.Module.Controllers
{
    public class ModulesController : WindowController
    {

        public ModulesController()
        {
            this.TargetWindowType = WindowType.Main;

            SimpleAction AccountingModule = new SimpleAction(this, "AccountingModule", PredefinedCategory.View);
            AccountingModule.Caption = "Accounting";
            AccountingModule.Execute += SelectedModule;

            SimpleAction InventoryControlModule = new SimpleAction(this, "InventoryControlModule", PredefinedCategory.View);
            InventoryControlModule.Caption = "Inventory Controll";
            InventoryControlModule.Execute += SelectedModule;

            SimpleAction PurchaseOrderModule = new SimpleAction(this, "PurchaseOrderModule", PredefinedCategory.View);
            PurchaseOrderModule.Caption = "Purcharse Orders";
            PurchaseOrderModule.Execute += SelectedModule;

            SimpleAction SalesOrderModule = new SimpleAction(this, "SalesOrderModule", PredefinedCategory.View);
            SalesOrderModule.Caption = "Sales Orders";
            SalesOrderModule.Execute += SelectedModule;

            var TypesWithModuleAttribute = GetTypesWithHelpAttribute(this.GetType().Assembly);

            typesPerModule = TypesWithModuleAttribute.ToLookup(p => p.GetCustomAttribute<ModuleAttribute>().ModuleId);
        }

        private const string HideReason = "NotInCurrentModule";
        ILookup<string, Type> typesPerModule;
        void SelectedModule(object sender, SimpleActionExecuteEventArgs e)
        {
            HideAll(navigationController.ShowNavigationItemAction.Items);
            IGrouping<string, Type> CurrentModuleTypes = typesPerModule.Where(tpm => tpm.Key == e.Action.Id).FirstOrDefault();
            ShowItem(navigationController.ShowNavigationItemAction.Items, CurrentModuleTypes);
        }
        private ShowNavigationItemController navigationController;
        protected override void OnFrameAssigned()
        {

            base.OnFrameAssigned();
            navigationController = Frame.GetController<ShowNavigationItemController>();

        }
        protected override void OnDeactivated()
        {

            base.OnDeactivated();
        }

        private void HideAll(ChoiceActionItemCollection items)
        {
            foreach (ChoiceActionItem item in items)
            {
                item.Active[HideReason] = false;
                HideAll(item.Items);
            }
        }
        private void ShowItem(ChoiceActionItemCollection items, IGrouping<string, Type> CurrentModuleTypes)
        {
            foreach (ChoiceActionItem item in items)
            {
                item.ActiveItemsBehavior = ActiveItemsBehavior.Independent;
                if (item.Caption == "Default")
                {
                    item.Active[HideReason] = true;
                }
                if (item.Model != null)
                {
                    var NavItem = item.Model as IModelNavigationItem;
                    if (NavItem.View != null)
                    {
                        //Debug.WriteLine(string.Format("{0}:{1}", " NavItem.View.Id", NavItem.View.Id));
                        //Debug.WriteLine(string.Format("{0}:{1}", "   NavItem.View.GetType().FullName", NavItem.View.GetType().FullName));
                        var ListViewModel = NavItem.View as IModelListView;
                        if (ListViewModel != null)
                        {
                            item.Active[HideReason] = CurrentModuleTypes.Any(types => types.FullName == ListViewModel.ModelClass.Name);
                            Debug.WriteLine(string.Format("{0}:{1}", item.Caption, item.Active[HideReason]));
                            
                            

                        }


                    }

                }
               
                ShowItem(item.Items, CurrentModuleTypes);
            }
        }
        static IEnumerable<Type> GetTypesWithHelpAttribute(Assembly assembly)
        {
            foreach (Type type in assembly.GetTypes())
            {
                if (type.GetCustomAttributes(typeof(ModuleAttribute), true).Length > 0)
                {
                    yield return type;
                }
            }
        }

    }
}