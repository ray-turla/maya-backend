export const routes = [
  {
    path: 'sample',
    loadChildren: () => import('./modules/sample/sample.module').then(m=>m.SampleModule),
  },
];
