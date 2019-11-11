// import { lazy } from 'react'
import PageLogin from '../src/pages/auth/page/page-login.page'
import PageHome from '../src/pages/home/page/page-home.page'
import PageKontak from '../src/pages/kontak/page/page-kontak.page'
// import PagePengumuman from '../src/pages/pengumuman/page/page-pengumuman.page'
import PageRegistrasiInstansi from '../src/pages/registrasi-instansi/page/page-registrasi-instansi.page'
import PageRegistrasiPenyedia from '../src/pages/registrasi-penyedia/page/page-registrasi-penyedia.page'
import PageDashboard from '../src/pages/dashboard/page/page-dashboard.page'
import PageListUser from '../src/pages/user/page/page-list-user.page'
import PageListRegistrasiInstansi from '../src/pages/registrasi-instansi/page/page-list-registrasi-instansi.page'
import PageListRegistrasiPenyedia from '../src/pages/registrasi-penyedia/page/page-list-registrasi-penyedia.page'
// import PageListRole from '../src/pages/role/page/page-list-role.page'
// import PageListPermission from '../src/pages/permission/page/page-list-permission.page'
// import PageListPengumuman from '../src/pages/pengumuman/page/page-list-pengumuman.page'
// import PageCreatePengumuman from '../src/pages/pengumuman/page/page-create-pengumuman.page'
// import PageEditPengumuman from '../src/pages/pengumuman/page/page-edit-pengumuman.page'
// import PageViewPengumuman from '../src/pages/pengumuman/page/page-view-pengumuman.page'
import PageBlockListHomeImageSlider from '../src/pages/block/page/page-block-list-home-image-slider.page'


export const Routes = [
  {
    path: '/auth/login',
    exact: true,
    component: PageLogin,
    routes: []
  },
  {
    path: '/',
    exact: true,
    component: PageHome,
    routes: []
  },
  {
    path: '/registrasi/instansi',
    exact: true,
    component: PageRegistrasiInstansi,
    routes: []
  },
  {
    path: '/registrasi/penyedia',
    exact: true,
    component: PageRegistrasiPenyedia,
    routes: []
  },
  // {
  //   path: '/pengumuman',
  //   exact: true,
  //   component: PagePengumuman,
  //   routes: []
  // },
  // {
  //   path: '/pengumuman/:id',
  //   exact: true,
  //   component: PageViewPengumuman,
  //   routes: []
  // },
  {
    path: '/kontak',
    exact: true,
    component: PageKontak,
    routes: []
  },
  {
    path: '/dashboard',
    exact: false,
    component: PageDashboard,
    routes: [
      {
        path: '/dashboard/registrasi/instansi',
        exact: true,
        component: PageListRegistrasiInstansi,
        routes: []
      },
      {
        path: '/dashboard/registrasi/penyedia',
        exact: true,
        component: PageListRegistrasiPenyedia,
        routes: []
      },
      // {
      //   path: '/dashboard/pengumuman',
      //   exact: true,
      //   component: PageListPengumuman,
      //   routes: []
      // },
      // {
      //   path: '/dashboard/pengumuman/create',
      //   exact: true,
      //   component: PageCreatePengumuman,
      //   routes: []
      // },
      // // {
      // //   path: '/dashboard/pengumuman/view/:id',
      // //   exact: true,
      // //   component: PageViewPengumuman,
      // //   routes: []
      // // },
      // {
      //   path: '/dashboard/pengumuman/edit/:id',
      //   exact: true,
      //   component: PageEditPengumuman,
      //   routes: []
      // },
      // BLOCK CONTENT PAGES ROUTES
      {
        path: '/dashboard/block/home-image-slider',
        exact: true,
        component: PageBlockListHomeImageSlider,
        routes: []
      },

      // USER ROUTES
      {
        path: '/dashboard/user',
        exact: true,
        component: PageListUser,
        routes: []
      },

      // // ROLE ROUTES
      // {
      //   path: '/dashboard/role',
      //   exact: true,
      //   component: PageListRole,
      //   routes: []
      // },

      // // PERMISSION ROUTES
      // {
      //   path: '/dashboard/permission',
      //   exact: true,
      //   component: PageListPermission,
      //   routes: []
      // },
    ]
  },




  // {
  //   path: '/auth/login',
  //   exact: true,
  //   component: PageLogin,
  //   routes: []
  // },
  // {
  //   path: '/dashboard',
  //   exact: false,
  //   component: PageDashboard,
  //   routes: [
  //     {
  //       path: '/dashboard/registrasi/instansi',
  //       exact: true,
  //       component: PageRegistrasiInstansi,
  //       routes: []
  //     },
  //     {
  //       path: '/dashboard/registrasi/penyedia',
  //       exact: true,
  //       component: PageRegistrasiPenyedia,
  //       routes: []
  //     },
  //   ]
  // }
  // {
  //   path: '/',
  //   exact: false,
  //   component: PageLandingMain,
  //   routes: [
  //     {
  //       path: '/landing/home',
  //       exact: true,
  //       component: PageLandingHome,
  //       routes: []
  //     },
  //     {
  //       path: '/landing/registrasi-instansi',
  //       exact: true,
  //       component: PageLandingRegistrasiInstansi,
  //       routes: []
  //     },
  //     {
  //       path: '/landing/registrasi-penyedia',
  //       exact: true,
  //       component: PageLandingRegistrasiPenyedia,
  //       routes: []
  //     },
  //     {
  //       path: '/landing/pengumuman',
  //       exact: true,
  //       component: PageLandingPengumuman,
  //       routes: []
  //     },
  //     {
  //       path: '/landing/kontak',
  //       exact: true,
  //       component: PageLandingKontak,
  //       routes: []
  //     },
  //   ]
  // },
  // {
  //   path: '/app-admin',
  //   exact: false,
  //   component: PageAdminMain,
  //   routes: [
  //     {
  //       path: '/app-admin/registrasi-penyedia',
  //       exact: true,
  //       component: PageAdminRegistrasiPenyedia,
  //       routes: []
  //     },
  //     {
  //       path: '/app-admin/registrasi-instansi',
  //       exact: true,
  //       component: PageAdminRegistrasiInstansi,
  //       routes: []
  //     }
  //   ]
  // }
  // {
  //   path: '/',
  //   exact: true,
  //   component: PageMain,
  //   routes: []
  // },
]