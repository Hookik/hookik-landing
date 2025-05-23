export const IS_DEV_MODE =
  typeof window !== "undefined"
    ? window?.location?.origin.includes("staging") ||
      process.env.NODE_ENV === "development"
    : process.env.NODE_ENV === "development";

export const API_URL = IS_DEV_MODE
  ? `${process.env.NEXT_PUBLIC_BASE_STAGING_API_URL}/v2`
  : `${process.env.NEXT_PUBLIC_BASE_LIVE_API_URL}/v2`;

export const APP_URL = IS_DEV_MODE
  ? process.env.NEXT_PUBLIC_BASE_STAGING_URL
  : process.env.NEXT_PUBLIC_BASE_LIVE_URL;

export const SHOP_URL = IS_DEV_MODE
  ? process.env.NEXT_PUBLIC_BASE_SHOPPING_STAGING_URL
  : process.env.NEXT_PUBLIC_BASE_SHOPPING_LIVE_URL;
