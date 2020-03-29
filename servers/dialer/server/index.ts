import app from './app'

const PORT = process.env.PORT || 7000

app.listen(PORT, () => console.log(`We are rocking on port ${PORT}.`))

module.exports = {}
