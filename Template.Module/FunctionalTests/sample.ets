;#DropDB TemplateEasyTest

#Application Template.Win
#Application Template.Web

*FillForm
 User Name = Admin
*Action Log In

#IfDef Template.Win

*Action About...
 
*Action OK

#EndIf

#IfDef Template.Web
*Action Navigation(My Details)
#EndIf
