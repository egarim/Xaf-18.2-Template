using DevExpress.ExpressApp;
using DevExpress.ExpressApp.Actions;
using DevExpress.ExpressApp.Security.Strategy;
using DevExpress.ExpressApp.SystemModule;
using DevExpress.XtraNavBar;
using DevExpress.XtraTreeList;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Template.Module.Controllers;

namespace Template.Module.Win.Controllers
{
    public class WindowNavigationControllerWin : ModulesController
    {
        protected override void OnActivated()
        {
            base.OnActivated();
            ShowNavigationItemController navigationController = Frame.GetController<ShowNavigationItemController>();
            if (navigationController != null)
            {
                ShowNavigationItemController showNavigationItemController = Frame.GetController<ShowNavigationItemController>();
              
                showNavigationItemController.ShowNavigationItemAction.CustomizeControl += ShowNavigationItemAction_CustomizeControl;
            }
        }
        NavBarControl navBar;
        TreeList treeList;
        DevExpress.ExpressApp.Win.Templates.Navigation.XafAccordionControl accordion;
        protected override void SelectedModule(object sender, SimpleActionExecuteEventArgs e)
        {
            base.SelectedModule(sender, e);
            accordion.ExpandAll();
            //HACK if is not an accordion you can use this code
            ////foreach (NavBarGroup group in navBar.Groups)
            ////{

            ////   group.Expanded=true;
            ////}
        }
        private void ShowNavigationItemAction_CustomizeControl(object sender, DevExpress.ExpressApp.Actions.CustomizeControlEventArgs e)
        {
            //This are all the posible controls
            navBar = e.Control as NavBarControl;
            treeList = e.Control as TreeList;
            accordion = e.Control as DevExpress.ExpressApp.Win.Templates.Navigation.XafAccordionControl;
            Debug.WriteLine(string.Format("{0}:{1}", "e.Control.GetType()", e.Control.GetType()));


        }
        protected override void OnDeactivated()
        {
            ShowNavigationItemController navigationController = Frame.GetController<ShowNavigationItemController>();
            if (navigationController != null)
            {
                Frame.GetController<ShowNavigationItemController>().ShowNavigationItemAction.CustomizeControl -= ShowNavigationItemAction_CustomizeControl;
            }
            base.OnDeactivated();
        }
    }
}