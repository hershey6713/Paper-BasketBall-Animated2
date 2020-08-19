class Paper {
    constructor(x, y, diameter) {
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.paper = Bodies.circle(x, y, diameter, options);
        this.diameter = diameter;
        this.image = loadImage("paper.png");
        World.add(world, this.paper);
    }

    display() {
        ellipseMode(RADIUS);
        fill(193, 247, 255);
        stroke(rgb(193, 247, 255));

        ellipse(this.paper.position.x, this.paper.position.y, this.diameter);
        
        imageMode(CENTER);
        image(this.image, this.paper.position.x, this.paper.position.y, 50, 50);
    }
}
