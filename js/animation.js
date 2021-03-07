import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

document.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
});


