const config = {
  WS_URL: process.env.WS_URL || "http://localhost/",
  REGEX_TWEET: /^.{0,125}$/,
  REGEX_EMAIL: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
};


export default config;