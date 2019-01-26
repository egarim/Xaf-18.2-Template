namespace Template.Spa
{
    partial class TemplateSpaApplication
    {
        private DevExpress.ExpressApp.SystemModule.SystemModule module1;
        private DevExpress.ExpressApp.Spa.SystemModule.SystemSpaModule module2;
        private Template.Module.TemplateModule module3;
        private Template.Module.Spa.TemplateSpaModule module4;
        private DevExpress.ExpressApp.Objects.BusinessClassLibraryCustomizationModule objectsModule;
        private DevExpress.ExpressApp.CloneObject.CloneObjectModule cloneObjectModule;
        private DevExpress.ExpressApp.Validation.ValidationModule validationModule;

        private void InitializeComponent()
        {
            this.module1 = new DevExpress.ExpressApp.SystemModule.SystemModule();
            this.module2 = new DevExpress.ExpressApp.Spa.SystemModule.SystemSpaModule();
            this.module3 = new Template.Module.TemplateModule();
            this.module4 = new Template.Module.Spa.TemplateSpaModule();
            this.objectsModule = new DevExpress.ExpressApp.Objects.BusinessClassLibraryCustomizationModule();
            this.cloneObjectModule = new DevExpress.ExpressApp.CloneObject.CloneObjectModule();
            this.validationModule = new DevExpress.ExpressApp.Validation.ValidationModule();

            ((System.ComponentModel.ISupportInitialize)(this)).BeginInit();


            // 
            // TemplateSpaApplication
            // 
            this.ApplicationName = "Template";
            this.Modules.Add(this.module1);
            this.Modules.Add(this.module2);
            this.Modules.Add(this.module3);
            this.Modules.Add(this.module4);
            this.Modules.Add(this.objectsModule);
            this.Modules.Add(this.cloneObjectModule);
            this.Modules.Add(this.validationModule);
            this.DatabaseVersionMismatch += new System.EventHandler<DevExpress.ExpressApp.DatabaseVersionMismatchEventArgs>(this.TemplateSpaApplication_DatabaseVersionMismatch);
            ((System.ComponentModel.ISupportInitialize)(this)).EndInit();

        }

    }
}