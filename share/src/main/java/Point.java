/**
 * Created by rom4 on 9/22/14.
 */

public class Point {

    private double x;
    private double y;

    public Point() {

    }

    public Point(double x, double y) {
        this.x = x;
        this.y = y;
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    @Override
    @SuppressWarnings("EqualsWhichDoesntCheckParameterClass")
    public boolean equals(Object otherObject) {
        Point other = (Point) otherObject;
        return x == other.x && y == other.y;
    }

    @Override
    public int hashCode() {
        return (int)(x + y);
    }

    @Override
    public String toString() {
        return "(" + x + ";" + y + ")";
    }

}