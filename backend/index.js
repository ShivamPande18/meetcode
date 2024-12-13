const { generateFile } = require("./generateFile");
const { executeCpp } = require("./executeCpp");

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    return res.json({ hello: "world" });
});

app.post("/run", async (req, res) => {

    // return res.json(req.body);

    const { lang = "cpp", code } = req.body;

    if (code === undefined) {
        console.log("asdas");
        return res.status(400).json({ success: "false", error: "Empty code body!" }); //bad request
    }


    try {
        const filepath = await generateFile(lang, code);
        const output = await executeCpp(filepath);
        return res.json({ filepath, output });
    } catch (error) {
        res.status(500).json({ error });
    }

});

app.listen(5000, () => {
    console.log(`Listening on port 5000!`);
});