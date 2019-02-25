namespace Template.Module.PredefinedSearch
{
    partial class PredefinedSearchController
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
            this.selectFilter = new DevExpress.ExpressApp.Actions.SingleChoiceAction(this.components);
            // 
            // selectFilter
            // 
            this.selectFilter.Caption = "0a48d1b9-d9dc-4cca-a14e-89ca67d37b93";
            this.selectFilter.ConfirmationMessage = null;
            this.selectFilter.Id = "0a48d1b9-d9dc-4cca-a14e-89ca67d37b93";
            this.selectFilter.ToolTip = null;
            this.selectFilter.Execute += new DevExpress.ExpressApp.Actions.SingleChoiceActionExecuteEventHandler(this.SelectFilter_Execute);
            // 
            // PredefinedSearchController
            // 
            this.Actions.Add(this.selectFilter);

        }

        #endregion
        private DevExpress.ExpressApp.Actions.SingleChoiceAction selectFilter;
    }
}
