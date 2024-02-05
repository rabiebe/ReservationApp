const PROXY_CONFIG = [
  {
    context: [
      "/reservation",
      "/user"
    ],
    target: "https://localhost:7093",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
