class Trashbin {
    constructor(x, y) {
          this.bottom = Bodies.rectangle(x, y-1, 60, 10);
          Body.setStatic(this.bottom, true);
          this.image = loadImage("dustbingreen.png");
          World.add(world, this.bottom);

          this.left = Bodies.rectangle((this.bottom.position.x-40), (this.bottom.position.y-45), 10, 100);
          Body.setStatic(this.left, true);
          World.add(world, this.left);

          this.right = Bodies.rectangle((this.bottom.position.x+40), (this.bottom.position.y-45), 10, 100);
          Body.setStatic(this.right, true);
          World.add(world, this.right);
    }

    display() {
        rectMode(CENTER);
        fill(rgb(193, 247, 255));
        stroke(rgb(193, 247, 255));

        rect(this.bottom.position.x, this.bottom.position.y, 80, 10);
        
        rect(this.left.position.x, this.left.position.y, 10, 100);

        rect(this.right.position.x, this.right.position.y, 10, 100);

        imageMode(CENTER);
        image(this.image, this.bottom.position.x, this.left.position.y, 80, 100);
    }
}