System.register(['angular2/core', "../internal/page-title.component", './../internal/example.component', './../internal/api.component', "./accordion/accordion.examples"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, page_title_component_1, example_component_1, api_component_1, accordion_examples_1;
    var AccordionComponentPage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (page_title_component_1_1) {
                page_title_component_1 = page_title_component_1_1;
            },
            function (example_component_1_1) {
                example_component_1 = example_component_1_1;
            },
            function (api_component_1_1) {
                api_component_1 = api_component_1_1;
            },
            function (accordion_examples_1_1) {
                accordion_examples_1 = accordion_examples_1_1;
            }],
        execute: function() {
            AccordionComponentPage = (function () {
                function AccordionComponentPage() {
                    this.api = [
                        {
                            selector: '<sui-accordion>',
                            properties: [
                                {
                                    name: "closeOthers",
                                    description: "Limits the number of open panels to 1 when <code>true</code>.",
                                    defaultValue: "true"
                                }
                            ]
                        },
                        {
                            selector: '<sui-accordion-panel>',
                            properties: [
                                {
                                    name: "isOpen",
                                    description: "Sets whether or not the panel is open.",
                                    defaultValue: "false"
                                },
                                {
                                    name: "isDisabled",
                                    description: "Sets whether or not the panel is disabled (locks current state).",
                                    defaultValue: "false"
                                }
                            ],
                            events: [
                                {
                                    name: "isOpenChange",
                                    description: "Fires whenever the panel is toggled. <code>[(isOpen)]</code> syntax is supported."
                                }
                            ]
                        }
                    ];
                }
                AccordionComponentPage = __decorate([
                    core_1.Component({
                        selector: 'accordion-component-page',
                        directives: [page_title_component_1.PageTitle, example_component_1.Example, api_component_1.Api, accordion_examples_1.ACCORDION_EXAMPLES],
                        templateUrl: "app/components/accordion.page.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AccordionComponentPage);
                return AccordionComponentPage;
            }());
            exports_1("AccordionComponentPage", AccordionComponentPage);
        }
    }
});
//# sourceMappingURL=accordion.page.js.map