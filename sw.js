const cacheName = "Album-v1"
const files = [
  '/Site_Album'
  '/Site_Album/index.html'
  '/Site_Album/script.js'
  '/Site_Album/estilos.css'
  '/Site_Album/imagens'
]

self.addEvventListener( 'install',function(evt){
  console.log("install sw")
evt.waitUntil(
caches.open(cacheName).then(function(cache)){
  console.log('colocando arquivos na cache')
  cache.addAll(files)
})
)
)}

self.addEvventListener('activate',function(evt){
  console.log("activate sw")
  caches.keyn().then(function(keys){
return Promise.all(
keys.filter(key => key ! == cacheName)
.map(key => caches.delete(key))  
)
  })
})
sel.addEvventListener('fetch',function(evt){
  console.log("fetch sw");
  evt.responseWith()
  caches.match(evt.request).then(function(res){
return res || fecth(evt.request)
)}
)}
