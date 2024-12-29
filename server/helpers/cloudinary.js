const cloudinary = require("cloudinary").v2;
const multer = require("multer");



cloudinary.config({
  cloud_name: "devoc32yu",
  api_key: "127971356599795",
  api_secret: "hqn4-Gp_6vQ9hsc7Joay4ycA7IQ",
  secure: true, 
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  try {
    const result = await cloudinary.uploader.upload(file, {
      resource_type: "auto", 
      secure: true, 
    });

    return result; 
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw new Error("Failed to upload image to Cloudinary");
  }
}
const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
