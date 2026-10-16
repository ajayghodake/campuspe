import { Button, CircularProgress } from "@mui/material";

const buttonSizes = {
  xs: {
    height: 28,
    px: "14px",
    py: "6px",
    fontSize: "12px",
    gap: "4px",
  },
  sm: {
    height: 32,
    px: "12px",
    py: "6px",
    fontSize: "13px",
    gap: "4px",
  },
  md: {
    height: 36,
    minWidth: 80,
    px: "12px",
    py: "6px",
    fontSize: "14px",
    gap: "4px",
  },
  lg: {
    height: 44,
    px: "20px",
    py: "10px",
    fontSize: "15px",
    gap: "8px",
  },
};

const buttonTypes = {
  Primary: {
    backgroundColor: "#0098FF",
    color: "#FFFFFF",
    border: "1px solid transparent",
    boxShadow: "0px 1px 2px 0px #0000000D",
  },
  Secondary: {
    backgroundColor: "#FFFFFF",
    color: "#0098FF",
    border: "1px solid #0098FF",
    boxShadow: "0px 2px 5px 0px #0000000A",
  },
  Outline: {
    backgroundColor: "transparent",
    color: "#0098FF",
    border: "1px solid #0098FF",
    boxShadow: "none",
  },
  Ghost: {
    backgroundColor: "transparent",
    color: "#007FFC",
    border: "1px solid transparent",
    boxShadow: "none",
  },
};

const CustomButton = ({
  children,
  variant,
  size = "lg",
  type = "Primary",
  state = "Normal",
  destructive = false,
  iconLeading,
  iconTrailing,
  fullWidth = false,
  pill = false,
  gradient = false,
  loading = false,
  disabled = false,
  sx = {},
  onClick,
  ...props
}) => {
  const selectedSize = buttonSizes[size] || buttonSizes.lg;
  const selectedType = buttonTypes[type] || buttonTypes.Primary;

  const isDisabled =
    disabled || loading || state === "Disabled";

  const isHovered = state === "Hover";
  const isPressed = state === "Pressed";

  const dangerColor = destructive ? "#DC2626" : "#0098FF";
  const dangerHover = destructive ? "#B91C1C" : "#007FFC";

  const background = gradient
    ? "var(--grad-heading)"
    : destructive
      ? dangerColor
      : selectedType.backgroundColor;

  return (
    <Button
      variant={variant || "contained"}
      fullWidth={fullWidth}
      disabled={isDisabled}
      onClick={onClick}
      disableRipple={false}
      startIcon={
        loading ? (
          <CircularProgress
            size={15}
            thickness={5}
            sx={{ color: "inherit" }}
          />
        ) : (
          iconLeading
        )
      }
      endIcon={!loading ? iconTrailing : undefined}
      sx={{
        boxSizing: "border-box",
        minWidth: selectedSize.minWidth || 0,
        width: fullWidth ? "100%" : "fit-content",
        height: selectedSize.height,
        px: selectedSize.px,
        py: selectedSize.py,
        gap: selectedSize.gap,

        borderRadius: pill ? "9999px" : "12px",
        fontFamily: '"Inter", "Roboto", sans-serif',
        fontWeight: 600,
        fontSize: selectedSize.fontSize,
        lineHeight: 1,
        textTransform: "none",
        whiteSpace: "nowrap",

        backgroundColor: background,
        backgroundImage: gradient ? "var(--grad-heading)" : "none",
        color: destructive ? "#FFFFFF" : selectedType.color,
        border: destructive
          ? "1px solid transparent"
          : selectedType.border,
        boxShadow: selectedType.boxShadow,

        transition:
          "background-color 180ms ease, color 180ms ease, box-shadow 180ms ease, transform 180ms ease, opacity 180ms ease",

        "& .MuiButton-startIcon": {
          margin: 0,
        },

        "& .MuiButton-endIcon": {
          margin: 0,
        },

        "&:hover": {
          backgroundColor: gradient
            ? undefined
            : destructive
              ? dangerHover
              : type === "Secondary" || type === "Outline"
                ? "#F0F8FF"
                : type === "Ghost"
                  ? "#EFF6FF"
                  : dangerHover,
          backgroundImage: gradient ? "var(--grad-heading)" : "none",
          opacity: gradient ? 0.96 : 1,
          boxShadow:
            type === "Ghost" || type === "Outline"
              ? "none"
              : "0px 3px 8px rgba(0, 127, 252, 0.16)",
          transform: "translateY(-1px)",
        },

        "&:active": {
          transform: "translateY(0)",
          boxShadow: "none",
        },

        "&.Mui-disabled": {
          backgroundColor: "#E5E7EB",
          backgroundImage: "none",
          color: "#9CA3AF",
          borderColor: "#E5E7EB",
          boxShadow: "none",
          opacity: 1,
          cursor: "not-allowed",
        },

        ...(isHovered && {
          backgroundColor: destructive ? dangerHover : "#007FFC",
          color: "#FFFFFF",
        }),

        ...(isPressed && {
          transform: "translateY(0)",
        }),

        ...(state === "Loading" && {
          pointerEvents: "none",
        }),

        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
