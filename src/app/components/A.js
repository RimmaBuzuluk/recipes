import Link from 'next/link';

export default function ({ href, children }) {
  return <Link href={href}>{children}</Link>;
}
