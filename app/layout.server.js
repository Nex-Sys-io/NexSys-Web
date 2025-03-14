import ClientLayout from './layout';
import { metadata, viewport } from './metadata';

export { metadata, viewport };

export default function RootLayout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
} 