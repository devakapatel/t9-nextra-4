// next.config.mjs
import nextra from "nextra";
import { createRequire } from 'node:module'; // Import createRequire

// Create a require function for this module
const require = createRequire(import.meta.url);

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add other Nextra-specific options here
});

// Define your regular Next.js configurations separately
const regularNextConfig = {
  // output: 'export', // Uncomment if you need static export
  // images: {
  //   unoptimized: true // Uncomment if you need static export and have images
  // },

  // Add the webpack configuration here
  webpack: (config, { isServer, webpack }) => {
    // Fix for "Module not found: Can't resolve 'path'" and 'stream' etc. in Edge Runtime
    config.resolve.fallback = {
      ...config.resolve.fallback, // Spread existing fallbacks
      path: require.resolve('path-browserify'),     // Now 'require' is defined
      stream: require.resolve('stream-browserify'), // Now 'require' is defined
      crypto: require.resolve('crypto-browserify'), // Now 'require' is defined
      util: require.resolve('util/'),               // Now 'require' is defined
      buffer: require.resolve('buffer/'),           // Now 'require' is defined
      fs: false, // If you encounter 'fs' errors, explicitly disable it
      // Add other fallbacks here if more 'Module not found' errors appear
    };

    // Important: provide `Buffer` globally if needed by polyfills
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      })
    );
    
    // For 'stream' specifically some libraries try to access process.browser
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.browser': 'true',
      })
    );

    return config;
  },
  // ... Add other regular Next.js options here
};

// Export the combined configuration
export default withNextra(regularNextConfig);