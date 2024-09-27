export default {
    secret: process.env.JWT_SECRET || "oursecret",
    expiresIn: "5m",
    refreshSecret: process.env.JWT_REFRESH_SECRET || "myanothersecret",
    refreshExpiresIn: "7d"
}