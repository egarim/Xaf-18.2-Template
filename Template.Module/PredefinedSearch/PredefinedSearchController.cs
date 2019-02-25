using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using DevExpress.Data.Filtering;
using DevExpress.ExpressApp;
using DevExpress.ExpressApp.Actions;
using DevExpress.ExpressApp.Editors;
using DevExpress.ExpressApp.Layout;
using DevExpress.ExpressApp.Model.NodeGenerators;
using DevExpress.ExpressApp.SystemModule;
using DevExpress.ExpressApp.Templates;
using DevExpress.ExpressApp.Utils;
using DevExpress.Persistent.Base;
using DevExpress.Persistent.Validation;

namespace Template.Module.PredefinedSearch
{
    // For more typical usage scenarios, be sure to check out https://documentation.devexpress.com/eXpressAppFramework/clsDevExpressExpressAppViewControllertopic.aspx.
    public partial class PredefinedSearchController : ViewController
    {
        public PredefinedSearchController()
        {
            InitializeComponent();

            // Target required Views (via the TargetXXX properties) and create their Actions.
        }

        protected override void OnActivated()
        {
            base.OnActivated();

            List<Tuple<Type, Type>> PredefinedSearch = new List<Tuple<Type, Type>>();
            foreach (ModuleBase moduleBase in this.Application.Modules)
            {
                var IPredefinedSearch = moduleBase as IPredefinedSearch;
                if (IPredefinedSearch != null)
                {
                    PredefinedSearch.AddRange(IPredefinedSearch.GetPredefinedSearch());
                }
            }
            var CurrentFilters = PredefinedSearch.Where(t => t.Item1 == this.View.ObjectTypeInfo.Type);
            foreach (var item in CurrentFilters)
            {
                selectFilter.Items.Add(new ChoiceActionItem(item.Item2.Name, item.Item2));
            }
            // Perform various tasks depending on the target View.
        }

        protected override void OnViewControlsCreated()
        {
            base.OnViewControlsCreated();
            // Access and customize the target View control.
        }

        protected override void OnDeactivated()
        {
            // Unsubscribe from previously subscribed events and release other references and resources.
            base.OnDeactivated();
        }

        private Type CurrentFilterType;

        private void SelectFilter_Execute(object sender, SingleChoiceActionExecuteEventArgs e)
        {
            CurrentFilterType = e.SelectedChoiceActionItem.Data as Type;

            IObjectSpace os = Application.CreateObjectSpace();

            DetailView dv = Application.CreateDetailView(os, os.CreateObject(CurrentFilterType));
            dv.ViewEditMode = ViewEditMode.Edit;
            ShowViewParameters svp = new ShowViewParameters(dv);
            svp.Context = TemplateContext.PopupWindow;
            svp.TargetWindow = TargetWindow.NewModalWindow;
            DialogController dc = Application.CreateController<DialogController>();
            dc.Accepting += new EventHandler<DialogControllerAcceptingEventArgs>(dc_Accepting);
            dc.AcceptAction.Executed += new EventHandler<ActionBaseEventArgs>(AcceptAction_Executed);
            dc.AcceptAction.Executing += new CancelEventHandler(AcceptAction_Executing);
            svp.Controllers.Add(dc);
            Application.ShowViewStrategy.ShowView(svp, new ShowViewSource(Application.MainWindow, null));
        }

        private void AcceptAction_Executing(object sender, CancelEventArgs e)
        {
            var CurrentSearch = ((SimpleAction)sender);
            var Criteria = (CurrentSearch.SelectionContext.CurrentObject as IGetCriteria).GetCriteria();

            if ((View is ListView))
            {
                ((ListView)View).CollectionSource.Criteria["Filter1"] = Criteria;
            }
        }

        private void AcceptAction_Executed(object sender, ActionBaseEventArgs e)
        {
        }

        private void dc_Accepting(object sender, DialogControllerAcceptingEventArgs e)
        {
        }
    }
}