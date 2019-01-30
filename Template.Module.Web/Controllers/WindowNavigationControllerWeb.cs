using DevExpress.ExpressApp;
using DevExpress.ExpressApp.Actions;
using DevExpress.ExpressApp.SystemModule;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Template.Module.Controllers;

namespace Template.Module.Web.Controllers
{
    public class WindowNavigationControllerWeb: ModulesController
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
      
        protected override void SelectedModule(object sender, SimpleActionExecuteEventArgs e)
        {
            base.SelectedModule(sender, e);
            foreach (DevExpress.Web.NavBarGroup navBarGroup in control.Groups)
            {
                navBarGroup.Expanded = true;
            }
        }
        DevExpress.Web.ASPxNavBar control;
        private void ShowNavigationItemAction_CustomizeControl(object sender, DevExpress.ExpressApp.Actions.CustomizeControlEventArgs e)
        {
            Debug.WriteLine(string.Format("{0}:{1}", "e.Control.GetType()", e.Control.GetType()));
            control = e.Control as DevExpress.Web.ASPxNavBar;
          


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
