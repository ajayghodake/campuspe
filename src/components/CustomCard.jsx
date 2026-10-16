
import { Box, Typography } from "@mui/material";
import tickDefault from "../assets/tick.svg";
import CustomButton from "./CustomButton";


const CustomCard = ({
  logo,
  logoAlt = "Card logo",
  badge,
  badgeAlt = "Badge",
  heading,
  description,
  bulletPoints = [],
  tickIcon = tickDefault,
  buttonText,
  iconTrailing,
  onButtonClick,
  sx = {},
  children,
  ...props
}) => {
  return (
    <Box
      sx={{
        width: "365px",
        minHeight: "407px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        p: "24px 28px",
        borderRadius: "26px",
        border: "2px solid #B3EEFF",
        backgroundColor: "#FFFFFF",
        boxShadow:
          "0px 4px 6px -2px #00000005, 0px 10px 30px -5px #0000000D",
        ...sx,
      }}
      {...props}
    >
      {/* Logo + Badge */}
      <Box
        sx={{
          width: "100%",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        {logo && (
          <Box
            component="img"
            src={logo}
            alt={logoAlt}
            sx={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              objectFit: "contain",
              flexShrink: 0,
            }}
          />
        )}

        {badge && (
          <Box
            component="img"
            src={badge}
            alt={badgeAlt}
            sx={{
              width: "105px",
              height: "28px",
              objectFit: "contain",
              flexShrink: 0,
            }}
          />
        )}
      </Box>

      {/* Heading */}
      <Typography
        component="h3"
        sx={{
          mt: "24px",
          mb: 0,
          fontFamily: '"Lora", Georgia, serif',
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "31px",
          letterSpacing: 0,
          color: "#0F172A",
        }}
      >
        {heading}
      </Typography>

      {/* Description / Subtitle */}
      <Typography
        component="p"
        sx={{
          mt: "8px",
          mb: "8px",
          width: "100%",
          maxWidth: "260px",
          fontFamily: '"Inter", sans-serif',
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "22px",
          letterSpacing: 0,
          color: "#475569",
          whiteSpace: "pre-line",
        }}
      >
        {description}
      </Typography>

      {/* Bullet Points */}
      <Box
        component="ul"
        sx={{
          width: "100%",
          boxSizing: "border-box",
          listStyle: "none",
          p: 0,
          m: 0,
          mt: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          flexShrink: 0,
        }}
      >
        {bulletPoints.map((point, index) => (
          <Box
            component="li"
            key={`${point}-${index}`}
            sx={{
              width: "100%",
              minHeight: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Box
              component="img"
              src={tickIcon}
              alt=""
              aria-hidden="true"
              sx={{
                width: "16px",
                height: "16px",
                flexShrink: 0,
                objectFit: "contain",
                display: "block",
              }}
            />

            <Typography
              component="span"
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "20px",
                color: "#475569",
              }}
            >
              {point}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Optional Extra Content */}
      {children}

      {/* Action Button */}
      {/* {buttonText && (
        <Box sx={{ mt: "auto", pt: "12px", width: "100%" }}>
          <CustomButton
            type="Primary"
            size="lg"
            fullWidth
            onClick={onButtonClick}
            sx={{
              width: "100%",
              height: "44px",
              minWidth: 0,
              px: "24px",
              py: "10px",
              gap: "8px",
              borderRadius: "12px",
              backgroundColor: "#0098FF",
              color: "#FFFFFF",
              border: "1px solid #E2E8F0",
              boxShadow: "0px 2px 5px 0px #0000000A",
              fontSize: "14px",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#007FFC",
              },
            }}
          >
            {buttonText}
          </CustomButton>
        </Box>
      )} */}

      {/* Action Button */}
{buttonText && (
  <Box sx={{ mt: "auto", pt: "12px", width: "100%" }}>
    <CustomButton
      type="Primary"
      size="lg"
      fullWidth
      // NEW: display the SVG passed from Hero.jsx
      iconTrailing={
        iconTrailing ? (
          <Box
            component="img"
            src={iconTrailing}
            alt=""
            aria-hidden="true"
            sx={{
              width: "18px",
              height: "18px",
              objectFit: "contain",
            }}
          />
        ) : undefined
      }
      onClick={onButtonClick}
      sx={{
        width: "100%",
        height: "44px",
        minWidth: 0,
        px: "24px",
        py: "10px",
        gap: "8px",
        borderRadius: "12px",
        backgroundColor: "#0098FF",
        color: "#FFFFFF",
        border: "1px solid #E2E8F0",
        boxShadow: "0px 2px 5px 0px #0000000A",
        fontSize: "14px",
        "&:hover": {
          backgroundColor: "#007FFC",
        },
      }}
    >
      {buttonText}
    </CustomButton>
  </Box>
)}
    </Box>
  );
};

export default CustomCard;
