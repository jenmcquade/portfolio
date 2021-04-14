import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const ProjectVideo = ({ filename, poster }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile( filter: { internal: { mediaType: { regex: "/image/" } } } ) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 1366)
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(poster));

      if (!filename) return null;

      const imageFluid = image.node.childImageSharp.gatsbyImageData;
      return <video preload="auto" muted playsInline autoPlay loop poster={imageFluid.src} >
        <source src={filename + '.mp4'} type="video/mp4"/>
        <source src={filename + '.webm'} type="video/webm"/>
        Your browser does not support the video tag.
      </video>;
    }}
  />
);

ProjectVideo.propTypes = {
  filename: PropTypes.string,
  poster: PropTypes.string
};

export default ProjectVideo;
