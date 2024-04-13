import { useIsMounted } from 'hooks';
import { PropsWithChildren } from 'react';

function ClientOnly<T>(props: PropsWithChildren<T>) {
  const { children, ...rest } = props;
  const isMounted = useIsMounted();
  if (!isMounted) return <div {...rest} />;
  return <>{children}</>;
}
export default ClientOnly;

// ? another version
// export default function ClientOnly<T>(props: PropsWithChildren<T>) {
//   const { children, ...rest } = props
//   const [hasMounted, setHasMounted] = useState(false)
//   useEffect(() => {
//     setHasMounted(true)
//   }, [])
//   if (!hasMounted) return <div {...rest} />
//   return <>{props.children}</>
// }
