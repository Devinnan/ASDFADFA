import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Recommend = (resolve) => {
  import('components/recommend/recommend').then((recommend) => {
    resolve(recommend)
  })
}

const Singer = (resolve) => {
  import('components/singer/singer').then((singer) => {
    resolve(singer)
  })
}

const Search = (resolve) => {
  import('components/search/search').then((search) => {
    resolve(search)
  })
}

const SingerDetail = (resolve) => {
  import('components/singer-detail/singer-detail').then((singerDetail) => {
    resolve(singerDetail)
  })
}

const Disc = (resolve) => {
  import('components/disc/disc').then((disc) => {
    resolve(disc)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    }
  ]
})
