export function RecursiveComponents({ data }: { data: NestedData }) {
  return (
    <ul className="px-2">
      <div>{data.name}</div>
      {data.children &&
        data.children.map((value, index) => (
          <li key={index}>
            <ul>
              <RecursiveComponents data={value} />
            </ul>
          </li>
        ))}
    </ul>
  );
}

// Define a type for our nested data
type NestedData = {
  name: string;
  children?: NestedData[];
};

// Sample nested data
export const NestedData: NestedData = {
  name: 'Parent',
  children: [
    {
      name: 'Child 1',
      children: [
        {
          name: 'Grandchild 1',
          children: [
            {
              name: 'Great Grandchild 1',
              children: [
                {
                  name: 'alireza',
                  children: [
                    {
                      name: 'mehdi',
                      children: [
                        {
                          name: 'saeed',
                          children: [
                            { name: 'hassan', children: [{ name: 'maryam' }] },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: 'Great Grandchild 2',
              children: [{ name: 'child saeed' }],
            },
          ],
        },
        {
          name: 'Grandchild 2',
        },
      ],
    },
    {
      name: 'Child 2',
    },
  ],
};
