import { app } from "./app.js"

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Servidor tá ON em http://localhost/${PORT}`)
})
