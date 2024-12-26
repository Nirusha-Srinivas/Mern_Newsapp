const Product = require("../../models/Product");

const getFilteredProducts = async (req, res) => {
  try {
    const { category = "", brand = "", sortBy = "price-lowtohigh" } = req.query;

    let filters = {};
    if (category) {
      filters.category = { $in: category.split(",") }; // Split by commas and filter by those categories
    }

    if (brand) {
      filters.brand = { $in: brand.split(",") }; // Split by commas and filter by those brands
    }

    let sort = {};
    switch (sortBy) {
      case "price-lowtohigh":
        sort.price = 1; // Ascending order for price
        break;
      case "price-hightolow":
        sort.price = -1; // Descending order for price
        break;
      case "title-atoz":
        sort.title = 1; // Ascending order for title (A-Z)
        break;
      case "title-ztoa":
        sort.title = -1; // Descending order for title (Z-A)
        break;
      default:
        sort.price = 1; // Default to ascending price if no valid sortBy is provided
        break;
    }

    sort.createdAt = -1; // Sort by createdAt in descending order (newest first)
    const products = await Product.find(filters).sort(sort);
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (e) {
    console.error("Error fetching products: ", e.message);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching products",
    });
  }
};


const getProductDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    if (!product)
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (e) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

module.exports = { getFilteredProducts, getProductDetails };
