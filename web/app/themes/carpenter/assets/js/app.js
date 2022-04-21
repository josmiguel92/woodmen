// start the Stimulus application
import './bootstrap';
import Alpine from 'alpinejs'
import sal from 'sal.js'


window.Alpine = Alpine

Alpine.start()
const scrollAnimations = sal();
console.log(scrollAnimations)