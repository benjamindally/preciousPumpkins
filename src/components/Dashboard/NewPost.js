import React, { Component } from "react";
import Dropzone from "react-dropzone";
import request from "superagent";

const CLOUDINARY_UPLOAD_PRESET = "preciousPumpkins";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/ddjxtap40/image/upload";

export default class NewPost extends Component {
  state = {
    title: "",
    bodyText: "",
    image: "",
    sticky: false,
    uploadedFileClourdinaryURL: "",
    uploadedFile: "",
  };

  handleChange = event => {
    const stateName = event.target.name;
    this.setState({
      [stateName]: event.target.value,
    });
  };

  onImageDrop = files => {
    this.setState({ uploadedFile: files[0] });
  };

  handleImageUpload(file) {
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file);

    upload.end((err, response) => {
      if (err) {
        alert("Something went wrong. Please try again.");
        console.error(err);
      }

      if (response.body.secure_url !== "") {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url,
        });
      }
    });
  }

  render() {
    return (
      <div className="basic_text_area new_post">
        <h1>New Post</h1>
        <form className="form--lable" onSubmit={this.postNewUpdate}>
          <label>
            Title:
            <br />
            <input
              className="form--lable__input"
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </label>
          <br />
          <label>
            Update:
            <br />
            <textarea
              className="form--lable__textarea"
              name="bodyText"
              onChange={this.handleChange}
              value={this.bodyText}
            />
          </label>
        </form>
        {/* <Dropzone
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)}
        >
          <p>Drop an image or click to select a file to upload.</p>
        </Dropzone> */}
        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>
        <div>
          {this.state.uploadedFileCloudinaryUrl === "" ? null : (
            <div>
              <p>{this.state.uploadedFile.name}</p>
              <img
                alt="File Preview"
                src={this.state.uploadedFileCloudinaryUrl}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
