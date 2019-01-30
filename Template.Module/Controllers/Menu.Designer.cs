namespace Template.Module.Controllers
{
    partial class Menu
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
            this.simpleAction1 = new DevExpress.ExpressApp.Actions.SimpleAction(this.components);
            // 
            // simpleAction1
            // 
            this.simpleAction1.Caption = "CustomMainMenu";
            this.simpleAction1.Category = "CustomMainMenu";
            this.simpleAction1.ConfirmationMessage = null;
            this.simpleAction1.Id = "e17a1837-132a-4be7-96b2-688632205ceb";
            this.simpleAction1.ToolTip = null;
            // 
            // Menu
            // 
            this.Actions.Add(this.simpleAction1);

        }



        #endregion

        private DevExpress.ExpressApp.Actions.SimpleAction simpleAction1;
    }
}
