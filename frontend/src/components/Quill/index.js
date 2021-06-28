import React from "react";
import { render } from "react-dom";
import ReactQuill, { Quill } from "react-quill";
// import "react-quill/dist/quill.snow.css";
import "./Quill.css";


export const CustomToolbar = () => (
    <div id="toolbar">
        <select className="ql-font">
            <option value="arial" defaultValue>
                Arial
            </option>
            <option value="comic-sans">Comic Sans</option>
            <option value="courier-new">Courier New</option>
            <option value="georgia">Georgia</option>
            <option value="helvetica">Helvetica</option>
            <option value="lucida">Lucida</option>
        </select>
        <select className="ql-size">
            <option value="extra-small">Size 1</option>
            <option value="small">Size 2</option>
            <option value="medium" defaultValue>
                Size 3
            </option>
            <option value="large">Size 4</option>
        </select>
    </div>
);

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
    "arial",
    "comic-sans",
    "courier-new",
    "georgia",
    "helvetica",
    "lucida"
];
Quill.register(Font, true);

/*
 * Editor component with custom toolbar and content containers
 */
export class Editor extends React.Component {
    state = { editorHtml: "" };

    handleChange = html => {
        this.setState({ editorHtml: html });
    };

    static modules = {
        toolbar: {
            container: "#toolbar",
            handlers: {

            }
        }
    };

    static formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "color"
    ];

    render() {
        const { lyrics, setLyrics } = this.props
        return (
            <div className="text-editor">
                <CustomToolbar />
                <ReactQuill
                    value={lyrics}
                    onChange={setLyrics}
                    placeholder={this.props.placeholder}
                    modules={Editor.modules}
                    formats={Editor.formats}
                />
            </div>
        );
    }
}

export const Final = ({ lyrics, setLyrics }) => (
    <div className="custom-toolbar-example">
        {/* <h3>Custom Toolbar with React Quill (Fully working)</h3> */}
        <Editor placeholder={"Lyrics"} />
    </div>
);

// render(<App />, document.getElementById("root"));
