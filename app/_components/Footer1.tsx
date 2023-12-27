'use client'
import React from "react";
import { Box, Container, styled, Typography } from "@mui/material";

import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/linkedinicon.png";

const Footer: React.FC = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    flexDirection: "column",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      textAlign: "left",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  return (
    <Box sx={{ py: 10, backgroundColor: "#F5F5F5" }}>
      <CustomContainer>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Products
          </Typography>

          <FooterLink>Listing</FooterLink>
          <br />
          <FooterLink>Properties</FooterLink>
          <br />
          <FooterLink>Agents</FooterLink>
          <br />
          <FooterLink>Blog</FooterLink>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Resources
          </Typography>

          <FooterLink>Our Platform</FooterLink>
          <br />
          <FooterLink>Stories</FooterLink>
          <br />
          <FooterLink>Video</FooterLink>
          <br />
          <FooterLink>Free Trial</FooterLink>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Company
          </Typography>

          <FooterLink>Partnerships</FooterLink>
          <br />
          <FooterLink>Terms of use</FooterLink>
          <br />
          <FooterLink>Privacy</FooterLink>
          <br />
          <FooterLink>Sitemap</FooterLink>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Get in touch
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#7A7A7E",
              fontWeight: "500",
              mb: 2,
            }}
          >
            Discover the ultimate platform to elevate your ad campaigns!
          </Typography>

          <IconBox>
            <img src='/media/fbicon.png' alt="fbIcon" style={{ cursor: "pointer" }} />
            <img
              src='/media/twittericon.png'
              alt="twitterIcon"
              style={{ cursor: "pointer" }}
            />
            <img
              src='/media/linkedinicon.png'
              alt="linkedinIcon"
              style={{ cursor: "pointer" }}
            />
          </IconBox>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
