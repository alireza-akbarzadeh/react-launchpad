export const code = (props: { valuse: any; space: number }) => {
  const { valuse, space = 2 } = props;
  return (
    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
      <code className="text-white">{JSON.stringify(valuse, null, space)}</code>
    </pre>
  );
};
