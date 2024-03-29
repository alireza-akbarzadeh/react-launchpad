import { AspectRatio } from "components/ui/aspect-ratio";

function Patterns() {
  return (
    <>
      <BreadcrumbDemo />
    </>
  );
}
export default Patterns;

export function BreadcrumbDemo() {
  return (
    <div className="Container">
      <AspectRatio ratio={16 / 9}>
        <img
          className="Image"
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
          alt="Landscape photograph by Tobias Tullius"
        />
      </AspectRatio>
    </div>
  );
}
