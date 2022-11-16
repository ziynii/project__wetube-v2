import { HelmetProvider, Helmet } from 'react-helmet-async';

export function registTitle(title?: string) {
  return (
    <HelmetProvider>
      <Helmet>
        {title ? <title>WETUBE | {title}</title> : <title>WETUBE</title>}
      </Helmet>
    </HelmetProvider>
  );
}
