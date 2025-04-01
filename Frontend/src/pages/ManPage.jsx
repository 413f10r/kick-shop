import axios from 'axios';
import { useState, useEffect } from 'react';

export default function ManPage() {

    const [productMan, setProductMan] = useState([]);

    return (
        <>
            <h1 className="text-center my-3">Man Collection</h1>
            <figure>
                <img src="/src/assets/img/hero-section-2-man.webp" alt="Hero image 2" className="w-100" />
            </figure>
        </>
    )
}