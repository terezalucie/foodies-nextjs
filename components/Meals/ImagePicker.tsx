"use client"

import { useRef, useState } from 'react'
import classes from './ImagePicker.module.css'
import Image from 'next/image'

type ImagePickerProps = {
    label: string,
    name: string
}

export default function ImagePicker({label, name}: ImagePickerProps) {

    const imageInput = useRef<HTMLInputElement>(null)
    const [pickedImage, setPickedImage] = useState<string | null>(null)

    const handlePickClick = () => {
        imageInput.current?.click()
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]

        if(!file) {
            setPickedImage(null)
            return
        }
        const fileReader = new FileReader()

        fileReader.onload = () => {
            if (typeof fileReader.result === 'string') {
                setPickedImage(fileReader.result)
            }
        }
        fileReader.readAsDataURL(file)

    }

    return(
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No imgae picked yet.</p>}
                    {pickedImage && 
                        <Image 
                            src={pickedImage} 
                            alt='The image selectd by the user' 
                            fill 
                        />}
                </div>
                <input 
                    className={classes.input}
                    type="file" 
                    id={name} 
                    accept='image/png, image/jpeg' 
                    name={name}
                    ref={imageInput}
                    onChange={handleImageChange}
                />
                <button 
                    className={classes.button} 
                    type='button' 
                    onClick={handlePickClick}
                >
                    Pick an Image
                </button>
            </div>
        </div>
    )
}