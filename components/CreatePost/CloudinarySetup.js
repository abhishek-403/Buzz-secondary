import axios from 'axios';

const cloudName = 'YOUR_CLOUD_NAME';
const uploadPreset = 'YOUR_UPLOAD_PRESET';
const apiKey = 'YOUR_API_KEY';

const uploadImage = async () => {
  try {
    const formData = new FormData();
    formData.append('file', { uri: image, name: 'image.jpg', type: 'image/jpeg' });
    formData.append('upload_preset', uploadPreset);

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    if (response.data.secure_url) {
      const imageUrl = response.data.secure_url;
      console.log('Image uploaded to Cloudinary:', imageUrl);

      // Now, you can store the imageUrl in your database or use it as needed.
    } else {
      console.error('Image upload failed:', response.data);
    }
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
  }
};