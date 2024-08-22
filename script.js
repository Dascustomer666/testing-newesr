document.addEventListener('DOMContentLoaded', () => {
    // Function to get URL parameters
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const propertyId = getQueryParam('id');

    // Property details
    const propertyDetails = {
        1: {
            title: '2 Bed 2 Bath Condo',
            location: 'Pratumnak',
            price: '฿8,900,000',
            description: 'Discover the perfect blend of luxury and convenience in this beautiful condo located in the heart of Pratumnak, Pattaya.',
            images: ['images/siamoceanview.jpg', 'images/house1b.jpg']
        },
        2: {
            title: '2 Bed 2 Bath Condo',
            location: 'Pratumnak',
            price: '฿8,900,000',
            description: 'Discover this beautifully furnished 146 sqm condo on the second floor, offering an exquisite view over the swimming pool. Located in a tranquil soi near the golf course on Prathumnak Hill, this property is just a short walk to the beach, restaurants, and pubs.',
            images: ['images/house2a.jpg', 'images/house2b.jpg']
        },
        3: {
            title: 'Luxury Apartment',
            location: 'Pratumank',
            price: '฿8,000,000',
            description: 'An elegant apartment with premium finishes and a prime location.',
            images: ['images/house3a.jpg', 'images/house3b.jpg']
        }
    };
    

    const property = propertyDetails[propertyId];
    if (property) {
        document.getElementById('property-title').innerText = property.title;
        document.getElementById('property-location').innerHTML = `<i class='bx bx-location-plus'></i> Location: ${property.location}`;
        document.getElementById('property-price').innerHTML = `<i class='bx bx-money'></i> Price: ${property.price}`;
        document.getElementById('property-description').innerHTML = `<i class='bx bx-description'></i> Description: ${property.description}`;
        
        const sliderImages = document.getElementById('slider-images');
        sliderImages.innerHTML = property.images.map(img => `<div class="slide"><img src="${img}" alt="${property.title}"></div>`).join('');
    } else {
        document.querySelector('.property-details').innerHTML = `<p>Property not found.</p>`;
    }

    // Slider functionality
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slides = document.querySelector('.slides');
    let index = 0;
    const slideCount = document.querySelectorAll('.slide').length;

    function showSlide(newIndex) {
        if (newIndex >= slideCount) {
            index = 0;
        } else if (newIndex < 0) {
            index = slideCount - 1;
        } else {
            index = newIndex;
        }
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener('click', () => showSlide(index - 1));
    nextButton.addEventListener('click', () => showSlide(index + 1));

    // Optional: Automatic slide transition
    setInterval(() => showSlide(index + 1), 5000); // Change slides every 5 seconds
});
