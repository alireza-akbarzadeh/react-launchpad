export function Code<TCode>(props: { value: TCode; space?: number }) {
  const { value, space } = props;
  return (
    <pre className="mt-2 w-full overflow-scroll rounded-md bg-gray-700 p-4">
      <code className="text-white">{JSON.stringify(value, null, space)}</code>
    </pre>
  );
}

Code.defaultProps = {
  space: 4,
};
