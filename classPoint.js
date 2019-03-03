class Point{
  constructor(x,y){
    this.x = x,
    this.y = y
  }

  static distance(a,b){
    const dx = a.x-b.x;
    const dy = a.y-b.y;

    return Math.hypot(dx,dy);

  }
}
const p1 = new Point(3,3);
const p2 = new Point(9,9);

var result = Point.distance(p1,p2);
console.log(result);
