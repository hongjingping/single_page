export function slide (fn) {
  var tag = document.getElementsByTagName('body')[0]
  var start = ''
  var end = ''
  tag.addEventListener('touchstart', function (e) {
    start = e.changedTouches[0].clientY.toFixed(0)
  })
  tag.addEventListener('touchend', function (e) {
    end = e.changedTouches[0].clientY.toFixed(0)
    if (end < start && start - end > 50) {
      fn()
    }
  })
}
