export default defineNuxtRouteMiddleware((to, from) => {
  console.log("It's auth middleware!");

  // console.log("[MIDDLEWARE_TO]: ", to);
  // console.log("[MIDDLEWARE_FROM]: ", from);

  // const isLoggedIn = false;

  // if (isLoggedIn) {
  //   // redirect to the page we want to go
  //   return navigateTo(to.fullPath);
  // }

  // // redirect to a login page
  // return navigateTo("/login");
});
