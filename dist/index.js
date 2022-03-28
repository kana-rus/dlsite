"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const port = process.env.PORT || 8000;
const api = (0, express_1.default)();
api.use(body_parser_1.default.urlencoded({ extended: true }));
api.use(body_parser_1.default.json());
api.post("/", (req, res) => {
    const dataURL = req.body['dataURL'];
    res.send(`
        <h1>Downloaded.</h1>
        <h2>(Go back to LINE)</h2>
        <a download="KaTeX.png" href=${dataURL}></a>
        <script>
        window.onload = function(){
            document.getElementsByTagName("a")[0].click()
        }
        </script>
    `);
});
api.listen(port);
