// Componente Link
import NextLink from 'next/link';
import LinkEstilizado from '../LinkEstilizado';

export default function Link2({ children, href, ...props }) {
  return (
    <NextLink href={href}>
      <LinkEstilizado {...props}>{children}</LinkEstilizado>
    </NextLink>
  );
}