sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageBox","sap/m/MessageToast"],function(e,t,o){"use strict";return e.extend("sap.btp.sapui5.controller.Detail",{onInit:function(){var e=sap.ui.core.UIComponent.getRouterFor(this);e.getRoute("detail").attachMatched(this._onRouteMatched,this)},_onRouteMatched:function(e){var t,o;t=e.getParameter("arguments");o=this.getView();o.bindElement({path:"/Products("+t.productId+")",events:{dataRequested:function(){o.setBusy(true)},dataReceived:function(){o.setBusy(false)}}})},handleNavButtonPress:function(e){var t=sap.ui.core.UIComponent.getRouterFor(this);t.navTo("home")},handleOrder:function(e){var n=this.getView().getModel("i18n").getResourceBundle();t.confirm(n.getText("OrderDialogMsg"),function(e){if(t.Action.OK===e){var a=n.getText("OrderDialogSuccessMsg");o.show(a)}},n.getText("OrderDialogTitle"))}})});