define(["require","jquery","underscore","backbone","collections/items","text!templates/emotion.html"],function(t){"use strict";var e,i,s,r,a,n;return e=t("jquery"),n=t("underscore"),i=t("backbone"),s=t("collections/items"),a=t("text!templates/emotion.html"),r=i.View.extend({collection:new s,template:a,events:{"keyup input.inputArea-search":"tagSearch","keyup input.inputArea-target":"setTarget","click span[data-index]":"tagActive"},initialize:function(){var t;return this.$el.html(this.template),this.collection.fetch(),this.results="",this.active="",this.targetName="",this.searchKeyWord="",this.$discript=this.$el.find("div.discript"),t=this.$el.find("input[class^=inputArea]"),t.focus(function(){return e(this).siblings("span").addClass("is-focus")}).blur(function(){return""===e(this).val()?e(this).siblings("span").removeClass("is-focus"):void 0}),this},tagSearch:function(t){var i,s,r,a,n,c,l;if(n=e(t.target).val(),n&&n!==this.searchKeyWord){for(this.searchKeyWord=n,this.results=this.collection.filterValues(e(t.target).val()),s=0,l=this.results.length,i=e(document.createDocumentFragment()),s=r=0,c=l;c>=0?c>r:r>c;s=c>=0?++r:--r)a=e('<span class="tags"></span>'),a.attr("data-index",s).text(this.results[s].get("command")),i.append(a);return this.$el.find("div.emotions").empty().append(i)}},setTarget:function(t){return this.targetName=e(t.target).val(),this.active?this.render():void 0},tagActive:function(t){return this.active=this.results[e(t.target).attr("data-index")],this.render()},render:function(){return this.$discript.html(this.targetName.length?this.active.get("tarTarget").replace(/:target/,e("input.inputArea-target").val()):this.active.get("tarNone")),this}})});