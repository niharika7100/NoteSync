import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import ImageIcon from "@material-ui/icons/Image";

function Note(props) {
  const [image, setImage] = useState(null);

  function handleClick() {
    props.onDelete(props.id);
  }

  function handleImageChange(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {image && (
        <img
          src={image}
          alt="Note Image"
          style={{ width: "140px", height: "140px" }}
        />
      )}
      <div>
        <button onClick={handleClick}>
          <DeleteIcon />
        </button>
        <label htmlFor={`image-upload-${props.id}`}>
          <input
            type="file"
            id={`image-upload-${props.id}`}
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <ImageIcon style={{ color: "#c8a2c8", fontSize: "30px" }} />
          Add Image
        </label>
      </div>
    </div>
  );
}

export default Note;
