const cloudinary = require("cloudinary").v2;
const multer = require('multer');

cloudinary.config({
  cloud_name: "daodqzqje",
  api_key: "491566617422334",
  api_secret: "h3hQ_FyOtJKtIp6Qf0Z8g303m0o",
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