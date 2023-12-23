import { NumberList } from './NumberList';
import { RegularList } from './RegularList';
import { people, products } from './list';
import { LargePersonList } from './people/LargePersonList';
import { SmallPersonList } from './people/SmallPersonList';
import { LargeProductList } from './products/LargeProductList';
import { SmallProductList } from './products/SmallProductList';

export const App = () => {
  return (
    <main>
      <RegularList
        items={people}
        resourceName='person'
        itemComponent={SmallPersonList}
      />
      <NumberList
        items={people}
        resourceName='person'
        itemComponent={LargePersonList}
      />
      <RegularList
        items={products}
        resourceName='product'
        itemComponent={SmallProductList}
      />
      <NumberList
        items={products}
        resourceName='product'
        itemComponent={LargeProductList}
      />
    </main>
  );
};
