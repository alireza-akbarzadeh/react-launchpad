import { Product as TProduct } from "patterns/data";

export const LargeProduct = (props: TProduct) => {
  const { description, name, price, rating } = props;
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-slate-500">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          ${price}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Rating: {rating}
        </span>
      </div>
    </div>
  );
};
