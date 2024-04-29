import React from "react";
import { Stack, Typography } from "@mui/material";

import PageTitle from "../../Components/PageTitle";
import PageContainer from "../../Components/PageContainer";

import AboutUs from "../../Assets/AboutUs.png";

const styles = {
  body1: {
    fontSize: "1.125rem",
    fontWeight: 400,
    lineHeight: "1.5rem",
    color: "#5A5A5A",
  },
};

const About = () => {
  return (
    <PageContainer>
      <PageTitle title="About us" />
      <Stack gap={3}>
        <Stack direction="row" alignItems="center" gap={5}>
          <Typography variant="body1" sx={styles.body1}>
            Lorem ipsum dolor sit amet consectetur. Sagittis purus fames auctor
            augue scelerisque urna tincidunt suscipit eu. Quis vitae et odio
            pretium maecenas sed. Amet quisque orci dolor ac vestibulum.
            Fermentum malesuada sed in erat mauris turpis. Praesent pellentesque
            aliquet pulvinar tristique pellentesque feugiat augue. Ultricies
            libero mi aliquam lectus eu habitant at. Blandit malesuada massa
            vitae a venenatis in at. Lobortis in lectus sem molestie aliquam
            diam. Justo sollicitudin sed aliquet a tincidunt eu vitae. Sed eget
            sed mauris est iaculis eu. Non nunc vitae ac magna tincidunt morbi
            feugiat. Et ipsum purus donec massa sapien. In odio feugiat risus
            massa mauris faucibus. Lectus varius tristique lacinia eleifend ac
            luctus suspendisse ut pellentesque.
          </Typography>
          <img src={AboutUs} alt="About us" width="50%" />
        </Stack>
        <Typography variant="body1" sx={styles.body1}>
          Lorem ipsum dolor sit amet consectetur. Sagittis purus fames auctor
          augue scelerisque urna tincidunt suscipit eu. Quis vitae et odio
          pretium maecenas sed. Amet quisque orci dolor ac vestibulum. Fermentum
          malesuada sed in erat mauris turpis. Praesent pellentesque aliquet
          pulvinar tristique pellentesque feugiat augue. Ultricies libero mi
          aliquam lectus eu habitant at. Blandit malesuada massa vitae a
          venenatis in at. Lobortis in lectus sem molestie aliquam diam. Justo
          sollicitudin sed aliquet a tincidunt eu vitae. Sed eget sed mauris est
          iaculis eu. Non nunc vitae ac magna tincidunt morbi feugiat. Et ipsum
          purus donec massa sapien. In odio feugiat risus massa mauris faucibus.
          Lectus varius tristique lacinia eleifend ac luctus suspendisse ut
          pellentesque.
        </Typography>

        <Typography variant="body1" sx={styles.body1}>
          Lorem ipsum dolor sit amet consectetur. Sagittis purus fames auctor
          augue scelerisque urna tincidunt suscipit eu. Quis vitae et odio
          pretium maecenas sed. Amet quisque orci dolor ac vestibulum. Fermentum
          malesuada sed in erat mauris turpis. Praesent pellentesque aliquet
          pulvinar tristique pellentesque feugiat augue. Ultricies libero mi
          aliquam lectus eu habitant at. Blandit malesuada massa vitae a
          venenatis in at. Lobortis in lectus sem molestie aliquam diam. Justo
          sollicitudin sed aliquet a tincidunt eu vitae. Sed eget sed mauris est
          iaculis eu. Non nunc vitae ac magna tincidunt morbi feugiat. Et ipsum
          purus donec massa sapien. In odio feugiat risus massa mauris faucibus.
          Lectus varius tristique lacinia eleifend ac luctus suspendisse ut
          pellentesque.
        </Typography>
        <Typography variant="body1" sx={styles.body1}>
          Lorem ipsum dolor sit amet consectetur. Sagittis purus fames auctor
          augue scelerisque urna tincidunt suscipit eu. Quis vitae et odio
          pretium maecenas sed. Amet quisque orci dolor ac vestibulum. Fermentum
          malesuada sed in erat mauris turpis. Praesent pellentesque aliquet
          pulvinar tristique pellentesque feugiat augue. Ultricies libero mi
          aliquam lectus eu habitant at. Blandit malesuada massa vitae a
          venenatis in at. Lobortis in lectus sem molestie aliquam diam. Justo
          sollicitudin sed aliquet a tincidunt eu vitae. Sed eget sed mauris est
          iaculis eu. Non nunc vitae ac magna tincidunt morbi feugiat. Et ipsum
          purus donec massa sapien. In odio feugiat risus massa mauris faucibus.
          Lectus varius tristique lacinia eleifend ac luctus suspendisse ut
          pellentesque.
        </Typography>
      </Stack>
    </PageContainer>
  );
};

export default About;
