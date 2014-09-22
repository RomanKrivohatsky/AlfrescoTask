/**
 * Created by rom4 on 9/22/14.
 */

import static  java.lang.Math.*;

public class Circle extends GeomShape {


    @Override
    protected void setPerimeter(double perimeter) {
        super.setPerimeter(perimeter);
    }

    String name = "[Окружность]";
    private Point centre;
    private double radius;

    public Circle(Point centre, double radius) {
        fEval(centre, radius);
    }

    public Circle(double centreX, double centreY, double radius) {
        fEval(new Point(centreX, centreY), radius);
    }

    private void fEval(Point centre, double radius) {
        this.centre = centre;
        this.radius = radius;
        setPerimeter(2 * PI * radius);
        setArea(PI * pow(radius,2));
    }

    public Point getCentre() {
        return centre;
    }

    public double getRadius() {
        return radius;
    }

    @Override
    public String toString() {
        return "[" + centre + "][R = " + radius + "][P = " ;
              //  MyUtils.round(super.getPerimeter(), 3) + "][A = " +
               //MyUtils.round(super.getArea(), 3) +"]" + name;
    }

}