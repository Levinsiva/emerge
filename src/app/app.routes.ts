import { Routes } from '@angular/router';
import { AboutUs } from './about-us/about-us';
import { Home } from './home/home';
import { Services } from './services/services';
import { Careers } from './careers/careers';
import { ContactUs } from './contact-us/contact-us';
import { ServiceDetails } from './service-details/service-details';
export const routes: Routes = [
    {
        path: 'about-us',
        component: AboutUs
    }, {
        path: '',
        component: Home
    },
    {
        path: 'services',
        component: Services
    },
    {
        path: 'careers',
        component: Careers
    },
    {
        path: 'contact-us',
        component: ContactUs
    },
    {
        path: 'service-details',
        component: ServiceDetails
    }
];
