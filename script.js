        // Carousel functionality
        const carouselItems = document.querySelectorAll('.hero-carousel-item');
        let currentItem = 0;

        function nextItem() {
            carouselItems[currentItem].classList.remove('active');
            currentItem = (currentItem + 1) % carouselItems.length;
            carouselItems[currentItem].classList.add('active');
        }

        setInterval(nextItem, 5000);

        // Parallax effect
        const heroSection = document.querySelector('.hero-section');
        const heroContent = document.querySelector('.hero-content');
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');

        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            const heroRect = heroSection.getBoundingClientRect();
            
            if (heroRect.bottom > 0) {
                heroContent.style.transform = `translateY(${scrollPosition * 0.5}px)`;
                heroTitle.style.transform = `translateY(${scrollPosition * 0.2}px)`;
                heroSubtitle.style.transform = `translateY(${scrollPosition * 0.1}px)`;
            }
        });