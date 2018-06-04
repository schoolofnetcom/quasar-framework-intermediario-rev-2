
export default [
  {
    path: '/',
    component: () => import('layouts/dark'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },
  {
    path: '/products',
    component: () => import('layouts/dark'),
    children: [
      { path: '', component: () => import('pages/products/list') }
    ]
  },
  {
    path: '/products/create',
    component: () => import('layouts/dark'),
    children: [
      { path: '', component: () => import('pages/products/create') }
    ]
  },
  {
    path: '/products/:id',
    component: () => import('layouts/dark'),
    children: [
      { path: '', component: () => import('pages/products/details') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
