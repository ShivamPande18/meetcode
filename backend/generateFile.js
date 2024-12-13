const fs = require("fs");
const path = require("path");
// const { v4: uuid } = require("uuid");

const dirCodes = path.join(__dirname, "codes");

if (!fs.existsSync(dirCodes)) {
    fs.mkdirSync(dirCodes, { recursive: true });
}

const generateFile = async (format, content) => {
    // const jobId = uuid();
    const filename = `codefile.${format}`;
    const filepath = path.join(dirCodes, filename);
    await fs.writeFileSync(filepath, content);
    await fs.writeFileSync(path.join(dirCodes, "a.exe"), "");
    return filepath;
};

module.exports = {
    generateFile,
};