let Plane = function(){}

Plane.prototype.fire = function() {
    console.log('发射子弹');
}

let MissileDecorator = function( plane ) {
    this.plane = plane;
}
MissileDecorator.prototype.fire = function() {
    this.plane.fire();
    console.log('发射导弹');
}

let AtomDecorator = function(plane) {
    this.plane = plane
}
AtomDecorator.prototype.fire = function(){
    this.plane.fire();
    console.log('原子弹发射');
}
let plane = new Plane();
plane = new MissileDecorator(plane)
plane = new AtomDecorator(plane)
plane.fire()