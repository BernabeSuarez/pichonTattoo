import { useState } from 'react'

export const useOpenImg = () => {
    const [openImage, setOpenImage] = useState(false)

    return {
        openImage,
        setOpenImage,
    };
};
