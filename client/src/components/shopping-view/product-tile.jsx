import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "../ui/button";

function ShoppingProductTile({ product, handleGetProductDetails, handleAddtoCart }) {
  return (
    <Card className="w-full h-[400px] flex flex-col justify-between shadow-md rounded-lg ">
      {/* Image Section */}
      <div className="cursor-pointer" >
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full h-[180px] object-cover"
        />
      </div>

      {/* Content Section */}
      <CardContent className="p-4">
  <h2 className="text-lg font-semibold mb-1">{product?.title}</h2>
  <p
    className="text-sm text-gray-600 mb-2 leading-relaxed"
    style={{
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    }}
  >
    {product?.description}
  </p>
  <h3 className="block text-xs font-semibold">
    {product?.category || "Location Not Available"}
  </h3>
</CardContent>


      {/* Footer Section */}
      <CardFooter className="p-4">
        <Button onClick={() => handleGetProductDetails(product?._id)}>
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;
