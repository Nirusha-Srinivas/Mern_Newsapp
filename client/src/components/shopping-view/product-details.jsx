import { Dialog, DialogContent, DialogTitle, DialogDescription } from "../ui/dialog";
import { Separator } from "../ui/separator";

function ProductDetailsDialog({ open, setOpen, productDetails }) {
  function handleDialogClose() {
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={handleDialogClose}>
      <DialogContent
        className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:p-8 max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw]"
        aria-describedby="dialog-description"
      >
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={productDetails?.image}
            alt={productDetails?.title}
            width={600}
            height={600}
            className="aspect-square w-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col">
          {/* Dialog Title */}
          <DialogTitle className="mb-4 text-3xl font-extrabold">
            {productDetails?.title || "Product Details"}
          </DialogTitle>

          {/* Dialog Description */}
          <DialogDescription
            id="dialog-description"
            className="flex-1 overflow-auto max-h-[400px] leading-relaxed text-gray-700"
          >
            {productDetails?.description || "No description available."}
          </DialogDescription>

          <Separator className="my-4" />

          {/* Close Button */}
          <div className="text-right">
            <button
              onClick={handleDialogClose}
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProductDetailsDialog;
