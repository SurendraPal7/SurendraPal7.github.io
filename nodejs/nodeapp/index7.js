import express from 'express';
const app = express();
app.use("/images", express.static("images"));
// app.use(express.static("images"));
app.use(express.static("public"));

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
app.get("/products", (req, res) => {
    res.send("Product List");
    }
);       