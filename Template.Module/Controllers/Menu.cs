using System;
using System.Collections.Generic;
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

namespace Template.Module.Controllers
{
    // For more typical usage scenarios, be sure to check out https://documentation.devexpress.com/eXpressAppFramework/clsDevExpressExpressAppWindowControllertopic.aspx.
    public partial class Menu : WindowController
    {
        public Menu()
        {
            InitializeComponent();
            for (int i = 0; i < 5; i++)
            {
                DevExpress.ExpressApp.Actions.SingleChoiceAction MainMenuTop;
                DevExpress.ExpressApp.Actions.ChoiceActionItem choiceActionItem1 = new DevExpress.ExpressApp.Actions.ChoiceActionItem();
                DevExpress.ExpressApp.Actions.ChoiceActionItem choiceActionItem2 = new DevExpress.ExpressApp.Actions.ChoiceActionItem();
                DevExpress.ExpressApp.Actions.ChoiceActionItem choiceActionItem3 = new DevExpress.ExpressApp.Actions.ChoiceActionItem();
                DevExpress.ExpressApp.Actions.ChoiceActionItem choiceActionItem4 = new DevExpress.ExpressApp.Actions.ChoiceActionItem();
                DevExpress.ExpressApp.Actions.ChoiceActionItem choiceActionItem5 = new DevExpress.ExpressApp.Actions.ChoiceActionItem();
                DevExpress.ExpressApp.Actions.ChoiceActionItem choiceActionItem6 = new DevExpress.ExpressApp.Actions.ChoiceActionItem();
                DevExpress.ExpressApp.Actions.ChoiceActionItem choiceActionItem7 = new DevExpress.ExpressApp.Actions.ChoiceActionItem();
                DevExpress.ExpressApp.Actions.ChoiceActionItem choiceActionItem8 = new DevExpress.ExpressApp.Actions.ChoiceActionItem();
                DevExpress.ExpressApp.Actions.ChoiceActionItem choiceActionItem9 = new DevExpress.ExpressApp.Actions.ChoiceActionItem();
                DevExpress.ExpressApp.Actions.ChoiceActionItem choiceActionItem10 = new DevExpress.ExpressApp.Actions.ChoiceActionItem();
                DevExpress.ExpressApp.Actions.ChoiceActionItem choiceActionItem11 = new DevExpress.ExpressApp.Actions.ChoiceActionItem();
                DevExpress.ExpressApp.Actions.ChoiceActionItem choiceActionItem12 = new DevExpress.ExpressApp.Actions.ChoiceActionItem();
                MainMenuTop = new DevExpress.ExpressApp.Actions.SingleChoiceAction(components);
                // 
                // MainMenuTop
                // 
                MainMenuTop.Caption = "Menu " + i;
                MainMenuTop.ConfirmationMessage = null;
                MainMenuTop.Id = Guid.NewGuid().ToString() ;
                MainMenuTop.Category = "CustomMainMenu";
                choiceActionItem1.Caption = "Entry 1";
                choiceActionItem1.Id = "Entry 1";
                choiceActionItem1.ImageName = null;
                choiceActionItem2.Caption = "Entry 1";
                choiceActionItem2.Id = "Entry 1";
                choiceActionItem2.ImageName = null;
                choiceActionItem3.Caption = "Entry 1";
                choiceActionItem3.Id = "Entry 1";
                choiceActionItem3.ImageName = null;
                choiceActionItem3.Shortcut = null;
                choiceActionItem3.ToolTip = null;
                choiceActionItem4.Caption = "Entry 2";
                choiceActionItem4.Id = "Entry 2";
                choiceActionItem4.ImageName = null;
                choiceActionItem4.Shortcut = null;
                choiceActionItem4.ToolTip = null;
                choiceActionItem5.Caption = "Entry 3";
                choiceActionItem5.Id = "Entry 3";
                choiceActionItem5.ImageName = null;
                choiceActionItem5.Shortcut = null;
                choiceActionItem5.ToolTip = null;
                choiceActionItem6.Caption = "Entry 4";
                choiceActionItem6.Id = "Entry 4";
                choiceActionItem6.ImageName = null;
                choiceActionItem6.Shortcut = null;
                choiceActionItem6.ToolTip = null;
                choiceActionItem2.Items.Add(choiceActionItem3);
                choiceActionItem2.Items.Add(choiceActionItem4);
                choiceActionItem2.Items.Add(choiceActionItem5);
                choiceActionItem2.Items.Add(choiceActionItem6);
                choiceActionItem2.Shortcut = null;
                choiceActionItem2.ToolTip = null;
                choiceActionItem7.Caption = "Entry 2";
                choiceActionItem7.Id = "Entry 2";
                choiceActionItem7.ImageName = null;
                choiceActionItem7.Shortcut = null;
                choiceActionItem7.ToolTip = null;
                choiceActionItem8.Caption = "Entry 3";
                choiceActionItem8.Id = "Entry 3";
                choiceActionItem8.ImageName = null;
                choiceActionItem8.Shortcut = null;
                choiceActionItem8.ToolTip = null;
                choiceActionItem1.Items.Add(choiceActionItem2);
                choiceActionItem1.Items.Add(choiceActionItem7);
                choiceActionItem1.Items.Add(choiceActionItem8);
                choiceActionItem1.Shortcut = null;
                choiceActionItem1.ToolTip = null;
                choiceActionItem9.Caption = "Entry 2";
                choiceActionItem9.Id = "Entry 2";
                choiceActionItem9.ImageName = null;
                choiceActionItem9.Shortcut = null;
                choiceActionItem9.ToolTip = null;
                choiceActionItem10.Caption = "Entry 3";
                choiceActionItem10.Id = "Entry 3";
                choiceActionItem10.ImageName = null;
                choiceActionItem10.Shortcut = null;
                choiceActionItem10.ToolTip = null;
                choiceActionItem11.Caption = "Entry 4";
                choiceActionItem11.Id = "Entry 4";
                choiceActionItem11.ImageName = null;
                choiceActionItem11.Shortcut = null;
                choiceActionItem11.ToolTip = null;
                choiceActionItem12.Caption = "Entry 5";
                choiceActionItem12.Id = "Entry 5";
                choiceActionItem12.ImageName = null;
                choiceActionItem12.Shortcut = null;
                choiceActionItem12.ToolTip = null;
                MainMenuTop.Items.Add(choiceActionItem1);
                MainMenuTop.Items.Add(choiceActionItem9);
                MainMenuTop.Items.Add(choiceActionItem10);
                MainMenuTop.Items.Add(choiceActionItem11);
                MainMenuTop.Items.Add(choiceActionItem12);
                MainMenuTop.ToolTip = null;
                // 
                // Menu
                // 
                Actions.Add(MainMenuTop);
            }
          

            // Target required Windows (via the TargetXXX properties) and create their Actions.
        }
        protected override void OnActivated()
        {
            base.OnActivated();
            // Perform various tasks depending on the target Window.
        }
        protected override void OnDeactivated()
        {
            // Unsubscribe from previously subscribed events and release other references and resources.
            base.OnDeactivated();
        }
    }
}
