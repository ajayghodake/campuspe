import { Box, Container, Typography } from "@mui/material";

import star from "../assets/star.svg";
import collegeLogo from "../assets/College Pillar Icon Badge.svg";
import brifcase from "../assets/Briefcase.svg";
import collegeLogo2 from "../assets/Background+Border+Shadow.svg";
import comingSoonBadge from "../assets/comingSoon.svg";
import tick from "../assets/tick.svg";
import activeNow from "../assets/ActiveNow.svg";
import arrowIcon from "../assets/arrowIcon.svg";
import bellIcon from "../assets/bellIcon.svg";
import testimonial from "../assets/Testmonials.svg";
import CustomCard from "./CustomCard";

const StarGroup = ({ flip = false }) => (
  <Box
    sx={{
      position: "relative",
      width: "25.49px",
      height: "18.97696px",
      flexShrink: 0,
      overflow: "visible",
      transform: flip ? "scaleX(-1)" : "none",
    }}
  >
    {/* Large Star */}
    <Box
      component="img"
      src={star}
      alt=""
      aria-hidden="true"
      sx={{
        position: "absolute",
        right: 0,
        bottom: 0,
        width: "18px",
        height: "20px",
        transform: "rotate(12deg)",
        transformOrigin: "center",
        objectFit: "contain",
        display: "block",
      }}
    />

    {/* Small Star */}
    <Box
      component="img"
      src={star}
      alt=""
      aria-hidden="true"
      sx={{
        position: "absolute",
        top: "-1px",
        left: "2px",
        width: "10px",
        height: "10px",
        transform: "rotate(-10deg)",
        objectFit: "contain",
        display: "block",
      }}
    />
  </Box>
);

const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        mt: { xs: "-64px", lg: "-80px" },
        pt: { xs: "64px", lg: "80px" },
      }}
    >
      {/* Left Gradient Blob */}
      <Box
        sx={{
          position: "absolute",
          width: "800px",
          height: "613px",
          top: "303px",
          left: "60px",
          borderRadius: "9999px",
          background:
            "linear-gradient(45deg, rgba(165, 243, 252, 0.3) 0%, rgba(191, 219, 254, 0.2) 50%, rgba(191, 219, 254, 0) 100%)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Right Gradient Blob */}
      <Box
        sx={{
          position: "absolute",
          width: "860px",
          height: "613px",
          top: "207px",
          left: "432px",
          borderRadius: "9999px",
          background:
            "linear-gradient(225deg, rgba(196, 181, 253, 0.3) 0%, rgba(245, 208, 254, 0.2) 50%, rgba(245, 208, 254, 0) 100%)",
          filter: "blur(110px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Hero Content */}
      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1240px",
          minHeight: "720px",
          mx: "auto",
        }}
      >
        {/* Hero Text */}
        <Box
          sx={{
            maxWidth: "896px",
            mx: "auto",
            px: "16px",
            py: "40px",
            textAlign: "center",
          }}
        >
          {/* Main Heading */}
          <Typography
            component="h1"
            sx={{
              width: "100%",
              maxWidth: "none",
              mx: "auto",
              fontFamily: '"Inter Variable", "Inter", sans-serif',
              fontSize: { xs: "32px", sm: "40px", md: "48px" },
              fontWeight: 700,
              lineHeight: "120%",
              letterSpacing: 0,
              textAlign: "center",
              whiteSpace: { xs: "normal", md: "nowrap" },
            }}
          >
            <Box component="span" sx={{ color: "#091124" }}>
              Connect{" "}
            </Box>

            <Box
              component="span"
              sx={{
                background:
                  "linear-gradient(90deg, #1E5BF7 0%, #0077F5 35%, #009BE5 60%, #00E5D1 82%, #00A46E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              10X Faster.
            </Box>
          </Typography>

          {/* Subtitle */}
          <Typography
            component="p"
            sx={{
              mt: 2,
              fontFamily: '"Inter Variable", "Inter", sans-serif',
              fontSize: { xs: "15px", sm: "20px" },
              fontWeight: 500,
              lineHeight: 1.5,
              letterSpacing: 0,
              color: "#4B5565",
              textAlign: "center",
            }}
          >
            One platform connecting students, colleges & employers — faster.
          </Typography>

          {/* Looking For + Stars */}
          <Box
            sx={{
              mt: 5,
              width: "100%",
              maxWidth: "492.49px",
              minHeight: "33px",
              mx: "auto",
              px: { xs: 0, sm: "12px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              boxSizing: "border-box",
            }}
          >
            <StarGroup flip />

            <Typography
              component="h2"
              sx={{
                flex: "0 1 auto",
                fontFamily: '"Inter Variable", "Inter", sans-serif',
                fontSize: { xs: "18px", sm: "28px" },
                fontWeight: 600,
                lineHeight: "100%",
                color: "#0098FF",
                letterSpacing: 0,
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              What are you looking for?
            </Typography>

            <StarGroup />
          </Box>
        </Box>

        {/* Cards */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            gap: "24px",
            flexWrap: "wrap",
            px: "16px",
            pb: "48px",
          }}
        >
          <CustomCard
            logo={collegeLogo}
            logoAlt="College Pillar"
            badge={comingSoonBadge}
            badgeAlt="Coming Soon"
            heading="College"
            description="Explore colleges, courses, fees, placements & more."
            bulletPoints={[
              "Search by course, location, fees",
              "Connect directly with colleges",
              "Improve student placements",
            ]}
            tickIcon={tick}
            buttonText="Job Waitlist"
            iconTrailing={bellIcon}
            onButtonClick={() => console.log("College card clicked")}
          />
          <CustomCard
            logo={collegeLogo2}
            logoAlt="College Pillar"
            badge={activeNow}
            badgeAlt="activeNow"
            heading="I'm Looking for a Job"
            description="Upload your resume. We'll find jobs that fit you."
            bulletPoints={[
              "Jobs from 1000+ sources",
              "AI powered matching",
              "WhatsApp & email alerts",
            ]}
            tickIcon={tick}
            buttonText="Explore Jobs"
            iconTrailing={arrowIcon}
            onButtonClick={() => console.log("College card clicked")}
          />
          <CustomCard
            logo={brifcase}
            logoAlt="College Pillar"
            badge={comingSoonBadge}
            badgeAlt="Coming Soon"
            heading="I'm Hiring"
            description="Connect with colleges and find candidates — from students to graduates."
            bulletPoints={[
              "Connect directly with colleges",
              "Find the right candidates",
              "Simplify your hiring",
            ]}
            tickIcon={tick}
            buttonText="Job Waitlist"
            iconTrailing={bellIcon}
            onButtonClick={() => console.log("College card clicked")}
          />

          {/* Testimonials banner — bottom of Hero section */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: { xs: 4, md: 6 },
              px: { xs: 2, md: 3 },
              boxSizing: "border-box",
            }}
          >
            <Box
              component="img"
              src={testimonial}
              alt="Campuspe testimonials"
              sx={{
                display: "block",
                width: "100%",
                maxWidth: "1107.7px",
                height: "auto",
                objectFit: "contain",
                opacity: 1,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
