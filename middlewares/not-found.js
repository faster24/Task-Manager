const notFound = (req , res) => res.status(404).json("Route doesn't found!")

module.exports = notFound 