import { FC } from 'react';
import { Fragment } from 'react/jsx-runtime';

interface IPersonList<T> {
  items: T[];
  itemComponents?: FC<T>;
  renderList?: (props: T) => JSX.Element;
}

export function List<T>(props: IPersonList<T>) {
  const { items, itemComponents: ItemComponents, renderList } = props;
  return (
    <>
      {/* this is called render props patterns */}
      {renderList &&
        items.map((item, index) => (
          <Fragment key={index}>{renderList(item)}</Fragment>
        ))}
      {ItemComponents &&
        items.map((item, index) => <ItemComponents {...item} key={index} />)}
    </>
  );
}
