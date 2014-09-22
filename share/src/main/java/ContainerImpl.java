import java.util.ArrayList;
import java.util.List;

/**
 * Created by rom4 on 9/17/14.
 */
public class ContainerImpl implements Container {

    private List<Product> products = new ArrayList<>() ;

    @Override
    public void addProduct(Product product) {
        products.add(product);
    }

    @Override
    public Integer getCountProduct() {
        return products.size();
    }
}
