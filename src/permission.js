import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist



router.beforeEach(async(to, from, next) => {
  console.log(to,from,'1s')
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  console.log(to.path)
  next()
  // if (hasToken) {
  //   // if(from.path === '/'){
  //   //   console.log(23123123)
  //   //   next({ path: '/login' })
  //   // }
  //   if (to.path === '/login') {
  //     console.log(23123123)
  //     // if is logged in, redirect to the home page
  //     next({ path: '/' })
  //     next()
  //     NProgress.done()
  //   } else {
  //     console.log(2)
  //     const hasGetUserInfo = store.getters.name
  //     if (hasGetUserInfo) {
  //       console.log(3)
  //       next()
  //     } else {
  //       try {
  //         console.log(4)
  //         // get user info
  //         await store.dispatch('user/getInfo')
  //
  //         next()
  //       } catch (error) {
  //         // remove token and go to login page to re-login
  //         await store.dispatch('user/resetToken')
  //         Message.error(error || 'Has Error')
  //         next(`/login?redirect=${to.path}`)
  //         NProgress.done()
  //       }
  //     }
  //   }
  // } else {
  //   /* has no token*/
  //
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     // in the free login whitelist, go directly
  //     next()
  //   } else {
  //     // other pages that do not have permission to access are redirected to the login page.
  //     next(`/login?redirect=${to.path}`)
  //     NProgress.done()
  //   }
  // }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
