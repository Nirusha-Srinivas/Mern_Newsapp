const cloudinary = require("cloudinary").v2;
const multer = require("multer");



cloudinary.config({
  cloud_name: "devoc32yu",
  api_key: "127971356599795",
  api_secret: "hqn4-Gp_6vQ9hsc7Joay4ycA7IQ",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
