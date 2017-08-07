class Container {
  static of(v) {
      return new Container(v);
  }

  constructor(v) {
      this.__value = v;
  }

   map(f) {
       return Container.of(f(this.__value));
   }
}

let c = Container.of('test');

c.map((v) => v.toUpperCase()).map(console.log);