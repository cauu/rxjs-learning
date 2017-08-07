var dragDOM = document.getElementById('drag');
var body = document.body;

/**
 * @desc fromEvent is a container
 */
var mouseDown = Rx.Observable.fromEvent(dragDOM, 'mousedown');
var mouseUp = Rx.Observable.fromEvent(body, 'mouseup');
var mouseMove = Rx.Observable.fromEvent(body, 'mousemove');

/**
 * @desc concatAll is a monad
 */
mouseDown
  .map(e => mouseMove.takeUntil(mouseUp))
  .concatAll()
  .map(e => ({ x: e.clientX, y: e.clientY }))
  .subscribe(pos => {
    dragDOM.style.left = pos.x + 'px';
    dragDOM.style.top = pos.y + 'px';
  })
;

