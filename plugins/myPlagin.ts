export default defineNuxtPlugin((nuxtApp) => {
  // todo
  console.log(nuxtApp);
  return {
    provide: {
      sayHello: (msg: string) => console.log(`Hello ${msg}`),
    },
  };
});
