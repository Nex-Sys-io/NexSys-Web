import ClientLayout from './layout';
import { metadata, structuredData } from './metadata';

export { metadata };

export default function RootLayout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
} 