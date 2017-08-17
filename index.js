var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'ANIMATION/data.json'
})

AOS.init({
  duration: 1200,
})
