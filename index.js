AOS.init({
  duration: 1200,
})

var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    loop: false,
    autoplay: false,
    path: 'data.json',
})
