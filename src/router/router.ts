import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./../views/CharacterListView.vue'),
  },
  {
    path: '/character/:id',
    name: 'Character',
    component: () => import('./../views/CharacterSingleItemView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }  
});

// Add dynamic canonical links
// Without this google will not index the page
// Future: This could move to utils
// Or make <Head> component
router.afterEach((to) => {
  const canonicalLink = document.querySelector("link[rel='canonical']");
  if (canonicalLink) {
    canonicalLink.setAttribute('href', `https://replace_me.com${to.fullPath}`);
  } else {
    const link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    link.setAttribute("href", `https://replace_me.com${to.fullPath}`);
    document.head.appendChild(link);
  }
});

export default router;
