using DevExpress.ExpressApp;
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

            //string ModulesMenuActionContainer =PredefinedCategory.View.ToString();//"CustomModuleMenu";

            string ModulesMenuActionContainer = "CustomModuleMenu";
            SimpleAction AccountingModule = new SimpleAction(this, "AccountingModule", ModulesMenuActionContainer);
            AccountingModule.Caption = "Accounting";
            AccountingModule.Execute += SelectedModule;
         

            SimpleAction InventoryControlModule = new SimpleAction(this, "InventoryControlModule", ModulesMenuActionContainer);
            InventoryControlModule.Caption = "Inventory Controll";
            InventoryControlModule.Execute += SelectedModule;
            InventoryControlModule.Category = ModulesMenuActionContainer;

            SimpleAction PurchaseOrderModule = new SimpleAction(this, "PurchaseOrderModule", ModulesMenuActionContainer);
            PurchaseOrderModule.Caption = "Purcharse Orders";
            PurchaseOrderModule.Execute += SelectedModule;
            PurchaseOrderModule.Category = ModulesMenuActionContainer;

            SimpleAction SalesOrderModule = new SimpleAction(this, "SalesOrderModule", ModulesMenuActionContainer);
            SalesOrderModule.Caption = "Sales Orders";
            SalesOrderModule.Execute += SelectedModule;
            SalesOrderModule.Category = ModulesMenuActionContainer;


            var TypesWithModuleAttribute = GetTypesWithHelpAttribute(typeof(Template.Module.TemplateModule).Assembly);
            typesPerModule = TypesWithModuleAttribute.ToLookup(p => p.GetCustomAttribute<ModuleAttribute>().ModuleId);

        }

        private const string HideReason = "NotInCurrentModule";
        protected ILookup<string, Type> typesPerModule;
        protected virtual void SelectedModule(object sender, SimpleActionExecuteEventArgs e)
        {
            //HideAll(navigationController.ShowNavigationItemAction.Items);
           
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
                if (item.Items == null)
                    return;

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
