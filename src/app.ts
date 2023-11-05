import app from "./index";
require("dotenv").config();
const port = process.env.PORT || 4000;
app.listen(port, () => { 
  console.log(`server rodando na porta ${port}`);
});
