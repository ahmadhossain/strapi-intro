// path: ./config/plugins.js

module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: "dcgl2jk54",
        api_key: "911298984793597",
        api_secret: "qCaV0MtS7eNGAgwm0ai7N1RXS4s",
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});