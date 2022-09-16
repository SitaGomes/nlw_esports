import express from "express";
const app = express();
app.get("/", (request, response) => {
    response.json({ message: "Dist directory babyyyy" });
});
app.listen(3333);
