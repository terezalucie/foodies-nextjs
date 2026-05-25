"use client"

import { useState, useEffect } from 'react'
import classes from './ImageSlideShow.module.css'

import burgerImg from '@/assets/burger.jpg'
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';
import Image from 'next/image';

const images = [
  { image: burgerImg, alt: 'A delicious, juicy burger' },
  { image: curryImg, alt: 'A delicious, spicy curry' },
  { image: dumplingsImg, alt: 'Steamed dumplings' },
  { image: macncheeseImg, alt: 'Mac and cheese' },
  { image: pizzaImg, alt: 'A delicious pizza' },
  { image: schnitzelImg, alt: 'A delicious schnitzel' },
  { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

export default function ImageSlideShow(){
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => prev < images.length - 1 ? prev + 1 : 0)
        }, 5000)

        return () => clearInterval(interval)

    }, [])

    return(
        <div className={classes.slideshow}>
            {images.map((img, index) => (
                <Image 
                    key={index}
                    src={img.image} 
                    alt={img.alt} 
                    className={index === currentImageIndex ? classes.active : ''}
                />
            ))}
        </div>
    )
}