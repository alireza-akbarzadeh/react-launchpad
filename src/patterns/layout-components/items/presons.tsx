import { peopleList, Person } from 'patterns/data';
import { FC, Fragment } from 'react';
import { LargePerson } from './largel-person';

interface IPersonList<T> {
  items: T[];
  itemComponents?: FC<T>;
  renderList?: (props: T) => JSX.Element;
}

export function PersonList<T>(props: IPersonList<T>) {
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

export function Presons() {
  return (
    <div className="space-y-4">
      <PersonList<Person>
        renderList={(preson) => (
            <div className="flex  gap-3">
              <p>Age:{preson.age}</p>
              <p>Name: {preson.name}</p>
            </div>
        )}
        items={peopleList}
      />
      <PersonList items={peopleList} itemComponents={LargePerson} />
    </div>
  );
}
