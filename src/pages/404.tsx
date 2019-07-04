import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const seo = {
  title: 'A-J Roos | 404 - Page not found',
  description:
    "Oops! Something went wrong. Either the page you tried to access doesn't exist or something mysterious happened.",
};

const FourOhFour = (): React.ReactElement => (
  <>
    <SEO {...seo} />
    <Layout>
      <section className="fourohfour">
        <h1 className="fourohfour__heading" data-testid="404-heading">
          PAGE NOT FOUND
        </h1>
        <p className="fourohfour__text">
          You just hit a route that doesn&#39;t exist... the sadness.
        </p>
        <Link to="/" className="fourohfour__link" data-testid="404-link">
          Go Home
        </Link>
      </section>
    </Layout>
  </>
);

export default FourOhFour;