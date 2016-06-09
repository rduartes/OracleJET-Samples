/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojeditablevalue","ojs/ojradiocheckbox"],function(b,f){(function(){b.ya("oj.ojCheckboxset",f.oj.editableValue,{version:"1.0.0",defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{disabled:!1,value:void 0},refresh:function(){this._super();this.Aa()},widget:function(){return this.sqa},Xd:function(a,c){var e=[],g;this._super(a,c);b.ve.Vk([{V:"disabled",xc:!0},{V:"title"},{V:"placeholder"},{V:"required",Ze:!0,xc:!0}],c,this);this.uh=this.AI();void 0===c.value&&
(g=this.uh.filter(":checked"),0<g.length&&(g.each(function(){e.push(f(this).val())}),this.option("value",e,{_context:{Hc:!0,Va:!0}})),void 0===this.options.value&&(this.options.value=[]))},_ComponentCreate:function(){this._super();if(this.element.is("fieldset"))throw Error("ojCheckboxset cannot be bound to a fieldset. Use a div instead.");this.uh._ojRadioCheckbox();this.sqa=this.element.addClass("oj-checkboxset oj-component").attr("role","group").wrapInner("\x3cdiv class\x3d'oj-checkboxset-wrapper'\x3e\x3c/div\x3e");
this._on(this.Hl);this.Aa()},xG:function(){this.uh=this.AI();this.uh.filter(".oj-checkbox").each(function(){var a=void 0!==f(this).attr("disabled")?!!f(this).prop("disabled"):!1;f(this)._ojRadioCheckbox("option","disabled",a)});this.uh.not(".oj-checkbox")._ojRadioCheckbox()},Focus:function(){this.Wd().first().focus();return!0},AG:function(){},AI:function(){var a=this.element.find("input[type\x3dcheckbox]:first");0===a.length&&b.r.warn("Could not find any input type\x3dcheckbox within this element");
a=a.attr("name");return void 0===a?(a=this.element.find("input[type\x3dcheckbox]"),a.not("[name]")):this.element.find("input[type\x3dcheckbox][name\x3d"+a+"]")},pf:function(a,b,e){a=this.element.find("input[type\x3dcheckbox]:tabbable").first();this.rf(b,e,{launcher:a})},_GetMessagingLauncherElement:function(){var a=this.Wd(),c=b.ze.Sk("radioset").renderInputAs;return c&&"html"!==c?this.widget():a},Aa:function(){this.jo(this.options.disabled)},Hl:{change:function(a){this.Pz(a)}},Pz:function(b){var c=
this.eg();this.fc(c,b,a)},eg:function(){return this.ms()},ni:function(a){var b;this.uh._ojRadioCheckbox("option","checked",!1);if(null!=a)for(var e=0;e<a.length;e++)b=a[e],b="[value\x3d'"+b+"']",b=this.uh.filter(b),void 0!==b&&0<b.length&&(b.prop("checked")||b._ojRadioCheckbox("option","checked",!0))},ms:function(){var a=[],b=this.uh.filter(":checked");if(0===b.length)return[];b.each(function(){a.push(f(this).val())});return a},_GetDefaultStyleClass:function(){return"oj-checkboxset"},Wd:function(){return this.AI()},
wG:function(){},Dz:function(){return!0},jo:function(a){a=!!a;this.uh.each(function(){f(this).data("oj-_ojRadioCheckbox").Rv(a)});this.uh._ojRadioCheckbox("refreshDisabled")},_setOption:function(a,b,e){this._super(a,b,e);"disabled"===a&&this.jo(b)},getNodeBySubId:function(a){var b=this._super(a);return b||(a=a.subId,"oj-checkboxset-inputs"!==a)?b||null:this.uh.get()},_destroy:function(){var a=this._super(),b=this.element[0].firstChild;this.uh&&this.uh._ojRadioCheckbox("destroy");f(b).contents().unwrap();
return a}});var a={cr:!1}})()});