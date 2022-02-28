export const TOKEN_EXPIRED_EVENT = "LVL1-jwt-token-expired";

export const expireToken = () => {
  const event = new CustomEvent(TOKEN_EXPIRED_EVENT);
  window.dispatchEvent(event);
};

export const onTokenExpire = (cb: () => void) => {
  window.addEventListener(TOKEN_EXPIRED_EVENT, () => {
    cb();
  });
};
