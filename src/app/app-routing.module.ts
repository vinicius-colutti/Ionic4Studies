import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'component-slides',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'instalacao', loadChildren: './instalacao/instalacao.module#InstalacaoPageModule' },
  { path: 'layout', loadChildren: './layout/layout.module#LayoutPageModule' },
  { path: 'header-efooter', loadChildren: './header-efooter/header-efooter.module#HeaderEFooterPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },
  { path: 'grids', loadChildren: './grids/grids.module#GridsPageModule' },
  { path: 'css-utilities', loadChildren: './css-utilities/css-utilities.module#CssUtilitiesPageModule' },
  { path: 'componentes', loadChildren: './componentes/componentes.module#ComponentesPageModule' },
  { path: 'component-action-sheet', loadChildren: './component-action-sheet/component-action-sheet.module#ComponentActionSheetPageModule' },
  { path: 'component-alert', loadChildren: './component-alert/component-alert.module#ComponentAlertPageModule' },
  { path: 'component-fabs', loadChildren: './component-fabs/component-fabs.module#ComponentFabsPageModule' },
  { path: 'component-input', loadChildren: './component-input/component-input.module#ComponentInputPageModule' },
  { path: 'component-list', loadChildren: './component-list/component-list.module#ComponentListPageModule' },
  { path: 'component-loading', loadChildren: './component-loading/component-loading.module#ComponentLoadingPageModule' },
  { path: 'component-modal', loadChildren: './component-modal/component-modal.module#ComponentModalPageModule' },
  { path: 'component-modal-interno', loadChildren: './component-modal-interno/component-modal-interno.module#ComponentModalInternoPageModule' },
  { path: 'component-range', loadChildren: './component-range/component-range.module#ComponentRangePageModule' },
  { path: 'component-select', loadChildren: './component-select/component-select.module#ComponentSelectPageModule' },
  { path: 'component-slides', loadChildren: './component-slides/component-slides.module#ComponentSlidesPageModule' },
  { path: 'component-spinner', loadChildren: './component-spinner/component-spinner.module#ComponentSpinnerPageModule' },
  { path: 'component-toast', loadChildren: './component-toast/component-toast.module#ComponentToastPageModule' },
  { path: 'component-infinit-scroll', loadChildren: './component-infinit-scroll/component-infinit-scroll.module#ComponentInfinitScrollPageModule' },
  { path: 'component-popover', loadChildren: './component-popover/component-popover.module#ComponentPopoverPageModule' },
  { path: 'component-refresher', loadChildren: './component-refresher/component-refresher.module#ComponentRefresherPageModule' },
  { path: 'component-search-bar', loadChildren: './component-search-bar/component-search-bar.module#ComponentSearchBarPageModule' },
  { path: 'component-toggle', loadChildren: './component-toggle/component-toggle.module#ComponentTogglePageModule' },
  { path: 'api-externa', loadChildren: './api-externa/api-externa.module#ApiExternaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
