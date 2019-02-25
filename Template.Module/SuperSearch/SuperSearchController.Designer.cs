namespace Template.Module.Controllers
{
    partial class SuperSearchController
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary> 
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Component Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.Search = new DevExpress.ExpressApp.Actions.ParametrizedAction(this.components);
            // 
            // Search
            // 
            this.Search.Caption = "Search";
            this.Search.ConfirmationMessage = null;
            this.Search.Id = "f3b3c6cf-1a97-4274-af64-666e390eedc3";
            this.Search.NullValuePrompt = null;
            this.Search.ShortCaption = null;
            this.Search.ToolTip = null;
            this.Search.Execute += new DevExpress.ExpressApp.Actions.ParametrizedActionExecuteEventHandler(this.Search_Execute);
            // 
            // SuperSearchController
            // 
            this.Actions.Add(this.Search);
            this.TargetObjectType = typeof(Template.Module.BusinessObjects.SuperSearch.SearchResult);
            this.TargetViewType = DevExpress.ExpressApp.ViewType.ListView;
            this.TypeOfView = typeof(DevExpress.ExpressApp.ListView);

        }

        #endregion

        private DevExpress.ExpressApp.Actions.ParametrizedAction Search;
    }
}
