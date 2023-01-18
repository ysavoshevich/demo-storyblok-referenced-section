import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "@components/ui/general/Layout";
import Heading from "@components/ui/typography/Heading";
import "./index.scss";

function HomePage({
  data: { storyblokEntry },
}: PageProps<Queries.HomePageQuery>) {
  if (storyblokEntry?.content) {
    console.log(JSON.parse(storyblokEntry.content));
  }
  return (
    <Layout>
      <div className="homepage__title">
        <Heading as="h1">Homepage</Heading>
      </div>
    </Layout>
  );
}

export default HomePage;

export const query = graphql`
  query HomePage {
    site {
      siteMetadata {
        title
        description
      }
    }
    storyblokEntry(full_slug: { eq: "home" }) {
      name
      full_slug
      content
    }
  }
`;
