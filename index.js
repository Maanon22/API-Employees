import express from 'express';
import cors from "cors";

const app = express();
const port = 3310;
const sampleEmployee = {
    name: {
        first: "Manon",
        last: "Moutier",
    },
    email: "manon.moutier@example.com",
    picture: {
        medium: "https://randomuser.me/api/portraits/med/women/83.jpg",
    },
};

app.use(cors({ origin: ["http://localhost:5173"] }));

app.listen(port, () => {
    console.log(`test {port}`);
});

app.get("/api/employees", (req, res) => {
    res.json({ results: [sampleEmployee] });
});
