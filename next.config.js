/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
	  ALCHEMY_APIKEY: "q5KUuNE6iQ3R1bk-lIViI3wr_JAHh8nA",
	  QUICKNODE_ID: "https://ultra-quaint-shape.matic-testnet.discover.quiknode.pro/b60f91be76a450f4de0747cb1b4682402e7f98fe/",
	  OPENAI: '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',
	  REVISE_AUTHKEY:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyMzBmYjk4LWMyZGEtNDhiMS04YzI5LThiNzdmNTRjOWQzZSIsImtleSI6ImdtenRwcmwzIiwiaWF0IjoxNjY5ODEzNzE1fQ.0I83zALtKj2FmCkabu3dB44q40dSDLlqxSC4BkSPDpA'
	},
	webpack: (config, { isServer }) => {
	  if (!isServer) {
		config.resolve.fallback = {
		  fs: false,
		  net: false,
		  tls: false,
		  // crypto: require.resolve("crypto-browserify"),
		};
	  }
	  return config;
	},
  }
  module.exports = nextConfig