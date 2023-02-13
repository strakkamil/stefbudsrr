"use strict";
(self["webpackChunkstefbud"] = self["webpackChunkstefbud"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_porftolio_element_porftolio_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/porftolio-element/porftolio-element.component */ 5931);
/* harmony import */ var _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/portfolio/portfolio.component */ 9804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [{
  path: '',
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'realizacje',
  component: _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__.PortfolioComponent
}, {
  path: 'realizacja/:id',
  component: _pages_porftolio_element_porftolio_element_component__WEBPACK_IMPORTED_MODULE_1__.PorftolioElementComponent
}];
const routerOptions = {
  initialNavigation: 'enabledBlocking',
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 100]
};
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, routerOptions), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/modal.service */ 1609);
/* harmony import */ var _services_hamburger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/hamburger.service */ 7273);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/modal/modal.component */ 385);
/* harmony import */ var _components_hamburger_hamburger_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/hamburger/hamburger.component */ 7084);









function AppComponent_app_modal_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-modal");
  }
}
class AppComponent {
  constructor(modalService, hamburgerService) {
    this.modalService = modalService;
    this.hamburgerService = hamburgerService;
    this.title = 'stefbud';
    this.isModalOpen = false;
    this.isHamburgerOpen = false;
  }
  ngOnInit() {
    this.subsctiptionModal = this.modalService.changeIsOpen.subscribe(value => {
      this.isModalOpen = value;
    });
    this.subsctiptionHamburger = this.hamburgerService.changeIsOpen.subscribe(value => {
      this.isHamburgerOpen = value;
    });
  }
  ngOnDestroy() {
    this.subsctiptionModal?.unsubscribe();
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_0__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_hamburger_service__WEBPACK_IMPORTED_MODULE_1__.HamburgerService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 5,
  vars: 2,
  consts: [[3, "isOpen"], [4, "ngIf"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-hamburger", 0)(1, "app-header")(2, "router-outlet")(3, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AppComponent_app_modal_4_Template, 1, 0, "app-modal", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isOpen", ctx.isHamburgerOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isModalOpen);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__.ModalComponent, _components_hamburger_hamburger_component__WEBPACK_IMPORTED_MODULE_5__.HamburgerComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/hero/hero.component */ 1837);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about.component */ 2468);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/portfolio/portfolio.component */ 9804);
/* harmony import */ var _components_portfolio_section_portfolio_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/portfolio-section/portfolio-section.component */ 6517);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/contact/contact.component */ 1782);
/* harmony import */ var _components_cooperation_cooperation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cooperation/cooperation.component */ 5516);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _pages_portfolio_search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/portfolio/search/search.component */ 6531);
/* harmony import */ var _pages_porftolio_element_porftolio_element_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/porftolio-element/porftolio-element.component */ 5931);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/modal/modal.component */ 385);
/* harmony import */ var _components_hamburger_hamburger_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/hamburger/hamburger.component */ 7084);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);



















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule.withServerTransition({
    appId: 'serverApp'
  }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FontAwesomeModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_3__.HeroComponent, _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent, _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__.PortfolioComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent, _components_portfolio_section_portfolio_section_component__WEBPACK_IMPORTED_MODULE_7__.PortfolioSectionComponent, _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__.ContactComponent, _components_cooperation_cooperation_component__WEBPACK_IMPORTED_MODULE_9__.CooperationComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__.FooterComponent, _pages_portfolio_search_search_component__WEBPACK_IMPORTED_MODULE_11__.SearchComponent, _pages_porftolio_element_porftolio_element_component__WEBPACK_IMPORTED_MODULE_12__.PorftolioElementComponent, _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__.ModalComponent, _components_hamburger_hamburger_component__WEBPACK_IMPORTED_MODULE_14__.HamburgerComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FontAwesomeModule]
  });
})();

/***/ }),

/***/ 2468:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


const _c0 = function () {
  return ["/"];
};
class AboutComponent {}
AboutComponent.ɵfac = function AboutComponent_Factory(t) {
  return new (t || AboutComponent)();
};
AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AboutComponent,
  selectors: [["app-about"]],
  decls: 7,
  vars: 2,
  consts: [["id", "o-nas"], ["fragment", "realizacje", 3, "routerLink"]],
  template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "O nas");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Przejd\u017A do naszych realizacji");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["section[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\twidth: 100%;\r\n\tmin-height: calc(100vh - 100px);\r\n\tbackground-color: #DAD7CD;\r\n\tpadding: 100px 150px;\r\n\tcolor: #3A5A40;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tfont-size: 60px;\r\n\tfont-weight: 500;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tmargin: 20px 0;\r\n\ttext-align: justify;\r\n\tfont-size: 30px;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\tcolor: #3A5A40;\r\n\tfont-size: 31px;\r\n\tfont-weight: 700;\r\n\tfont-style: italic;\r\n\ttext-decoration: underline;\r\n}\r\n\r\n@media(max-width: 1024px) {\r\n\tsection[_ngcontent-%COMP%] {\r\n\t\tpadding: 40px 40px;\r\n\t\tmin-height: auto;\r\n\t}\r\n\r\n\tsection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\t\tfont-size: 28px;\r\n\t}\r\n\r\n\tsection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\t\tfont-size: 18px;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qiw4QkFBOEI7Q0FDOUIsV0FBVztDQUNYLCtCQUErQjtDQUMvQix5QkFBeUI7Q0FDekIsb0JBQW9CO0NBQ3BCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDO0VBQ0Msa0JBQWtCO0VBQ2xCLGdCQUFnQjtDQUNqQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7O0VBRUMsZUFBZTtDQUNoQjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNEQUQ3Q0Q7XHJcblx0cGFkZGluZzogMTAwcHggMTUwcHg7XHJcblx0Y29sb3I6ICMzQTVBNDA7XHJcbn1cclxuXHJcbnNlY3Rpb24gaDIge1xyXG5cdGZvbnQtc2l6ZTogNjBweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5zZWN0aW9uIHAge1xyXG5cdG1hcmdpbjogMjBweCAwO1xyXG5cdHRleHQtYWxpZ246IGp1c3RpZnk7XHJcblx0Zm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG5zZWN0aW9uIGEge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjb2xvcjogIzNBNUE0MDtcclxuXHRmb250LXNpemU6IDMxcHg7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDEwMjRweCkge1xyXG5cdHNlY3Rpb24ge1xyXG5cdFx0cGFkZGluZzogNDBweCA0MHB4O1xyXG5cdFx0bWluLWhlaWdodDogYXV0bztcclxuXHR9XHJcblxyXG5cdHNlY3Rpb24gaDIge1xyXG5cdFx0Zm9udC1zaXplOiAyOHB4O1xyXG5cdH1cclxuXHJcblx0c2VjdGlvbiBwLFxyXG5cdHNlY3Rpb24gYSB7XHJcblx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1782:
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);





class ContactComponent {
  constructor() {
    this.faMapMarkerAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faMapMarkerAlt;
    this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faEnvelope;
    this.faPhone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faPhone;
  }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) {
  return new (t || ContactComponent)();
};
ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ContactComponent,
  selectors: [["app-contact"]],
  decls: 31,
  vars: 3,
  consts: [["id", "kontakt", 1, "contact"], [1, "heading"], [1, "informations"], ["href", "https://www.google.com/maps/place/Producent+mebli+PPHU+Stefbud/@51.0563914,21.0529127,15z/data=!4m6!3m5!1s0x47181421d1738095:0xbc26c0babd3aba69!8m2!3d51.0563914!4d21.0529127!16s%2Fg%2F1tgg8q66", "target", "_blank", 1, "map"], [1, "map"], [3, "icon"], [1, "address"], [1, "mail-phone"], [1, "icon"], ["href", "mailto:stefanoziomek@wp.pl"], ["href", "tel:663607022"]],
  template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Kontakt");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1)(4, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Skontaktuj si\u0119 z nami");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 2)(7, "a", 3)(8, "div", 4)(9, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Skontaktuj si\u0119 z nami");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "fa-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6)(14, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Starachowice");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Adama Mickiewicza 16");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7)(19, "p")(20, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "fa-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span")(23, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "stefanoziomek@wp.pl");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p")(26, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "fa-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span")(29, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "663 607 022");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faMapMarkerAlt);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faEnvelope);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faPhone);
    }
  },
  dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent],
  styles: ["section.contact[_ngcontent-%COMP%] {\r\n\theight: calc(100vh - 100px);\r\n\tmin-height: calc(100vh - 100px);\r\n\twidth: 100%;\r\n\tbackground-color: #DAD7CD;\r\n\tpadding: 100px 0 0;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%] {\r\n\tdisplay: none;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n\tpadding: 0 150px;\r\n\tfont-size: 60px;\r\n\tfont-weight: normal;\r\n\tcolor: #344E41;\r\n}\r\n\r\nsection.informations[_ngcontent-%COMP%] {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(2, 50%);\r\n\twidth: 100%;\r\n\theight: 80%;\r\n}\r\n\r\n.map[_ngcontent-%COMP%]{\r\n\torder: 1;\r\n}\r\n\r\n.mail-phone[_ngcontent-%COMP%] {\r\n\torder: 2;\r\n}\r\n\r\n.map[_ngcontent-%COMP%], .mail-phone[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.map[_ngcontent-%COMP%], a.map[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-evenly;\r\n\talign-items: center;\r\n\tbackground-color: #588157;\r\n\tcolor: #fff;\r\n\tcursor: pointer;\r\n\tfilter: brightness(1);\r\n\ttransition: .3s;\r\n\ttext-decoration: none;\r\n}\r\n\r\na.map[_ngcontent-%COMP%]:hover {\r\n\tfilter: brightness(1.1);\r\n}\r\n\r\n.map[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n\tfont-size: 40px;\r\n\tfont-weight: normal;\r\n}\r\n\r\n.map[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tfont-size: 175px;\r\n}\r\n\r\n.address[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tfont-size: 36px;\r\n}\r\n\r\n.mail-phone[_ngcontent-%COMP%] {\r\n\tpadding-left: 150px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\tgap: 50px;\r\n\tcolor: #344E41;\r\n}\r\n\r\n.mail-phone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 50px;\r\n}\r\n\r\n.mail-phone[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tfont-size: 41px;\r\n\ttext-decoration: none;\r\n\tcolor: #344E41;\r\n\tcursor: pointer;\r\n\tfilter: brightness(1);\r\n\ttransition: .3s;\r\n}\r\n\r\n.mail-phone[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n\tfilter: brightness(1.5);\r\n}\r\n\r\n.mail-phone[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n\tfont-size: 90px;\r\n}\r\n\r\n@media(max-width: 1600px) {\r\n\tsection.informations[_ngcontent-%COMP%] {\r\n\t\tflex-direction: column;\r\n\t}\r\n\r\n\t.map[_ngcontent-%COMP%], .mail-phone[_ngcontent-%COMP%] {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.mail-phone[_ngcontent-%COMP%] {\r\n\t\tpadding-left: 70px;\r\n\t}\r\n\r\n\t.mail-phone[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\t\tfont-size: 30px;\r\n\t}\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n\tsection.contact[_ngcontent-%COMP%] {\r\n\t\tpadding: 40px 0px;\r\n\t\tmin-height: auto;\r\n\t\theight: auto;\r\n\t}\r\n\r\n\tsection.informations[_ngcontent-%COMP%] {\r\n\t\tdisplay: grid;\r\n\t\tgrid-template-columns: repeat(1, 100%);\r\n\t}\r\n\r\n\t.mail-phone[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\t\tfont-size: 24px;\r\n\t}\r\n\r\n\t.mail-phone[_ngcontent-%COMP%] {\r\n\t\tpadding-left: 150px;\r\n\t}\r\n\r\n\t.mail-phone[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n\t\tfont-size: 50px;\r\n\t}\r\n\r\n\t.mail-phone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\t\tgap: 10px;\r\n\t}\r\n\r\n\t.heading[_ngcontent-%COMP%]{\r\n\t\tmargin-top: 30px;\r\n\t\tpadding: 20px 150px;\r\n\t\twidth: 100%;\r\n\t\tdisplay: block;\r\n\t\tbackground-color: #588157;\r\n\t\tcolor: #DAD7CD;\r\n\t}\r\n\r\n\t.heading[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{\r\n\t\tfont-size: 20px;\r\n\t\tfont-weight: normal;\r\n\t}\r\n\r\n\t.map[_ngcontent-%COMP%]{\r\n\t\torder: 2;\r\n\t}\r\n\t\r\n\t.mail-phone[_ngcontent-%COMP%] {\r\n\t\torder: 1;\r\n\t}\r\n\r\n\th4[_ngcontent-%COMP%]{\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.mail-phone[_ngcontent-%COMP%] {\r\n\t\tpadding: 40px 150px;\r\n\t\tgap: 10px;\r\n\t}\r\n\r\n\t.map[_ngcontent-%COMP%] {\r\n\t\tpadding: 20px 10px;\r\n\t}\r\n\r\n\t.map[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]{\r\n\t\tfont-size: 24px;\r\n\t}\r\n\r\n\t.mail-phone[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n\t\tfont-size: 60px;\r\n\t}\r\n}\r\n\r\n@media(max-width: 1024px) {\r\n\th3[_ngcontent-%COMP%] {\r\n\t\tpadding: 0 40px;\r\n\t\tfont-size: 28px;\r\n\t}\r\n\r\n\t.heading[_ngcontent-%COMP%]{\r\n\t\tpadding: 20px 40px;\r\n\t}\r\n\r\n\t.mail-phone[_ngcontent-%COMP%] {\r\n\t\tpadding: 40px;\r\n\t}\r\n}\r\n\r\n@media (max-width: 480px) {\r\n\t.mail-phone[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n\t\tfont-size: 16px;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLDJCQUEyQjtDQUMzQiwrQkFBK0I7Q0FDL0IsV0FBVztDQUNYLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IscUNBQXFDO0NBQ3JDLFdBQVc7Q0FDWCxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxRQUFRO0FBQ1Q7O0FBRUE7Q0FDQyxRQUFRO0FBQ1Q7O0FBRUE7O0NBRUMsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qiw2QkFBNkI7Q0FDN0IsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixXQUFXO0NBQ1gsZUFBZTtDQUNmLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsU0FBUztDQUNULGNBQWM7QUFDZjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsU0FBUztBQUNWOztBQUVBO0NBQ0MsZUFBZTtDQUNmLHFCQUFxQjtDQUNyQixjQUFjO0NBQ2QsZUFBZTtDQUNmLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDO0VBQ0Msc0JBQXNCO0NBQ3ZCOztDQUVBOztFQUVDLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0NBQ2I7O0NBRUE7RUFDQyxhQUFhO0VBQ2Isc0NBQXNDO0NBQ3ZDOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxTQUFTO0NBQ1Y7O0NBRUE7RUFDQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGNBQWM7Q0FDZjs7Q0FFQTtFQUNDLGVBQWU7RUFDZixtQkFBbUI7Q0FDcEI7O0NBRUE7RUFDQyxRQUFRO0NBQ1Q7O0NBRUE7RUFDQyxRQUFRO0NBQ1Q7O0NBRUE7RUFDQyxhQUFhO0NBQ2Q7O0NBRUE7RUFDQyxtQkFBbUI7RUFDbkIsU0FBUztDQUNWOztDQUVBO0VBQ0Msa0JBQWtCO0NBQ25COztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsZUFBZTtFQUNmLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxrQkFBa0I7Q0FDbkI7O0NBRUE7RUFDQyxhQUFhO0NBQ2Q7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsZUFBZTtDQUNoQjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbi5jb250YWN0IHtcclxuXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XHJcblx0bWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjREFEN0NEO1xyXG5cdHBhZGRpbmc6IDEwMHB4IDAgMDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaDMge1xyXG5cdHBhZGRpbmc6IDAgMTUwcHg7XHJcblx0Zm9udC1zaXplOiA2MHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0Y29sb3I6ICMzNDRFNDE7XHJcbn1cclxuXHJcbnNlY3Rpb24uaW5mb3JtYXRpb25zIHtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDUwJSk7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA4MCU7XHJcbn1cclxuXHJcbi5tYXB7XHJcblx0b3JkZXI6IDE7XHJcbn1cclxuXHJcbi5tYWlsLXBob25lIHtcclxuXHRvcmRlcjogMjtcclxufVxyXG5cclxuLm1hcCxcclxuLm1haWwtcGhvbmUge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1hcCxcclxuYS5tYXAge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcclxuXHR0cmFuc2l0aW9uOiAuM3M7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hLm1hcDpob3ZlciB7XHJcblx0ZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7XHJcbn1cclxuXHJcbi5tYXAgaDQge1xyXG5cdGZvbnQtc2l6ZTogNDBweDtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4ubWFwIHNwYW4ge1xyXG5cdGZvbnQtc2l6ZTogMTc1cHg7XHJcbn1cclxuXHJcbi5hZGRyZXNzIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRmb250LXNpemU6IDM2cHg7XHJcbn1cclxuXHJcbi5tYWlsLXBob25lIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDE1MHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRnYXA6IDUwcHg7XHJcblx0Y29sb3I6ICMzNDRFNDE7XHJcbn1cclxuXHJcbi5tYWlsLXBob25lIHAge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRnYXA6IDUwcHg7XHJcbn1cclxuXHJcbi5tYWlsLXBob25lIGEge1xyXG5cdGZvbnQtc2l6ZTogNDFweDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6ICMzNDRFNDE7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcclxuXHR0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuXHJcbi5tYWlsLXBob25lIGE6aG92ZXIge1xyXG5cdGZpbHRlcjogYnJpZ2h0bmVzcygxLjUpO1xyXG59XHJcblxyXG4ubWFpbC1waG9uZSAuaWNvbiB7XHJcblx0Zm9udC1zaXplOiA5MHB4O1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuXHRzZWN0aW9uLmluZm9ybWF0aW9ucyB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdH1cclxuXHJcblx0Lm1hcCxcclxuXHQubWFpbC1waG9uZSB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5tYWlsLXBob25lIHtcclxuXHRcdHBhZGRpbmctbGVmdDogNzBweDtcclxuXHR9XHJcblxyXG5cdC5tYWlsLXBob25lIGEge1xyXG5cdFx0Zm9udC1zaXplOiAzMHB4O1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG5cdHNlY3Rpb24uY29udGFjdCB7XHJcblx0XHRwYWRkaW5nOiA0MHB4IDBweDtcclxuXHRcdG1pbi1oZWlnaHQ6IGF1dG87XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0fVxyXG5cclxuXHRzZWN0aW9uLmluZm9ybWF0aW9ucyB7XHJcblx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMTAwJSk7XHJcblx0fVxyXG5cclxuXHQubWFpbC1waG9uZSBhIHtcclxuXHRcdGZvbnQtc2l6ZTogMjRweDtcclxuXHR9XHJcblxyXG5cdC5tYWlsLXBob25lIHtcclxuXHRcdHBhZGRpbmctbGVmdDogMTUwcHg7XHJcblx0fVxyXG5cclxuXHQubWFpbC1waG9uZSAuaWNvbiB7XHJcblx0XHRmb250LXNpemU6IDUwcHg7XHJcblx0fVxyXG5cclxuXHQubWFpbC1waG9uZSBwIHtcclxuXHRcdGdhcDogMTBweDtcclxuXHR9XHJcblxyXG5cdC5oZWFkaW5ne1xyXG5cdFx0bWFyZ2luLXRvcDogMzBweDtcclxuXHRcdHBhZGRpbmc6IDIwcHggMTUwcHg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcclxuXHRcdGNvbG9yOiAjREFEN0NEO1xyXG5cdH1cclxuXHJcblx0LmhlYWRpbmcgaDZ7XHJcblx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdH1cclxuXHJcblx0Lm1hcHtcclxuXHRcdG9yZGVyOiAyO1xyXG5cdH1cclxuXHRcclxuXHQubWFpbC1waG9uZSB7XHJcblx0XHRvcmRlcjogMTtcclxuXHR9XHJcblxyXG5cdGg0e1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcblxyXG5cdC5tYWlsLXBob25lIHtcclxuXHRcdHBhZGRpbmc6IDQwcHggMTUwcHg7XHJcblx0XHRnYXA6IDEwcHg7XHJcblx0fVxyXG5cclxuXHQubWFwIHtcclxuXHRcdHBhZGRpbmc6IDIwcHggMTBweDtcclxuXHR9XHJcblxyXG5cdC5tYXAgLmFkZHJlc3N7XHJcblx0XHRmb250LXNpemU6IDI0cHg7XHJcblx0fVxyXG5cclxuXHQubWFpbC1waG9uZSAuaWNvbiB7XHJcblx0XHRmb250LXNpemU6IDYwcHg7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuXHRoMyB7XHJcblx0XHRwYWRkaW5nOiAwIDQwcHg7XHJcblx0XHRmb250LXNpemU6IDI4cHg7XHJcblx0fVxyXG5cclxuXHQuaGVhZGluZ3tcclxuXHRcdHBhZGRpbmc6IDIwcHggNDBweDtcclxuXHR9XHJcblxyXG5cdC5tYWlsLXBob25lIHtcclxuXHRcdHBhZGRpbmc6IDQwcHg7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHQubWFpbC1waG9uZSBhe1xyXG5cdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5516:
/*!*****************************************************************!*\
  !*** ./src/app/components/cooperation/cooperation.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CooperationComponent": () => (/* binding */ CooperationComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);



class CooperationComponent {
  constructor() {
    this.faAngleUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faAngleUp;
  }
  onTop() {
    window.scrollTo(0, 0);
  }
}
CooperationComponent.ɵfac = function CooperationComponent_Factory(t) {
  return new (t || CooperationComponent)();
};
CooperationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CooperationComponent,
  selectors: [["app-cooperation"]],
  decls: 21,
  vars: 1,
  consts: [["id", "wspolpraca"], [1, "container"], [1, "heading"], [1, "main"], ["href", "https://www.wp.pl", "target", "_blank"], [1, "back"], [1, "arrow"], [1, "icon", 3, "click"], [3, "icon"]],
  template: function CooperationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Zapraszamy do wsp\u00F3\u0142pracy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Firmy z kt\u00F3rymi wsp\u00F3\u0142pracujemy:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul")(9, "li")(10, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "PPHU STEFBUD");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li")(13, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "PPHU STEFBUD");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5)(16, "div", 6)(17, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CooperationComponent_Template_span_click_17_listener() {
        return ctx.onTop();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "fa-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Powr\u00F3t na g\u00F3r\u0119");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faAngleUp);
    }
  },
  dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent],
  styles: ["section[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\tmin-height: calc(100vh - 100px);\r\n\twidth: 100%;\r\n\tbackground-color: #DAD7CD;\r\n\tpadding: 100px 0;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\theight: 100px;\r\n\tpadding: 0 150px;\r\n\tbackground-color: #588157;\r\n\tfont-size: 44px;\r\n\tcolor: #fff;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n\tfont-weight: normal;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n\tpadding: 50px 150px 0;\r\n\tcolor: #344E41;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n\tfont-size: 30px;\r\n\tfont-weight: normal;\r\n\tmargin-bottom: 40px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tmargin: 20px 0;\r\n\tlist-style: none;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tfont-size: 24px;\r\n\ttext-decoration: none;\r\n\tcolor: #344E41;\r\n\tfilter: brightness(1);\r\n\ttransition: .3s;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n\tfilter: brightness(1.5);\r\n}\r\n\r\n.back[_ngcontent-%COMP%] {\r\n\tpadding: 0 150px;\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n}\r\n\r\n.back[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tcursor: pointer;\r\n\tanimation: _ngcontent-%COMP%_upArrow both 5s infinite;\r\n}\r\n\r\n.back[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tcolor: #344E41;\r\n\tfont-size: 33px;\r\n}\r\n\r\n.back[_ngcontent-%COMP%]   span.icon[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\tfont-size: 150px;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_upArrow {\r\n\t0% {\r\n\t\ttransform: translateY(0);\r\n\t\topacity: 0;\r\n\t}\r\n\r\n\t10% {\r\n\t\ttransform: translateY(0);\r\n\t\topacity: 1;\r\n\t}\r\n\r\n\t90% {\r\n\t\ttransform: translateY(-100px);\r\n\t\topacity: 1;\r\n\t}\r\n\r\n\t100% {\r\n\t\ttransform: translateY(-100px);\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_upArrowRWD {\r\n\t0% {\r\n\t\ttransform: translateY(0);\r\n\t\topacity: 0;\r\n\t}\r\n\r\n\t10% {\r\n\t\ttransform: translateY(0);\r\n\t\topacity: 1;\r\n\t}\r\n\r\n\t90% {\r\n\t\ttransform: translateY(-40px);\r\n\t\topacity: 1;\r\n\t}\r\n\r\n\t100% {\r\n\t\ttransform: translateY(-40px);\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n\r\n@media(max-width: 1024px){\r\n\tsection[_ngcontent-%COMP%] {\r\n\t\tpadding: 0;\r\n\t\tmin-height: auto;\r\n\t}\r\n\r\n\t.heading[_ngcontent-%COMP%]{\r\n\t\tpadding: 0px 40px;\r\n\t\tfont-size: 28px;\r\n\t}\r\n\r\n\t.main[_ngcontent-%COMP%] {\r\n\t\tpadding: 30px 40px 0;\r\n\t}\r\n\r\n\t.main[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\r\n\t\tfont-size: 20px;\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\r\n\t.main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n\t\tfont-size: 18px;\r\n\t}\r\n\t.back[_ngcontent-%COMP%]{\r\n\t\tpadding: 10px;\r\n\t}\r\n\r\n\t.back[_ngcontent-%COMP%]   span.icon[_ngcontent-%COMP%]{\r\n\t\tfont-size: 50px;\r\n\t}\r\n\t.back[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n\t\tfont-size: 16px;\r\n\t}\r\n\r\n\t.back[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{\r\n\t\tanimation: _ngcontent-%COMP%_upArrowRWD both 5s infinite;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb29wZXJhdGlvbi9jb29wZXJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qiw4QkFBOEI7Q0FDOUIsK0JBQStCO0NBQy9CLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtDQUN6QixlQUFlO0NBQ2YsV0FBVztBQUNaOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsY0FBYztDQUNkLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixxQkFBcUI7Q0FDckIsY0FBYztDQUNkLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCxhQUFhO0NBQ2IseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixlQUFlO0NBQ2YsbUNBQW1DO0FBQ3BDOztBQUVBO0NBQ0MsY0FBYztDQUNkLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0M7RUFDQyx3QkFBd0I7RUFDeEIsVUFBVTtDQUNYOztDQUVBO0VBQ0Msd0JBQXdCO0VBQ3hCLFVBQVU7Q0FDWDs7Q0FFQTtFQUNDLDZCQUE2QjtFQUM3QixVQUFVO0NBQ1g7O0NBRUE7RUFDQyw2QkFBNkI7RUFDN0IsVUFBVTtDQUNYO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLHdCQUF3QjtFQUN4QixVQUFVO0NBQ1g7O0NBRUE7RUFDQyx3QkFBd0I7RUFDeEIsVUFBVTtDQUNYOztDQUVBO0VBQ0MsNEJBQTRCO0VBQzVCLFVBQVU7Q0FDWDs7Q0FFQTtFQUNDLDRCQUE0QjtFQUM1QixVQUFVO0NBQ1g7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsVUFBVTtFQUNWLGdCQUFnQjtDQUNqQjs7Q0FFQTtFQUNDLGlCQUFpQjtFQUNqQixlQUFlO0NBQ2hCOztDQUVBO0VBQ0Msb0JBQW9CO0NBQ3JCOztDQUVBO0VBQ0MsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7Q0FDQTtFQUNDLGFBQWE7Q0FDZDs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7Q0FDQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxzQ0FBc0M7Q0FDdkM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0bWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjREFEN0NEO1xyXG5cdHBhZGRpbmc6IDEwMHB4IDA7XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0aGVpZ2h0OiAxMDBweDtcclxuXHRwYWRkaW5nOiAwIDE1MHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XHJcblx0Zm9udC1zaXplOiA0NHB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uaGVhZGluZyBoNCB7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLm1haW4ge1xyXG5cdHBhZGRpbmc6IDUwcHggMTUwcHggMDtcclxuXHRjb2xvcjogIzM0NEU0MTtcclxufVxyXG5cclxuLm1haW4gaDUge1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5tYWluIGxpIHtcclxuXHRtYXJnaW46IDIwcHggMDtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ubWFpbiBhIHtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGNvbG9yOiAjMzQ0RTQxO1xyXG5cdGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcclxuXHR0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuXHJcbi5tYWluIGE6aG92ZXIge1xyXG5cdGZpbHRlcjogYnJpZ2h0bmVzcygxLjUpO1xyXG59XHJcblxyXG4uYmFjayB7XHJcblx0cGFkZGluZzogMCAxNTBweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5iYWNrIC5hcnJvd3tcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGFuaW1hdGlvbjogdXBBcnJvdyBib3RoIDVzIGluZmluaXRlO1xyXG59XHJcblxyXG4uYmFjayBzcGFuIHtcclxuXHRjb2xvcjogIzM0NEU0MTtcclxuXHRmb250LXNpemU6IDMzcHg7XHJcbn1cclxuXHJcbi5iYWNrIHNwYW4uaWNvbiB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMTUwcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdXBBcnJvdyB7XHJcblx0MCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHR9XHJcblxyXG5cdDEwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdH1cclxuXHJcblx0OTAlIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xyXG5cdFx0b3BhY2l0eTogMTtcclxuXHR9XHJcblxyXG5cdDEwMCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCk7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB1cEFycm93UldEIHtcclxuXHQwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdH1cclxuXHJcblx0MTAlIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG5cclxuXHQ5MCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MHB4KTtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG5cclxuXHQxMDAlIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDBweCk7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogMTAyNHB4KXtcclxuXHRzZWN0aW9uIHtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0XHRtaW4taGVpZ2h0OiBhdXRvO1xyXG5cdH1cclxuXHJcblx0LmhlYWRpbmd7XHJcblx0XHRwYWRkaW5nOiAwcHggNDBweDtcclxuXHRcdGZvbnQtc2l6ZTogMjhweDtcclxuXHR9XHJcblxyXG5cdC5tYWluIHtcclxuXHRcdHBhZGRpbmc6IDMwcHggNDBweCAwO1xyXG5cdH1cclxuXHJcblx0Lm1haW4gaDV7XHJcblx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdH1cclxuXHJcblx0Lm1haW4gYXtcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHR9XHJcblx0LmJhY2t7XHJcblx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0LmJhY2sgc3Bhbi5pY29ue1xyXG5cdFx0Zm9udC1zaXplOiA1MHB4O1xyXG5cdH1cclxuXHQuYmFjayBzcGFue1xyXG5cdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdH1cclxuXHJcblx0LmJhY2sgLmFycm93e1xyXG5cdFx0YW5pbWF0aW9uOiB1cEFycm93UldEIGJvdGggNXMgaW5maW5pdGU7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
  constructor() {
    this.year = new Date().getFullYear();
  }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 11,
  vars: 1,
  consts: [[1, "copyright"], [1, "developer"], ["href", "mailto:strakkamil@protonmail.com"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "section", 0)(2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "PPHU STEFBUD.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Wszystkie prawa zastrze\u017Cone.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 1)(9, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Kamil Str\u0105k");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.year);
    }
  },
  styles: ["footer[_ngcontent-%COMP%]{\r\n\tpadding: 40px 150px;\r\n\tbackground-color: #344E41;\r\n\tcolor: #DAD7CD;\r\n\tfont-size: 20px;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.copyright[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tgap: 10px;\r\n}\r\n\r\n.developer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n\tcolor: #DAD7CD;;\r\n\tcursor: pointer;\r\n\ttext-decoration: none;\r\n\tfilter: brightness(1);\r\n\ttransition: .3s;\r\n}\r\n\r\n.developer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n\tfilter: brightness(1.5);\r\n}\r\n\r\n@media(max-width: 1024px){\r\n\tfooter[_ngcontent-%COMP%]{\r\n\t\tpadding: 40px 40px;\r\n\t\tflex-direction: column;\r\n\t}\r\n\r\n\t.copyright[_ngcontent-%COMP%] {\r\n\t\tflex-direction: column;\r\n\t}\r\n\r\n\t.developer[_ngcontent-%COMP%]{\r\n\t\tmargin-top: 10px;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsYUFBYTtDQUNiLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLHFCQUFxQjtDQUNyQixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDO0VBQ0Msa0JBQWtCO0VBQ2xCLHNCQUFzQjtDQUN2Qjs7Q0FFQTtFQUNDLHNCQUFzQjtDQUN2Qjs7Q0FFQTtFQUNDLGdCQUFnQjtDQUNqQjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVye1xyXG5cdHBhZGRpbmc6IDQwcHggMTUwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzM0NEU0MTtcclxuXHRjb2xvcjogI0RBRDdDRDtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jb3B5cmlnaHQge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Z2FwOiAxMHB4O1xyXG59XHJcblxyXG4uZGV2ZWxvcGVyIGF7XHJcblx0Y29sb3I6ICNEQUQ3Q0Q7O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0ZmlsdGVyOiBicmlnaHRuZXNzKDEpO1xyXG5cdHRyYW5zaXRpb246IC4zcztcclxufVxyXG5cclxuLmRldmVsb3BlciBhOmhvdmVye1xyXG5cdGZpbHRlcjogYnJpZ2h0bmVzcygxLjUpO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiAxMDI0cHgpe1xyXG5cdGZvb3RlcntcclxuXHRcdHBhZGRpbmc6IDQwcHggNDBweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cclxuXHQuY29weXJpZ2h0IHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cclxuXHQuZGV2ZWxvcGVye1xyXG5cdFx0bWFyZ2luLXRvcDogMTBweDtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7084:
/*!*************************************************************!*\
  !*** ./src/app/components/hamburger/hamburger.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HamburgerComponent": () => (/* binding */ HamburgerComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_hamburger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/hamburger.service */ 7273);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);






const _c0 = function (a0) {
  return {
    "show": a0
  };
};
const _c1 = function () {
  return ["/"];
};
class HamburgerComponent {
  constructor(hamburgerServide) {
    this.hamburgerServide = hamburgerServide;
    this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faTimes;
  }
  closeHamburger() {
    this.hamburgerServide.closeHamburger();
  }
}
HamburgerComponent.ɵfac = function HamburgerComponent_Factory(t) {
  return new (t || HamburgerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_hamburger_service__WEBPACK_IMPORTED_MODULE_0__.HamburgerService));
};
HamburgerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HamburgerComponent,
  selectors: [["app-hamburger"]],
  inputs: {
    isOpen: "isOpen"
  },
  decls: 16,
  vars: 8,
  consts: [[3, "ngClass"], [1, "icon"], [3, "icon", "click"], ["routerLink", "/", 3, "click"], ["routerLink", "/realizacje", 3, "click"], ["fragment", "kontakt", 3, "routerLink", "click"], ["fragment", "wspolpraca", 3, "routerLink", "click"]],
  template: function HamburgerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "span", 1)(2, "fa-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HamburgerComponent_Template_fa_icon_click_2_listener() {
        return ctx.closeHamburger();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul")(4, "li")(5, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HamburgerComponent_Template_a_click_5_listener() {
        return ctx.closeHamburger();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Strona g\u0142\u00F3wna");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li")(8, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HamburgerComponent_Template_a_click_8_listener() {
        return ctx.closeHamburger();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Realizacje");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li")(11, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HamburgerComponent_Template_a_click_11_listener() {
        return ctx.closeHamburger();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Kontakt");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li")(14, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HamburgerComponent_Template_a_click_14_listener() {
        return ctx.closeHamburger();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Wsp\u00F3\u0142praca");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, ctx.isOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faTimes);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent],
  styles: ["section[_ngcontent-%COMP%]{\r\n\tdisplay: none;\r\n\tposition: fixed;\r\n\tbackground-color: #344E41;\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\tz-index: 4;\r\n\ttransform: translateX(100%);\r\n\ttransition: .3s;\r\n}\r\n\r\nsection.show[_ngcontent-%COMP%]{\r\n\ttransform: translateX(0);\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]{\r\n\tposition: absolute;\r\n\tright: 50px;\r\n\ttop: 30px;\r\n\tfont-size: 70px;\r\n\tcolor: #DAD7CD;\r\n}\r\n\r\nul[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: space-evenly;\r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n\tlist-style: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n\tfont-size: 24px;\r\n\tcolor: #DAD7CD;\r\n\ttext-decoration: none;\r\n\tfont-weight: 700;\r\n}\r\n\r\n@media(max-width: 1024px) {\r\n\tsection[_ngcontent-%COMP%] {\r\n\t\tdisplay: block;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oYW1idXJnZXIvaGFtYnVyZ2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLHlCQUF5QjtDQUN6QixXQUFXO0NBQ1gsYUFBYTtDQUNiLFVBQVU7Q0FDViwyQkFBMkI7Q0FDM0IsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsU0FBUztDQUNULGVBQWU7Q0FDZixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixjQUFjO0NBQ2QscUJBQXFCO0NBQ3JCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDO0VBQ0MsY0FBYztDQUNmO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMzNDRFNDE7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuXHR6LWluZGV4OiA0O1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuXHR0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuXHJcbnNlY3Rpb24uc2hvd3tcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbn1cclxuXHJcbi5pY29ue1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRyaWdodDogNTBweDtcclxuXHR0b3A6IDMwcHg7XHJcblx0Zm9udC1zaXplOiA3MHB4O1xyXG5cdGNvbG9yOiAjREFEN0NEO1xyXG59XHJcblxyXG51bHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbmxpe1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmF7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdGNvbG9yOiAjREFEN0NEO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuXHRzZWN0aW9uIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_hamburger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/hamburger.service */ 7273);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);





const _c0 = function () {
  return ["/"];
};
class HeaderComponent {
  constructor(hamburgerService) {
    this.hamburgerService = hamburgerService;
    this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faBars;
  }
  openHamburger() {
    this.hamburgerService.openHamburger();
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_hamburger_service__WEBPACK_IMPORTED_MODULE_0__.HamburgerService));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 15,
  vars: 5,
  consts: [["routerLink", "/"], ["src", "../../../assets/images/logo.png", "alt", "#"], ["routerLink", "/realizacje"], ["fragment", "kontakt", 3, "routerLink"], ["fragment", "wspolpraca", 3, "routerLink"], [3, "click"], [3, "icon"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header")(1, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul")(4, "li")(5, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Realizacje");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li")(8, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Kontakt");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li")(11, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Wsp\u00F3\u0142praca");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_13_listener() {
        return ctx.openHamburger();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "fa-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faBars);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent],
  styles: ["header[_ngcontent-%COMP%] {\r\n\tposition: fixed;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tpadding: 20px 150px;\r\n\theight: 100px;\r\n\twidth: 100%;\r\n\tbackground-color: #fff;\r\n\tz-index: 2;\r\n\tbox-shadow: rgba(149, 157, 165, 0.2) 0px 0px 24px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\theight: 70px;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tlist-style: none;\r\n\twidth: 180px;\r\n\ttext-align: center;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tfont-size: 28px;\r\n\ttext-decoration: none;\r\n\tcolor: #3A5A40;\r\n\tcursor: pointer;\r\n\tfilter: brightness(1);\r\n\ttransition: .3s;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n\tfilter: brightness(1.5);\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n\tbackground-color: transparent;\r\n\tdisplay: none;\r\n\tfont-size: 30px;\r\n\tborder: none;\r\n\tcolor: #3A5A40;\r\n}\r\n\r\n@media(max-width: 1400px) {\r\n\theader[_ngcontent-%COMP%] {\r\n\t\tpadding: 20px 50px;\r\n\t}\r\n}\r\n\r\n@media(max-width: 1024px) {\r\n\tbutton[_ngcontent-%COMP%] {\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\theader[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n\r\n@media(max-width: 640px) {\r\n\theader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n\t\theight: 40px;\r\n\t}\r\n}\r\n\r\n@media(max-width: 480px) {\r\n\theader[_ngcontent-%COMP%] {\r\n\t\tpadding: 20px 20px;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxlQUFlO0NBQ2YsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixXQUFXO0NBQ1gsc0JBQXNCO0NBQ3RCLFVBQVU7Q0FDVixpREFBaUQ7QUFDbEQ7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixxQkFBcUI7Q0FDckIsY0FBYztDQUNkLGVBQWU7Q0FDZixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLDZCQUE2QjtDQUM3QixhQUFhO0NBQ2IsZUFBZTtDQUNmLFlBQVk7Q0FDWixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQztFQUNDLGtCQUFrQjtDQUNuQjtBQUNEOztBQUVBO0NBQ0M7RUFDQyxjQUFjO0NBQ2Y7O0NBRUE7RUFDQyxhQUFhO0NBQ2Q7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsWUFBWTtDQUNiO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLGtCQUFrQjtDQUNuQjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAyMHB4IDE1MHB4O1xyXG5cdGhlaWdodDogMTAwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHR6LWluZGV4OiAyO1xyXG5cdGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggMHB4IDI0cHg7XHJcbn1cclxuXHJcbmhlYWRlciBhIGltZyB7XHJcblx0aGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG5oZWFkZXIgdWwge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbmhlYWRlciB1bCBsaSB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHR3aWR0aDogMTgwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oZWFkZXIgdWwgbGkgYSB7XHJcblx0Zm9udC1zaXplOiAyOHB4O1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRjb2xvcjogIzNBNUE0MDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ZmlsdGVyOiBicmlnaHRuZXNzKDEpO1xyXG5cdHRyYW5zaXRpb246IC4zcztcclxufVxyXG5cclxuaGVhZGVyIHVsIGxpIGE6aG92ZXIge1xyXG5cdGZpbHRlcjogYnJpZ2h0bmVzcygxLjUpO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0Zm9udC1zaXplOiAzMHB4O1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRjb2xvcjogIzNBNUE0MDtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogMTQwMHB4KSB7XHJcblx0aGVhZGVyIHtcclxuXHRcdHBhZGRpbmc6IDIwcHggNTBweDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDEwMjRweCkge1xyXG5cdGJ1dHRvbiB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcblxyXG5cdGhlYWRlciB1bCB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNjQwcHgpIHtcclxuXHRoZWFkZXIgYSBpbWd7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cdGhlYWRlciB7XHJcblx0XHRwYWRkaW5nOiAyMHB4IDIwcHg7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1837:
/*!***************************************************!*\
  !*** ./src/app/components/hero/hero.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroComponent": () => (/* binding */ HeroComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);




class HeroComponent {
  constructor(router) {
    this.router = router;
    this.faAngleDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faAngleDown;
  }
  toSection() {
    this.router.navigate([], {
      fragment: this.section
    });
  }
}
HeroComponent.ɵfac = function HeroComponent_Factory(t) {
  return new (t || HeroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
HeroComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HeroComponent,
  selectors: [["app-hero"]],
  inputs: {
    title: "title",
    desc: "desc",
    section: "section",
    path: "path"
  },
  decls: 8,
  vars: 4,
  consts: [["alt", "", 3, "src"], [3, "click"], [3, "icon"]],
  template: function HeroComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeroComponent_Template_span_click_6_listener() {
        return ctx.toSection();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "fa-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.desc);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faAngleDown);
    }
  },
  dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent],
  styles: ["section[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\tmin-height: 600px;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]:before {\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\tcontent: '';\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-color: #DAD7CD80;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tobject-fit: cover;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\ttext-align: center;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\ttop: 45%;\r\n\tfont-size: 60px;\r\n\tfont-weight: 500;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n\ttop: 55%;\r\n\tfont-size: 34px;\r\n\tfont-weight: 500;\r\n}\r\n\r\nsection[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tbottom: 100px;\r\n\tleft: 50%;\r\n\ttransform: translateX(-50%);\r\n\tcolor: #344E41;\r\n\tfont-size: 150px;\r\n\tcursor: pointer;\r\n\tanimation: _ngcontent-%COMP%_downArrow both 5s infinite;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_downArrow {\r\n\t0% {\r\n\t\ttransform: translate(-50%, 0);\r\n\t\topacity: 0;\r\n\t}\r\n\r\n\t10% {\r\n\t\ttransform: translate(-50%, 0);\r\n\t\topacity: 1;\r\n\t}\r\n\r\n\t90% {\r\n\t\ttransform: translate(-50%, 100px);\r\n\t\topacity: 1;\r\n\t}\r\n\r\n\t100% {\r\n\t\ttransform: translate(-50%, 100px);\r\n\t\topacity: 0;\r\n\t}\r\n}\r\n\r\n@media(max-width: 1024px) {\r\n\tsection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\t\ttop: 48%;\r\n\t\tfont-size: 30px;\r\n\t}\r\n\r\n\tsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n\t\ttop: 52%;\r\n\t\tfont-size: 16px;\r\n\t}\r\n\r\n\tsection[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\t\tfont-size: 70px;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZXJvL2hlcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsYUFBYTtDQUNiLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFdBQVc7Q0FDWCxZQUFZO0NBQ1osMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixpQkFBaUI7QUFDbEI7O0FBRUE7O0NBRUMsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsZ0NBQWdDO0NBQ2hDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFFBQVE7Q0FDUixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsUUFBUTtDQUNSLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLFNBQVM7Q0FDVCwyQkFBMkI7Q0FDM0IsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0M7RUFDQyw2QkFBNkI7RUFDN0IsVUFBVTtDQUNYOztDQUVBO0VBQ0MsNkJBQTZCO0VBQzdCLFVBQVU7Q0FDWDs7Q0FFQTtFQUNDLGlDQUFpQztFQUNqQyxVQUFVO0NBQ1g7O0NBRUE7RUFDQyxpQ0FBaUM7RUFDakMsVUFBVTtDQUNYO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLFFBQVE7RUFDUixlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsUUFBUTtFQUNSLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuXHRtaW4taGVpZ2h0OiA2MDBweDtcclxufVxyXG5cclxuc2VjdGlvbjpiZWZvcmUge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRjb250ZW50OiAnJztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0RBRDdDRDgwO1xyXG59XHJcblxyXG5zZWN0aW9uIGltZyB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG5zZWN0aW9uIGgxLFxyXG5zZWN0aW9uIGgzIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuc2VjdGlvbiBoMSB7XHJcblx0dG9wOiA0NSU7XHJcblx0Zm9udC1zaXplOiA2MHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbnNlY3Rpb24gaDMge1xyXG5cdHRvcDogNTUlO1xyXG5cdGZvbnQtc2l6ZTogMzRweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5zZWN0aW9uIHNwYW4ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3R0b206IDEwMHB4O1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblx0Y29sb3I6ICMzNDRFNDE7XHJcblx0Zm9udC1zaXplOiAxNTBweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0YW5pbWF0aW9uOiBkb3duQXJyb3cgYm90aCA1cyBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBkb3duQXJyb3cge1xyXG5cdDAlIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHR9XHJcblxyXG5cdDEwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG5cclxuXHQ5MCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwcHgpO1xyXG5cdFx0b3BhY2l0eTogMTtcclxuXHR9XHJcblxyXG5cdDEwMCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwcHgpO1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDEwMjRweCkge1xyXG5cdHNlY3Rpb24gaDEge1xyXG5cdFx0dG9wOiA0OCU7XHJcblx0XHRmb250LXNpemU6IDMwcHg7XHJcblx0fVxyXG5cclxuXHRzZWN0aW9uIGgzIHtcclxuXHRcdHRvcDogNTIlO1xyXG5cdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdH1cclxuXHJcblx0c2VjdGlvbiBzcGFuIHtcclxuXHRcdGZvbnQtc2l6ZTogNzBweDtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 385:
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/modal.service */ 1609);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);






class ModalComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faTimes;
    this.faAngleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faAngleLeft;
    this.faAngleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faAngleRight;
    this.src = '';
    this.src = `/assets/images/${this.modalService.getPhoto()}`;
  }
  closeModal() {
    this.modalService.closeModal();
  }
  previous() {
    this.src = `/assets/images/${this.modalService.previousPhoto()}`;
  }
  next() {
    this.src = `/assets/images/${this.modalService.nextPhoto()}`;
  }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) {
  return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_0__.ModalService));
};
ModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ModalComponent,
  selectors: [["app-modal"]],
  decls: 13,
  vars: 4,
  consts: [[1, "modal"], [1, "main"], [1, "heading"], [1, "times"], [1, "icon", 3, "click"], [3, "icon"], [1, "img"], ["alt", "", 3, "src"], [1, "navigation"], [1, "icon"], [3, "icon", "click"]],
  template: function ModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalComponent_Template_span_click_4_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "fa-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "section", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "section", 8)(9, "span", 9)(10, "fa-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalComponent_Template_fa_icon_click_10_listener() {
        return ctx.previous();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 9)(12, "fa-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalComponent_Template_fa_icon_click_12_listener() {
        return ctx.next();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faTimes);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faAngleLeft);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faAngleRight);
    }
  },
  dependencies: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent],
  styles: ["section.modal[_ngcontent-%COMP%]{\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\tbackground-color: #DAD7CD80;\r\n\t-webkit-backdrop-filter: blur(5px);\r\n\t        backdrop-filter: blur(5px);\r\n\tz-index: 3;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]{\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\tpadding: 30px 50px;\r\n\twidth: 90%;\r\n\theight: 90vh;\r\n\tborder-radius: 10px;\r\n\tbackground-color: #DAD7CD;\r\n\tbox-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\r\n\tcolor: #344E41;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n\talign-items: center;\r\n\tfont-size: 24px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{\r\n\tcursor: pointer;\r\n\tfont-size: 36px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\twidth: 100%;\r\n\theight: 85%;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\tmax-width: 100%;\r\n\tmax-height: 100%;\r\n\tborder-radius: 10px;\r\n\t-webkit-user-select: none;\r\n\t        user-select: none;\r\n\tobject-fit: contain;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tfont-size: 48px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n\tmargin: 0 10px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span.icon[_ngcontent-%COMP%]{\r\n\tcursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLE1BQU07Q0FDTixZQUFZO0NBQ1osYUFBYTtDQUNiLDJCQUEyQjtDQUMzQixrQ0FBMEI7U0FBMUIsMEJBQTBCO0NBQzFCLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsOEJBQThCO0NBQzlCLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsK0ZBQStGO0NBQy9GLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsbUJBQW1CO0NBQ25CLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsV0FBVztDQUNYLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLHlCQUFpQjtTQUFqQixpQkFBaUI7Q0FDakIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsZUFBZTtBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ubW9kYWx7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0d2lkdGg6IDEwMHZ3O1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0RBRDdDRDgwO1xyXG5cdGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG5cdHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi5tYWlue1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0cGFkZGluZzogMzBweCA1MHB4O1xyXG5cdHdpZHRoOiA5MCU7XHJcblx0aGVpZ2h0OiA5MHZoO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0RBRDdDRDtcclxuXHRib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCA1MHB4IDEwMHB4IC0yMHB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDMwcHggNjBweCAtMzBweDtcclxuXHRjb2xvcjogIzM0NEU0MTtcclxufVxyXG5cclxuLm1haW4gLmhlYWRpbmd7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4ubWFpbiAuaGVhZGluZyAuaWNvbntcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Zm9udC1zaXplOiAzNnB4O1xyXG59XHJcblxyXG4ubWFpbiAuaW1ne1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA4NSU7XHJcbn1cclxuXHJcbi5tYWluIC5pbWcgaW1nIHtcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0bWF4LWhlaWdodDogMTAwJTtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG5cdG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5tYWluIC5uYXZpZ2F0aW9uIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogNDhweDtcclxufVxyXG5cclxuLm1haW4gLm5hdmlnYXRpb24gc3BhbntcclxuXHRtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuLm1haW4gLm5hdmlnYXRpb24gc3Bhbi5pY29ue1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6517:
/*!*****************************************************************************!*\
  !*** ./src/app/components/portfolio-section/portfolio-section.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioSectionComponent": () => (/* binding */ PortfolioSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_realizations_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/realizations.service */ 6038);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




const _c0 = function (a1) {
  return ["/realizacja", a1];
};
function PortfolioSectionComponent_ng_container_4_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 5)(1, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const i_r2 = ctx_r4.index;
    const element_r1 = ctx_r4.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, i_r2 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "/assets/images/", element_r1.photos[0].src, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r1.category);
  }
}
function PortfolioSectionComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PortfolioSectionComponent_ng_container_4_a_1_Template, 5, 5, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r1.isPromoted);
  }
}
class PortfolioSectionComponent {
  constructor(realizationService) {
    this.realizationService = realizationService;
    this.realizations = [];
  }
  ngOnInit() {
    this.realizations = this.realizationService.getRealizations();
  }
}
PortfolioSectionComponent.ɵfac = function PortfolioSectionComponent_Factory(t) {
  return new (t || PortfolioSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_realizations_service__WEBPACK_IMPORTED_MODULE_0__.RealizationsService));
};
PortfolioSectionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PortfolioSectionComponent,
  selectors: [["app-portfolio-section"]],
  decls: 7,
  vars: 1,
  consts: [["id", "realizacje", 1, "main"], [1, "main-portfolio"], [4, "ngFor", "ngForOf"], ["routerLink", "/realizacje", 1, "link"], ["class", "element", 3, "routerLink", 4, "ngIf"], [1, "element", 3, "routerLink"], ["alt", "", 3, "src"], [1, "label"]],
  template: function PortfolioSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Realizacje");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PortfolioSectionComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Przejd\u017A do naszych realizacji");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.realizations);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: ["section.main[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\tmin-height: calc(100vh - 100px);\r\n\tpadding: 100px 150px;\r\n\tbackground-color: #344E41;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n\tfont-size: 60px;\r\n\tfont-weight: normal;\r\n\tcolor: #DAD7CD;\r\n}\r\n\r\n.main-portfolio[_ngcontent-%COMP%] {\r\n\tmargin: 30px 0;\r\n\theight: 100%;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(3, 1fr);\r\n\tgap: 50px;\r\n}\r\n\r\n.main-portfolio[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\tfilter: brightness(1);\r\n\ttransition: .3s;\r\n}\r\n\r\n.main-portfolio[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%]:hover {\r\n\tfilter: brightness(1.2);\r\n}\r\n\r\n.main-portfolio[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\theight: 400px;\r\n\tobject-fit: cover;\r\n\tobject-position: 50% 50%;\r\n\toverflow: hidden;\r\n\tborder-radius: 10px;\r\n}\r\n\r\n.main-portfolio[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tobject-fit: cover;\r\n}\r\n\r\n.label[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tbottom: 0;\r\n\twidth: 100%;\r\n\theight: 70px;\r\n\tbackground-color: #344E4199;\r\n\tfont-size: 34px;\r\n\tcolor: #DAD7CD;\r\n}\r\n\r\na.link[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\tcolor: #DAD7CD;\r\n\tfont-size: 31px;\r\n\tfont-weight: 700;\r\n\tfont-style: italic;\r\n\ttext-decoration: underline;\r\n}\r\n\r\n@media(max-width: 1400px) {\r\n\t.main-portfolio[_ngcontent-%COMP%]{\r\n\t\tgrid-template-columns: repeat(2, 50%);\r\n\t\tgap: 20px;\r\n\t}\r\n}\r\n\r\n@media(max-width: 1024px){\r\n\tsection.main[_ngcontent-%COMP%]{\r\n\t\tpadding: 40px 40px;\r\n\t}\r\n\r\n\th3[_ngcontent-%COMP%] {\r\n\t\tfont-size: 28px;\r\n\t}\r\n\r\n\t.main-portfolio[_ngcontent-%COMP%]{\r\n\t\tgrid-template-columns: repeat(1, 100%);\r\n\t}\r\n\t\r\n\t.main-portfolio[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%] {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.main-portfolio[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\r\n\t\theight: 300px;\r\n\t}\r\n\r\n\t.main-portfolio[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\tobject-fit: cover;\r\n\t}\r\n\r\n\t.label[_ngcontent-%COMP%] {\r\n\t\tfont-size: 20px;\r\n\t}\r\n\r\n\tsection[_ngcontent-%COMP%]   a.link[_ngcontent-%COMP%] {\r\n\t\tfont-size: 18px;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8tc2VjdGlvbi9wb3J0Zm9saW8tc2VjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsV0FBVztDQUNYLCtCQUErQjtDQUMvQixvQkFBb0I7Q0FDcEIseUJBQXlCO0NBQ3pCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsWUFBWTtDQUNaLGFBQWE7Q0FDYixxQ0FBcUM7Q0FDckMsU0FBUztBQUNWOztBQUVBO0NBQ0MsV0FBVztDQUNYLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQix3QkFBd0I7Q0FDeEIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsWUFBWTtDQUNaLDJCQUEyQjtDQUMzQixlQUFlO0NBQ2YsY0FBYztBQUNmOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQztFQUNDLHFDQUFxQztFQUNyQyxTQUFTO0NBQ1Y7QUFDRDs7QUFFQTtDQUNDO0VBQ0Msa0JBQWtCO0NBQ25COztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLHNDQUFzQztDQUN2Qzs7Q0FFQTtFQUNDLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLGFBQWE7Q0FDZDs7Q0FFQTtFQUNDLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ubWFpbiB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcclxuXHRwYWRkaW5nOiAxMDBweCAxNTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0RTQxO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbmgzIHtcclxuXHRmb250LXNpemU6IDYwcHg7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRjb2xvcjogI0RBRDdDRDtcclxufVxyXG5cclxuLm1haW4tcG9ydGZvbGlvIHtcclxuXHRtYXJnaW46IDMwcHggMDtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG5cdGdhcDogNTBweDtcclxufVxyXG5cclxuLm1haW4tcG9ydGZvbGlvIC5lbGVtZW50IHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRmaWx0ZXI6IGJyaWdodG5lc3MoMSk7XHJcblx0dHJhbnNpdGlvbjogLjNzO1xyXG59XHJcblxyXG4ubWFpbi1wb3J0Zm9saW8gLmVsZW1lbnQ6aG92ZXIge1xyXG5cdGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xyXG59XHJcblxyXG4ubWFpbi1wb3J0Zm9saW8gLmVsZW1lbnQgc2VjdGlvbiB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogNDAwcHg7XHJcblx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0b2JqZWN0LXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLm1haW4tcG9ydGZvbGlvIC5lbGVtZW50IGltZyB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Ym90dG9tOiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogNzBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0RTQxOTk7XHJcblx0Zm9udC1zaXplOiAzNHB4O1xyXG5cdGNvbG9yOiAjREFEN0NEO1xyXG59XHJcblxyXG5hLmxpbmsge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjb2xvcjogI0RBRDdDRDtcclxuXHRmb250LXNpemU6IDMxcHg7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDE0MDBweCkge1xyXG5cdC5tYWluLXBvcnRmb2xpb3tcclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDUwJSk7XHJcblx0XHRnYXA6IDIwcHg7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiAxMDI0cHgpe1xyXG5cdHNlY3Rpb24ubWFpbntcclxuXHRcdHBhZGRpbmc6IDQwcHggNDBweDtcclxuXHR9XHJcblxyXG5cdGgzIHtcclxuXHRcdGZvbnQtc2l6ZTogMjhweDtcclxuXHR9XHJcblxyXG5cdC5tYWluLXBvcnRmb2xpb3tcclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDEwMCUpO1xyXG5cdH1cclxuXHRcclxuXHQubWFpbi1wb3J0Zm9saW8gLmVsZW1lbnQge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQubWFpbi1wb3J0Zm9saW8gLmVsZW1lbnQgc2VjdGlvbiB7XHJcblx0XHRoZWlnaHQ6IDMwMHB4O1xyXG5cdH1cclxuXHJcblx0Lm1haW4tcG9ydGZvbGlvIC5lbGVtZW50IGltZyB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cdH1cclxuXHJcblx0LmxhYmVsIHtcclxuXHRcdGZvbnQtc2l6ZTogMjBweDtcclxuXHR9XHJcblxyXG5cdHNlY3Rpb24gYS5saW5rIHtcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9698:
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
const config = {
  "realizations": [{
    "category": 'Łazienka',
    "isPromoted": true,
    "description": 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo fugiat dolor magnam vel accusantium delectus corporis necessitatibus cum laboriosam non voluptatibus distinctio id ad vitae maxime, velit aliquam ipsum facere! Quod eveniet repellat doloremque eos nesciunt aut recusandae dignissimos? Numquam omnis alias quidem illum! Accusantium temporibus hic nam, laboriosam quibusdam eligendi harum magnam, autem, expedita dolorem inventore totam architecto aliquid!',
    "materials": ['drewno', 'stal', 'żelazo'],
    "photos": [{
      "src": 'hero-2.jpg'
    }, {
      "src": 'kitchen-1.jpg'
    }, {
      "src": 'main-1.jpg'
    }, {
      "src": 'main-1.jpg'
    }, {
      "src": 'main-2.jpg'
    }, {
      "src": 'main-3.jpg'
    }, {
      "src": 'hero-1.jpg'
    }],
    "videos": [{
      "src": 'main-1.MOV'
    }, {
      "src": 'main-1.MOV'
    }, {
      "src": 'main-1.MOV'
    }, {
      "src": 'main-1.MOV'
    }, {
      "src": 'main-1.MOV'
    }]
  }, {
    "category": 'Kuchnia',
    "isPromoted": true,
    "description": 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo fugiat dolor magnam vel accusantium delectus corporis necessitatibus cum laboriosam non',
    "materials": ['drewno buk', 'miedź', 'żelazo'],
    "photos": [{
      "src": 'hero-1.jpg'
    }, {
      "src": 'hero-2.jpg'
    }, {
      "src": 'kitchen-1.jpg'
    }, {
      "src": 'main-1.jpg'
    }, {
      "src": 'main-1.jpg'
    }, {
      "src": 'main-2.jpg'
    }, {
      "src": 'main-3.jpg'
    }],
    "videos": []
  }, {
    "category": 'Sypialnia',
    "isPromoted": false,
    "description": 'Explicabo fugiat dolor magnam vel accusantium delectus corporis necessitatibus cum laboriosam non voluptatibus distinctio id ad vitae maxime, velit aliquam ipsum facere! Quod eveniet repellat doloremque eos nesciunt aut recusandae dignissimos? Numquam omnis alias quidem illum! Accusantium temporibus hic nam, laboriosam quibusdam eligendi harum magnam, autem, expedita dolorem inventore totam architecto aliquid!',
    "materials": ['papier', 'stal', 'żelazo'],
    "photos": [{
      "src": 'main-1.jpg'
    }, {
      "src": 'hero-2.jpg'
    }, {
      "src": 'kitchen-1.jpg'
    }, {
      "src": 'main-1.jpg'
    }, {
      "src": 'main-1.jpg'
    }, {
      "src": 'main-2.jpg'
    }, {
      "src": 'main-3.jpg'
    }],
    "videos": [{
      "src": 'main-1.MOV'
    }, {
      "src": 'main-1.MOV'
    }, {
      "src": 'main-1.MOV'
    }, {
      "src": 'main-1.MOV'
    }]
  }, {
    "category": 'Łazienka',
    "isPromoted": false,
    "description": 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo fugiat dolor magnam vel accusantium delectus corporis necessitatibus cum laboriosam non voluptatibus distinctio id ad vitae maxime, velit aliquam ipsum facere! Quod eveniet repellat doloremque eos nesciunt aut recusandae dignissimos? Numquam omnis alias quidem illum! Accusantium temporibus hic nam, laboriosam quibusdam eligendi harum magnam, autem, expedita dolorem inventore totam architecto aliquid!',
    "materials": ['drewno', 'stal', 'ruda'],
    "photos": [{
      "src": 'hero-1.jpg'
    }, {
      "src": 'hero-2.jpg'
    }, {
      "src": 'kitchen-1.jpg'
    }, {
      "src": 'main-1.jpg'
    }, {
      "src": 'main-1.jpg'
    }, {
      "src": 'main-2.jpg'
    }, {
      "src": 'main-3.jpg'
    }],
    "videos": []
  }, {
    "category": 'Kuchnia',
    "isPromoted": true,
    "description": 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo fugiat dolor magnam vel accusantium delectus corporis necessitatibus cum laboriosam non voluptatibus distinctio id ad vitae maxime, velit aliquam ipsum facere! Quod eveniet repellat doloremque eos nesciunt aut recusandae dignissimos? Numquam omnis alias quidem illum! Accusantium temporibus hic nam, laboriosam quibusdam eligendi harum magnam, autem, expedita dolorem inventore totam architecto aliquid!',
    "materials": ['drewno', 'stal', 'żelazo'],
    "photos": [{
      "src": 'hero-1.jpg'
    }, {
      "src": 'hero-2.jpg'
    }, {
      "src": 'kitchen-1.jpg'
    }, {
      "src": 'main-1.jpg'
    }, {
      "src": 'main-1.jpg'
    }, {
      "src": 'main-2.jpg'
    }, {
      "src": 'main-3.jpg'
    }],
    "videos": []
  }, {
    "category": 'Pozostałe',
    "isPromoted": false,
    "description": 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo fugiat dolor magnam vel accusantium delectus corporis necessitatibus cum laboriosam non voluptatibus distinctio id ad vitae maxime, velit aliquam ipsum facere! Quod eveniet repellat doloremque eos nesciunt aut recusandae dignissimos? Numquam omnis alias quidem illum! Accusantium temporibus hic nam, laboriosam quibusdam eligendi harum magnam, autem, expedita dolorem inventore totam architecto aliquid!',
    "materials": ['drewno', 'stal', 'żelazo'],
    "photos": [{
      "src": 'hero-1.jpg'
    }, {
      "src": 'hero-2.jpg'
    }, {
      "src": 'kitchen-1.jpg'
    }, {
      "src": 'main-1.jpg'
    }, {
      "src": 'main-1.jpg'
    }, {
      "src": 'main-2.jpg'
    }, {
      "src": 'main-3.jpg'
    }],
    "videos": []
  }]
};

/***/ }),

/***/ 5245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/hero/hero.component */ 1837);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/about/about.component */ 2468);
/* harmony import */ var _components_portfolio_section_portfolio_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/portfolio-section/portfolio-section.component */ 6517);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/contact/contact.component */ 1782);
/* harmony import */ var _components_cooperation_cooperation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cooperation/cooperation.component */ 5516);






class HomeComponent {}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 5,
  vars: 2,
  consts: [["section", "o-nas", "path", "../../../assets/images/hero-1.jpg", 3, "title", "desc"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-hero", 0)(1, "app-about")(2, "app-portfolio-section")(3, "app-contact")(4, "app-cooperation");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", "PPHU STEFBUD")("desc", "Firma budowlana");
    }
  },
  dependencies: [_components_hero_hero_component__WEBPACK_IMPORTED_MODULE_0__.HeroComponent, _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _components_portfolio_section_portfolio_section_component__WEBPACK_IMPORTED_MODULE_2__.PortfolioSectionComponent, _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent, _components_cooperation_cooperation_component__WEBPACK_IMPORTED_MODULE_4__.CooperationComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5931:
/*!************************************************************************!*\
  !*** ./src/app/pages/porftolio-element/porftolio-element.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PorftolioElementComponent": () => (/* binding */ PorftolioElementComponent)
/* harmony export */ });
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/config */ 9698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/modal.service */ 1609);
/* harmony import */ var src_app_services_realizations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/realizations.service */ 6038);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hero/hero.component */ 1837);







function PorftolioElementComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r3);
  }
}
function PorftolioElementComponent_section_16_video_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "video", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "source", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", "/assets/video/" + element_r5.src, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function PorftolioElementComponent_section_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 9)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Filmy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PorftolioElementComponent_section_16_video_4_Template, 2, 1, "video", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.realizationsVideo);
  }
}
function PorftolioElementComponent_img_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PorftolioElementComponent_img_21_Template_img_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const i_r7 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.openModal(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const img_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", "assets/images/" + img_r6.src, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", img_r6.src);
  }
}
const _c0 = function () {
  return ["/realizacje"];
};
class PorftolioElementComponent {
  constructor(route, modalService, realizationService) {
    this.route = route;
    this.modalService = modalService;
    this.realizationService = realizationService;
    this.realizationsImg = [];
    this.realizationsVideo = [];
    this.id = this.route.snapshot.params['id'] - 1;
    this.realizationsImg = src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.realizations[this.id].photos;
    this.realizationsVideo = src_app_config__WEBPACK_IMPORTED_MODULE_0__.config.realizations[this.id].videos;
    this.modalService.setPhotos(this.realizationsImg);
    this.realization = this.realizationService.getRealizationById(this.id);
  }
  openModal(id) {
    this.modalService.openModal(id);
  }
}
PorftolioElementComponent.ɵfac = function PorftolioElementComponent_Factory(t) {
  return new (t || PorftolioElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_realizations_service__WEBPACK_IMPORTED_MODULE_2__.RealizationsService));
};
PorftolioElementComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PorftolioElementComponent,
  selectors: [["app-porftolio-element"]],
  decls: 25,
  vars: 10,
  consts: [["section", "realizacja", "path", "../../../assets/images/hero-1.jpg", 3, "title", "desc"], ["id", "realizacja", 1, "element"], [1, "main"], [1, "main-img"], ["alt", "", 3, "src"], [1, "desc"], [1, "materials"], [4, "ngFor", "ngForOf"], ["class", "photos", 4, "ngIf"], [1, "photos"], [1, "photos-container"], [3, "src", "alt", "click", 4, "ngFor", "ngForOf"], [1, "back"], [3, "routerLink"], ["controls", "", 4, "ngFor", "ngForOf"], ["controls", ""], ["type", "video/mp4", 3, "src"], [3, "src", "alt", "click"]],
  template: function PorftolioElementComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-hero", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 1)(2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Realizacja");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "section", 2)(5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Materia\u0142y:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, PorftolioElementComponent_li_15_Template, 2, 1, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, PorftolioElementComponent_section_16_Template, 5, 1, "section", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "section", 9)(18, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Zdj\u0119cia");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, PorftolioElementComponent_img_21_Template, 1, 2, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 12)(23, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Powr\u00F3t do realizacji");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Realizacja")("desc", "Nasza realizacja");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", "/assets/images/" + ctx.realization.photos[0].src, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Kategoria: ", ctx.realization.category, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Opis: ", ctx.realization.description, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.realization.materials);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.realizationsVideo.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.realizationsImg);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c0));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_3__.HeroComponent],
  styles: ["section.element[_ngcontent-%COMP%] {\r\n\tmin-height: 100vh;\r\n\tbackground-color: #DAD7CD;\r\n\tpadding: 100px 150px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n\tfont-size: 60px;\r\n\tfont-weight: normal;\r\n\tcolor: #344E41;\r\n\tmargin-bottom: 50px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tgap: 50px;\r\n}\r\n\r\n.main-img[_ngcontent-%COMP%] {\r\n\twidth: 50%;\r\n}\r\n\r\n.main-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tborder-radius: 10px;\r\n\tobject-fit: cover;\r\n}\r\n\r\n.desc[_ngcontent-%COMP%] {\r\n\tcolor: #344E41;\r\n\twidth: 50%;\r\n}\r\n\r\n.desc[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n\tfont-size: 30px;\r\n\tfont-weight: 300;\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 20px;\r\n\ttext-align: justify;\r\n\tfont-size: 24px;\r\n}\r\n\r\n.desc[_ngcontent-%COMP%]   p.materials[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 0px;\r\n\tfont-weight: 700;\r\n}\r\n\r\n.desc[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tfont-size: 24px;\r\n\tlist-style: none;\r\n}\r\n\r\n.photos[_ngcontent-%COMP%] {\r\n\tmargin-top: 50px;\r\n}\r\n\r\n.photos[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n\tfont-size: 48px;\r\n\tfont-weight: normal;\r\n\tcolor: #344E41;\r\n\tmargin-bottom: 25px;\r\n}\r\n\r\n.photos-container[_ngcontent-%COMP%]{\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(4, 1fr);\r\n\tgap: 25px;\r\n}\r\n\r\n.photos-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .photos-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\theight: 300px;\r\n\tobject-fit: cover;\r\n\tborder-radius: 10px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.photos-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{\r\n\tobject-fit: contain;\r\n}\r\n\r\n.back[_ngcontent-%COMP%]{\r\n\tpadding: 40px 0;\r\n\ttext-align: center;\r\n\twidth: 100%;\r\n\tbackground-color: #588157;\r\n}\r\n\r\n.back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n\tfont-size: 31px;\r\n\tfont-weight: normal;\r\n\tfont-style: italic;\r\n\ttext-decoration: underline;\r\n\tcolor: #fff;\r\n\tfilter: brightness(1);\r\n\ttransition: .3s;\r\n}\r\n\r\n.back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n\tfilter: brightness(0.8);\r\n}\r\n\r\n@media(max-width: 1400px) {\r\n\tsection.element[_ngcontent-%COMP%]{\r\n\t\tpadding: 100px 70px;\r\n\t}\r\n\t.photos-container[_ngcontent-%COMP%] {\r\n\t\tgrid-template-columns: repeat(2, 1fr);\r\n\t}\r\n}\r\n\r\n@media(max-width: 1200px) {\r\n\t.main[_ngcontent-%COMP%]{\r\n\t\tflex-direction: column;\r\n\t}\r\n\r\n\t.main-img[_ngcontent-%COMP%], .desc[_ngcontent-%COMP%]{\r\n\t\twidth: 100%;\r\n\t}\r\n}\r\n\r\n@media(max-width: 1024px) {\r\n\tsection.element[_ngcontent-%COMP%]{\r\n\t\tpadding: 40px\r\n\t}\r\n\r\n\th2[_ngcontent-%COMP%]{\r\n\t\tfont-size: 28px;\r\n\t\tmargin-bottom: 30px;\r\n\t}\r\n\r\n\t.main[_ngcontent-%COMP%]{\r\n\t\tflex-direction: column;\r\n\t\twidth: 100%;\r\n\t\tgap: 30px;\r\n\t}\r\n\r\n\t.main-img[_ngcontent-%COMP%], .desc[_ngcontent-%COMP%]{\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.desc[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n\t\tmargin-bottom: 15px;\r\n\t\tfont-size: 24px;\r\n\t}\r\n\r\n\t.desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\r\n\t.desc[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n\t\tfont-size: 18px;\r\n\t}\r\n\r\n\t.photos[_ngcontent-%COMP%]{\r\n\t\tmargin-top: 30px;\r\n\t}\r\n\r\n\t.photos[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n\t\tfont-size: 28px;\r\n\t\tmargin-bottom: 15px;\r\n\t}\r\n\r\n\t.back[_ngcontent-%COMP%]{\r\n\t\tpadding: 20px 0;\r\n\t}\r\n\t\r\n\t.back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n\t\tfont-size: 18px;\r\n\t}\r\n}\r\n\r\n@media(max-width: 640px){\r\n\t.photos-container[_ngcontent-%COMP%] {\r\n\t\tgrid-template-columns: repeat(1, 1fr);\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcG9yZnRvbGlvLWVsZW1lbnQvcG9yZnRvbGlvLWVsZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGlCQUFpQjtDQUNqQix5QkFBeUI7Q0FDekIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFNBQVM7QUFDVjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHFDQUFxQztDQUNyQyxTQUFTO0FBQ1Y7O0FBRUE7O0NBRUMsV0FBVztDQUNYLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQiwwQkFBMEI7Q0FDMUIsV0FBVztDQUNYLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0M7RUFDQyxtQkFBbUI7Q0FDcEI7Q0FDQTtFQUNDLHFDQUFxQztDQUN0QztBQUNEOztBQUVBO0NBQ0M7RUFDQyxzQkFBc0I7Q0FDdkI7O0NBRUE7O0VBRUMsV0FBVztDQUNaO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDO0NBQ0Q7O0NBRUE7RUFDQyxlQUFlO0VBQ2YsbUJBQW1CO0NBQ3BCOztDQUVBO0VBQ0Msc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxTQUFTO0NBQ1Y7O0NBRUE7O0VBRUMsV0FBVztDQUNaOztDQUVBO0VBQ0MsbUJBQW1CO0VBQ25CLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGdCQUFnQjtDQUNqQjs7Q0FFQTtFQUNDLGVBQWU7RUFDZixtQkFBbUI7Q0FDcEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjtBQUNEOztBQUVBO0NBQ0M7RUFDQyxxQ0FBcUM7Q0FDdEM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24uZWxlbWVudCB7XHJcblx0bWluLWhlaWdodDogMTAwdmg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0RBRDdDRDtcclxuXHRwYWRkaW5nOiAxMDBweCAxNTBweDtcclxufVxyXG5cclxuaDIge1xyXG5cdGZvbnQtc2l6ZTogNjBweDtcclxuXHRmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdGNvbG9yOiAjMzQ0RTQxO1xyXG5cdG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGdhcDogNTBweDtcclxufVxyXG5cclxuLm1haW4taW1nIHtcclxuXHR3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ubWFpbi1pbWcgaW1nIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmRlc2Mge1xyXG5cdGNvbG9yOiAjMzQ0RTQxO1xyXG5cdHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5kZXNjIGgzIHtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcblx0Zm9udC13ZWlnaHQ6IDMwMDtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZGVzYyBwIHtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdHRleHQtYWxpZ246IGp1c3RpZnk7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uZGVzYyBwLm1hdGVyaWFscyB7XHJcblx0bWFyZ2luLWJvdHRvbTogMHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5kZXNjIHVsIGxpIHtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnBob3RvcyB7XHJcblx0bWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLnBob3RvcyBoNCB7XHJcblx0Zm9udC1zaXplOiA0OHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0Y29sb3I6ICMzNDRFNDE7XHJcblx0bWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLnBob3Rvcy1jb250YWluZXJ7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG5cdGdhcDogMjVweDtcclxufVxyXG5cclxuLnBob3Rvcy1jb250YWluZXIgaW1nLFxyXG4ucGhvdG9zLWNvbnRhaW5lciB2aWRlb3tcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDMwMHB4O1xyXG5cdG9iamVjdC1maXQ6IGNvdmVyO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucGhvdG9zLWNvbnRhaW5lciB2aWRlb3tcclxuXHRvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG4uYmFja3tcclxuXHRwYWRkaW5nOiA0MHB4IDA7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM1ODgxNTc7XHJcbn1cclxuXHJcbi5iYWNrIGF7XHJcblx0Zm9udC1zaXplOiAzMXB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcclxuXHR0cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuXHJcbi5iYWNrIGE6aG92ZXJ7XHJcblx0ZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDE0MDBweCkge1xyXG5cdHNlY3Rpb24uZWxlbWVudHtcclxuXHRcdHBhZGRpbmc6IDEwMHB4IDcwcHg7XHJcblx0fVxyXG5cdC5waG90b3MtY29udGFpbmVyIHtcclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuXHQubWFpbntcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cclxuXHQubWFpbi1pbWcsXHJcblx0LmRlc2N7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDEwMjRweCkge1xyXG5cdHNlY3Rpb24uZWxlbWVudHtcclxuXHRcdHBhZGRpbmc6IDQwcHhcclxuXHR9XHJcblxyXG5cdGgye1xyXG5cdFx0Zm9udC1zaXplOiAyOHB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHR9XHJcblxyXG5cdC5tYWlue1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0Z2FwOiAzMHB4O1xyXG5cdH1cclxuXHJcblx0Lm1haW4taW1nLFxyXG5cdC5kZXNje1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQuZGVzYyBoM3tcclxuXHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0XHRmb250LXNpemU6IDI0cHg7XHJcblx0fVxyXG5cclxuXHQuZGVzYyBwIHtcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHR9XHJcblxyXG5cdC5kZXNjIHVsIGxpe1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdH1cclxuXHJcblx0LnBob3Rvc3tcclxuXHRcdG1hcmdpbi10b3A6IDMwcHg7XHJcblx0fVxyXG5cclxuXHQucGhvdG9zIGg0e1xyXG5cdFx0Zm9udC1zaXplOiAyOHB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHR9XHJcblxyXG5cdC5iYWNre1xyXG5cdFx0cGFkZGluZzogMjBweCAwO1xyXG5cdH1cclxuXHRcclxuXHQuYmFjayBhe1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNjQwcHgpe1xyXG5cdC5waG90b3MtY29udGFpbmVyIHtcclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9804:
/*!********************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioComponent": () => (/* binding */ PortfolioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/hero/hero.component */ 1837);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search/search.component */ 6531);



class PortfolioComponent {}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
  return new (t || PortfolioComponent)();
};
PortfolioComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PortfolioComponent,
  selectors: [["app-portfolio"]],
  decls: 2,
  vars: 2,
  consts: [["section", "portfolio", "path", "../../../assets/images/hero-2.jpg", 3, "title", "desc"]],
  template: function PortfolioComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-hero", 0)(1, "app-search");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Realizacje")("desc", "Nasze realizacje");
    }
  },
  dependencies: [_components_hero_hero_component__WEBPACK_IMPORTED_MODULE_0__.HeroComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_1__.SearchComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6531:
/*!************************************************************!*\
  !*** ./src/app/pages/portfolio/search/search.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_realizations_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/realizations.service */ 6038);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




const _c0 = ["category"];
const _c1 = ["element"];
function SearchComponent_a_25_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Liczba film\u00F3w: ", element_r6.videos.length, "");
  }
}
const _c2 = function (a1) {
  return ["/realizacja", a1];
};
function SearchComponent_a_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12, 13)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SearchComponent_a_25_span_8_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c2, i_r7 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-category", element_r6.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r6.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/assets/images/" + element_r6.photos[0].src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Liczba zdj\u0119\u0107: ", element_r6.photos.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r6.videos.length);
  }
}
class SearchComponent {
  constructor(realizationService) {
    this.realizationService = realizationService;
    this.category = 'ALL';
    this.realizations = this.realizationService.getRealizations();
  }
  setCategory(category) {
    this.category = category;
    this.filterCategories();
    this.removeClass();
    this.addClass();
  }
  filterCategories() {
    for (let element of this.elements._results) {
      const elementCategory = element.nativeElement.getAttribute('data-category');
      if (this.category === elementCategory || this.category === 'Wszystkie') {
        element.nativeElement.classList.remove('hidden');
      } else {
        element.nativeElement.classList.add('hidden');
      }
    }
  }
  removeClass() {
    for (let element of this.buttons._results) {
      element.nativeElement.classList.remove('active');
    }
  }
  addClass() {
    for (let element of this.buttons._results) {
      const category = element.nativeElement.getAttribute('data-category');
      if (category === this.category) element.nativeElement.classList.add('active');
    }
  }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) {
  return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_realizations_service__WEBPACK_IMPORTED_MODULE_0__.RealizationsService));
};
SearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SearchComponent,
  selectors: [["app-search"]],
  viewQuery: function SearchComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.buttons = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.elements = _t);
    }
  },
  decls: 28,
  vars: 1,
  consts: [["id", "portfolio"], [1, "filter"], [1, "categories"], ["data-category", "Wszystkie", 1, "category", "active", 3, "click"], ["category", ""], ["data-category", "Kuchnia", 1, "category", 3, "click"], ["data-category", "\u0141azienka", 1, "category", 3, "click"], ["data-category", "Sypialnia", 1, "category", 3, "click"], ["data-category", "Pozosta\u0142e", 1, "category", 3, "click"], [1, "elements"], ["class", "element", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "contact"], [1, "element", 3, "routerLink"], ["element", ""], [1, "heading"], ["alt", "", 3, "src"], [1, "label"], [4, "ngIf"]],
  template: function SearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Realizacje");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Witamy na stronie z realizacjami ni\u017Cej mo\u017Cesz zobaczy\u0107 projekty przeprowadzone przez nasz\u0105 firm\u0119 po klikni\u0119ciu w grafik\u0119 otworzy si\u0119 galeria zdj\u0119\u0107 mo\u017Cesz r\u00F3wnie\u017C posortowa\u0107 projekty po kategorii.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1)(6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Wybierz kategorie:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2)(9, "button", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_9_listener() {
        return ctx.setCategory("Wszystkie");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Wszystkie");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 5, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_12_listener() {
        return ctx.setCategory("Kuchnia");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Kuchnie");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 6, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_15_listener() {
        return ctx.setCategory("\u0141azienka");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u0141azienki");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 7, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_18_listener() {
        return ctx.setCategory("Sypialnia");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Sypialnie");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 8, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_21_listener() {
        return ctx.setCategory("Pozosta\u0142e");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Pozosta\u0142e");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SearchComponent_a_25_Template, 9, 8, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Zapraszamy do kontaktu");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.realizations);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: ["section[_ngcontent-%COMP%] {\r\n\tpadding: 100px 150px;\r\n\twidth: 100%;\r\n\tmin-height: calc(100vh - 100px);\r\n\tbackground-color: #344E41;\r\n\tcolor: #DAD7CD;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n\tfont-size: 60px;\r\n\tfont-weight: normal;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n\tmargin-top: 20px;\r\n\tfont-size: 40px;\r\n\ttext-align: justify;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%] {\r\n\tmargin-top: 100px;\r\n}\r\n\r\n.categories[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tgap: 40px;\r\n\tmargin-top: 50px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n\tpadding: 20px 55px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tbackground-color: #344E41;\r\n\tfont-size: 24px;\r\n\tborder: 2px solid #DAD7CD;\r\n\tborder-radius: 10px;\r\n\tcolor: #DAD7CD;\r\n\tcursor: pointer;\r\n\tfilter: brightness(1);\r\n\ttransition: .3s;\r\n}\r\n\r\nbutton.active[_ngcontent-%COMP%] {\r\n\tbackground-color: #588157;\r\n\tcolor: #fff;\r\n\tborder-color: #fff;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n\tfilter: brightness(1.3);\r\n}\r\n\r\n.elements[_ngcontent-%COMP%] {\r\n\tmargin-top: 50px;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(3, 1fr);\r\n\twidth: 100%;\r\n\tgap: 40px;\r\n}\r\n\r\n.element[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\tborder-radius: 10px;\r\n\toverflow: hidden;\r\n\tfilter: brightness(1);\r\n\ttransition: .3s;\r\n}\r\n\r\n.element.hidden[_ngcontent-%COMP%]{\r\n\tdisplay: none;\r\n}\r\n\r\n.element[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.element[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tpadding: 10px;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\tfont-size: 24px;\r\n\tbackground-color: #DAD7CD;\r\n\tfont-weight: 400;\r\n\tcolor: #344E41;\r\n}\r\n\r\n.element[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tpadding: 10px 20px;\r\n\twidth: 100%;\r\n\tbottom: 0;\r\n\tbackground-color: #344E4199;\r\n\tfont-size: 20px;\r\n\tfont-weight: 300;\r\n\tcolor: #fff;\r\n}\r\n\r\n.element[_ngcontent-%COMP%]:hover {\r\n\tfilter: brightness(1.2);\r\n}\r\n\r\n.contact[_ngcontent-%COMP%] {\r\n\tbackground-color: #DAD7CD;\r\n\tpadding: 50px 0;\r\n\ttext-align: center;\r\n\tfont-size: 48px;\r\n\tcolor: #344E41;\r\n}\r\n\r\n@media(max-width: 1450px) {\r\n\t.elements[_ngcontent-%COMP%] {\r\n\t\tgrid-template-columns: repeat(2, 1fr);\r\n\t}\r\n}\r\n\r\n@media(max-width: 1024px) {\r\n\tsection[_ngcontent-%COMP%] {\r\n\t\tpadding: 40px;\r\n\t}\r\n\r\n\tsection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\t\tfont-size: 28px;\r\n\t}\r\n\r\n\tsection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\r\n\t.filter[_ngcontent-%COMP%] {\r\n\t\tmargin-top: 30px;\r\n\t}\r\n\r\n\t.categories[_ngcontent-%COMP%] {\r\n\t\tmargin-top: 20px;\r\n\t\tgap: 15px;\r\n\t}\r\n\r\n\tbutton[_ngcontent-%COMP%] {\r\n\t\tpadding: 10px 20px;\r\n\t\tfont-size: 18px;\r\n\t}\r\n\r\n\t.element[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{\r\n\t\tfont-size: 18px;\r\n\t}\r\n\r\n\t.element[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{\r\n\t\tfont-size: 14px;\r\n\t}\r\n\r\n\t.contact[_ngcontent-%COMP%]{\r\n\t\tpadding: 30px 10px;\r\n\t\tfont-size: 32px;\r\n\t}\r\n}\r\n\r\n@media(max-width: 640px){\r\n\t.elements[_ngcontent-%COMP%] {\r\n\t\tgrid-template-columns: repeat(1, 1fr);\r\n\t}\r\n}\r\n\r\n@media(max-width: 359px){\r\n\t.element[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{\r\n\t\tfont-size: 11px;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcG9ydGZvbGlvL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLG9CQUFvQjtDQUNwQixXQUFXO0NBQ1gsK0JBQStCO0NBQy9CLHlCQUF5QjtDQUN6QixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLFNBQVM7Q0FDVCxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLGVBQWU7Q0FDZix5QkFBeUI7Q0FDekIsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxlQUFlO0NBQ2YscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsV0FBVztDQUNYLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IscUNBQXFDO0NBQ3JDLFdBQVc7Q0FDWCxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixNQUFNO0NBQ04sV0FBVztDQUNYLGVBQWU7Q0FDZix5QkFBeUI7Q0FDekIsZ0JBQWdCO0NBQ2hCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFNBQVM7Q0FDVCwyQkFBMkI7Q0FDM0IsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsY0FBYztBQUNmOztBQUVBO0NBQ0M7RUFDQyxxQ0FBcUM7Q0FDdEM7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsYUFBYTtDQUNkOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxnQkFBZ0I7Q0FDakI7O0NBRUE7RUFDQyxnQkFBZ0I7RUFDaEIsU0FBUztDQUNWOztDQUVBO0VBQ0Msa0JBQWtCO0VBQ2xCLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGtCQUFrQjtFQUNsQixlQUFlO0NBQ2hCO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLHFDQUFxQztDQUN0QztBQUNEOztBQUVBO0NBQ0M7RUFDQyxlQUFlO0NBQ2hCO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuXHRwYWRkaW5nOiAxMDBweCAxNTBweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMzNDRFNDE7XHJcblx0Y29sb3I6ICNEQUQ3Q0Q7XHJcbn1cclxuXHJcbmgyIHtcclxuXHRmb250LXNpemU6IDYwcHg7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxucCB7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxuXHRmb250LXNpemU6IDQwcHg7XHJcblx0dGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLmZpbHRlciB7XHJcblx0bWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRnYXA6IDQwcHg7XHJcblx0bWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuXHRwYWRkaW5nOiAyMHB4IDU1cHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMzNDRFNDE7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkICNEQUQ3Q0Q7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRjb2xvcjogI0RBRDdDRDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ZmlsdGVyOiBicmlnaHRuZXNzKDEpO1xyXG5cdHRyYW5zaXRpb246IC4zcztcclxufVxyXG5cclxuYnV0dG9uLmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzU4ODE1NztcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRib3JkZXItY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcblx0ZmlsdGVyOiBicmlnaHRuZXNzKDEuMyk7XHJcbn1cclxuXHJcbi5lbGVtZW50cyB7XHJcblx0bWFyZ2luLXRvcDogNTBweDtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Z2FwOiA0MHB4O1xyXG59XHJcblxyXG4uZWxlbWVudCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRmaWx0ZXI6IGJyaWdodG5lc3MoMSk7XHJcblx0dHJhbnNpdGlvbjogLjNzO1xyXG59XHJcblxyXG4uZWxlbWVudC5oaWRkZW57XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmVsZW1lbnQgaW1nIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5lbGVtZW50IC5oZWFkaW5nIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0dG9wOiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZTogMjRweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjREFEN0NEO1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0Y29sb3I6ICMzNDRFNDE7XHJcbn1cclxuXHJcbi5lbGVtZW50IC5sYWJlbCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0cGFkZGluZzogMTBweCAyMHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJvdHRvbTogMDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0RTQxOTk7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiAzMDA7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5lbGVtZW50OmhvdmVyIHtcclxuXHRmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxufVxyXG5cclxuLmNvbnRhY3Qge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNEQUQ3Q0Q7XHJcblx0cGFkZGluZzogNTBweCAwO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXNpemU6IDQ4cHg7XHJcblx0Y29sb3I6ICMzNDRFNDE7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDE0NTBweCkge1xyXG5cdC5lbGVtZW50cyB7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogMTAyNHB4KSB7XHJcblx0c2VjdGlvbiB7XHJcblx0XHRwYWRkaW5nOiA0MHB4O1xyXG5cdH1cclxuXHJcblx0c2VjdGlvbiBoMiB7XHJcblx0XHRmb250LXNpemU6IDI4cHg7XHJcblx0fVxyXG5cclxuXHRzZWN0aW9uIHAge1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdH1cclxuXHJcblx0LmZpbHRlciB7XHJcblx0XHRtYXJnaW4tdG9wOiAzMHB4O1xyXG5cdH1cclxuXHJcblx0LmNhdGVnb3JpZXMge1xyXG5cdFx0bWFyZ2luLXRvcDogMjBweDtcclxuXHRcdGdhcDogMTVweDtcclxuXHR9XHJcblxyXG5cdGJ1dHRvbiB7XHJcblx0XHRwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0fVxyXG5cclxuXHQuZWxlbWVudCAuaGVhZGluZ3tcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHR9XHJcblxyXG5cdC5lbGVtZW50IC5sYWJlbHtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHR9XHJcblxyXG5cdC5jb250YWN0e1xyXG5cdFx0cGFkZGluZzogMzBweCAxMHB4O1xyXG5cdFx0Zm9udC1zaXplOiAzMnB4O1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNjQwcHgpe1xyXG5cdC5lbGVtZW50cyB7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogMzU5cHgpe1xyXG5cdC5lbGVtZW50IC5sYWJlbHtcclxuXHRcdGZvbnQtc2l6ZTogMTFweDtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7273:
/*!***********************************************!*\
  !*** ./src/app/services/hamburger.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HamburgerService": () => (/* binding */ HamburgerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class HamburgerService {
  constructor() {
    this.changeIsOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  openHamburger() {
    this.changeIsOpen.emit(true);
  }
  closeHamburger() {
    this.changeIsOpen.emit(false);
  }
}
HamburgerService.ɵfac = function HamburgerService_Factory(t) {
  return new (t || HamburgerService)();
};
HamburgerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: HamburgerService,
  factory: HamburgerService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1609:
/*!*******************************************!*\
  !*** ./src/app/services/modal.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalService": () => (/* binding */ ModalService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class ModalService {
  constructor() {
    this.i = 0;
    this.id = 0;
    this.realizationsImg = [];
    this.changeIsOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  openModal(id) {
    this.changeIsOpen.emit(true);
    this.id = id;
  }
  closeModal() {
    this.changeIsOpen.emit(false);
  }
  setPhotos(realizationImg) {
    this.realizationsImg = realizationImg;
  }
  getPhoto() {
    return this.realizationsImg[this.id].src;
  }
  previousPhoto() {
    if (this.id === 0) {
      this.id = this.realizationsImg.length - 1;
    } else {
      this.id--;
    }
    return this.realizationsImg[this.id].src;
  }
  nextPhoto() {
    if (this.id === this.realizationsImg.length - 1) {
      this.id = 0;
    } else {
      this.id++;
    }
    return this.realizationsImg[this.id].src;
  }
}
ModalService.ɵfac = function ModalService_Factory(t) {
  return new (t || ModalService)();
};
ModalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ModalService,
  factory: ModalService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6038:
/*!**************************************************!*\
  !*** ./src/app/services/realizations.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RealizationsService": () => (/* binding */ RealizationsService)
/* harmony export */ });
/* harmony import */ var _dist_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../dist/config.json */ 6072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class RealizationsService {
  constructor() {
    this.realizations = _dist_config_json__WEBPACK_IMPORTED_MODULE_0__;
  }
  // realizations = []
  getRealizations() {
    return this.realizations;
  }
  getRealizationById(id) {
    return this.realizations[id];
  }
}
RealizationsService.ɵfac = function RealizationsService_Factory(t) {
  return new (t || RealizationsService)();
};
RealizationsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RealizationsService,
  factory: RealizationsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 6072:
/*!**************************!*\
  !*** ./dist/config.json ***!
  \**************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"category":"Łazienka","isPromoted":true,"description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo fugiat dolor magnam vel accusantium delectus corporis necessitatibus cum laboriosam non voluptatibus distinctio id ad vitae maxime, velit aliquam ipsum facere! Quod eveniet repellat doloremque eos nesciunt aut recusandae dignissimos? Numquam omnis alias quidem illum! Accusantium temporibus hic nam, laboriosam quibusdam eligendi harum magnam, autem, expedita dolorem inventore totam architecto aliquid!","materials":["drewno","stal","żelazo"],"photos":[{"src":"hero-2.jpg"},{"src":"kitchen-1.jpg"},{"src":"main-1.jpg"},{"src":"main-1.jpg"},{"src":"main-2.jpg"},{"src":"main-3.jpg"},{"src":"hero-1.jpg"}],"videos":[{"src":"main-1.MOV"},{"src":"main-1.MOV"},{"src":"main-1.MOV"},{"src":"main-1.MOV"},{"src":"main-1.MOV"}]},{"category":"Kuchnia","isPromoted":true,"description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo fugiat dolor magnam vel accusantium delectus corporis necessitatibus cum laboriosam non","materials":["drewno buk","miedź","żelazo"],"photos":[{"src":"hero-1.jpg"},{"src":"hero-2.jpg"},{"src":"kitchen-1.jpg"},{"src":"main-1.jpg"},{"src":"main-1.jpg"},{"src":"main-2.jpg"},{"src":"main-3.jpg"}],"videos":[]},{"category":"Sypialnia","isPromoted":false,"description":"Explicabo fugiat dolor magnam vel accusantium delectus corporis necessitatibus cum laboriosam non voluptatibus distinctio id ad vitae maxime, velit aliquam ipsum facere! Quod eveniet repellat doloremque eos nesciunt aut recusandae dignissimos? Numquam omnis alias quidem illum! Accusantium temporibus hic nam, laboriosam quibusdam eligendi harum magnam, autem, expedita dolorem inventore totam architecto aliquid!","materials":["papier","stal","żelazo"],"photos":[{"src":"main-1.jpg"},{"src":"hero-2.jpg"},{"src":"kitchen-1.jpg"},{"src":"main-1.jpg"},{"src":"main-1.jpg"},{"src":"main-2.jpg"},{"src":"main-3.jpg"}],"videos":[{"src":"main-1.MOV"},{"src":"main-1.MOV"},{"src":"main-1.MOV"},{"src":"main-1.MOV"}]},{"category":"Łazienka","isPromoted":false,"description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo fugiat dolor magnam vel accusantium delectus corporis necessitatibus cum laboriosam non voluptatibus distinctio id ad vitae maxime, velit aliquam ipsum facere! Quod eveniet repellat doloremque eos nesciunt aut recusandae dignissimos? Numquam omnis alias quidem illum! Accusantium temporibus hic nam, laboriosam quibusdam eligendi harum magnam, autem, expedita dolorem inventore totam architecto aliquid!","materials":["drewno","stal","ruda"],"photos":[{"src":"hero-1.jpg"},{"src":"hero-2.jpg"},{"src":"kitchen-1.jpg"},{"src":"main-1.jpg"},{"src":"main-1.jpg"},{"src":"main-2.jpg"},{"src":"main-3.jpg"}],"videos":[]},{"category":"Kuchnia","isPromoted":true,"description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo fugiat dolor magnam vel accusantium delectus corporis necessitatibus cum laboriosam non voluptatibus distinctio id ad vitae maxime, velit aliquam ipsum facere! Quod eveniet repellat doloremque eos nesciunt aut recusandae dignissimos? Numquam omnis alias quidem illum! Accusantium temporibus hic nam, laboriosam quibusdam eligendi harum magnam, autem, expedita dolorem inventore totam architecto aliquid!","materials":["drewno","stal","żelazo"],"photos":[{"src":"hero-1.jpg"},{"src":"hero-2.jpg"},{"src":"kitchen-1.jpg"},{"src":"main-1.jpg"},{"src":"main-1.jpg"},{"src":"main-2.jpg"},{"src":"main-3.jpg"}],"videos":[]},{"category":"Pozostałe","isPromoted":false,"description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo fugiat dolor magnam vel accusantium delectus corporis necessitatibus cum laboriosam non voluptatibus distinctio id ad vitae maxime, velit aliquam ipsum facere! Quod eveniet repellat doloremque eos nesciunt aut recusandae dignissimos? Numquam omnis alias quidem illum! Accusantium temporibus hic nam, laboriosam quibusdam eligendi harum magnam, autem, expedita dolorem inventore totam architecto aliquid!","materials":["drewno","stal","żelazo"],"photos":[{"src":"hero-1.jpg"},{"src":"hero-2.jpg"},{"src":"kitchen-1.jpg"},{"src":"main-1.jpg"},{"src":"main-1.jpg"},{"src":"main-2.jpg"},{"src":"main-3.jpg"}],"videos":[]}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map