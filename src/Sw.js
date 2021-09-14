if ("serviceWorker" in navigator)
{
  navigator.serviceWorker.register('./Sw.js').then(function(){
    console.log('service worker register');
  });
}