import nextra from "nextra";
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
});

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

// Export the final Next.js config with Nextra included
export default withNextra({
  // ... Add regular Next.js options here
});
