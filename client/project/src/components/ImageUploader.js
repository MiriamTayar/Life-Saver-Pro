import React from "react";
import { useState } from "react";
import '../styles/ImageUploader.css';

export default function FileUploader({ type }) {
    const [image, setImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function () {
                setImage(reader.result);
            }
            reader.readAsDataURL(file);
        } else {
            setImage(null);
        }
    };

    return (
        <div>
           
            <div className="upload-container">
                <div className="upload-preview" style={{ border: image ? 'none' : '3px dashed #ccc' }}>
                    {image ? (
                        type == "video" ?
                            <video controls src={image} alt="תמונה" style={{ maxWidth: '2000%', maxHeight: '500px', display: 'inline', margin: '0 auto 100px' }} />
                            : <img src={image} alt="תמונה" style={{ maxWidth: '200%', maxHeight: '500px', display: 'inline-block', margin: '0 auto 20px' }} />
                    )
                        : <div > </div>}
                </div>
                <input type="file" id="uploadFile" accept={type == "video" ? "video/*" : "image/*"} className="upload-input" onChange={handleImageUpload} />
                <label htmlFor="uploadFile" className="upload-label" ></label>
            </div>
            <button className="u" id="uploadButton">עידכון מאפייני הבריכה </button>
            
            
        </div>
    );
};

