import { productList } from 'patterns/data';
import { FC } from 'react';
import { LargeProduct } from './largel-procut';
import { SmallProduct } from './small-procut';

interface IRegularList<T> {
  items: T[];
  itemComponent: FC<T>;
}

export function RegularList<T>(props: IRegularList<T>) {
  const { items, itemComponent: ItemComponents } = props;

  return (
    <>
      {items.map((item, index) => (
        <ItemComponents {...item} key={index} />
      ))}
    </>
  );
}

export function Product() {
  return (
    <div className="grid grid-cols-3 space-y-4">
      <RegularList items={productList} itemComponent={SmallProduct} />
      <RegularList items={productList} itemComponent={LargeProduct} />
    </div>
  );
}
