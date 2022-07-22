import { useState, useEffect } from "react";

function Avatar() {
    const [avatar, setAvatar] = useState();

    useEffect(
        () => () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        },
        [avatar]
    );

    const previewHandler = e => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
    }

    return (
        <div>
            <input
                type="file"
                onChange={previewHandler}
            />
            {
                avatar &&
                <img
                    style={
                        {
                            display: 'block',
                            width: '100%'
                        }
                    }
                    src={avatar.preview}
                    alt=""
                />
            }
        </div>
    );
}

export default Avatar;