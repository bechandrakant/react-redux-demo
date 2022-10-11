import React from "react";
import { connect } from "react-redux";
import { fetchImages } from "../redux/images/imageActions";

const ImageContainer = ({ images, fetchImage }) => {
  return (
    <div>
      <h2>ImageContainer</h2>
      <button onClick={fetchImage}>Fetch Images</button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 20,
        }}
      >
        {images &&
          images.map((image) => {
            return (
              <img
                src={image.url}
                alt={image.title}
                style={{ height: 150, boxShadow: "5px 5px 8px #ccc" }}
                key={image.id}
              />
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    images: state.images.images,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImage: () => dispatch(fetchImages()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer);
