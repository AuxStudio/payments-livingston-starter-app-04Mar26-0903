/**
 * This file defines the structure of the sidebar items for the application. It exports a function getSidebarItems that takes a translation function as an argument and returns
 * an array of sidebar item objects. Each sidebar item includes properties such as id, icon, label, path, and optionally subItems for nested navigation. The icons are imported
 * from FontAwesome's free solid icons, and the labels are generated using the provided translation function to support internationalization. The structure allows for easy addition
 * of new items or sub-items in the future while maintaining a consistent format for the sidebar navigation.
 */
import { faHouseChimney, faQuestionCircle, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type TranslateFunction = (key: string) => string;

export const getSidebarItems = (translate: TranslateFunction) => [
    {
        id: 'dashboard',
        icon: faHouseChimney as IconDefinition,
        label: translate('dashboardTitle'),
        path: '/dashboard'
    },
    {
        id: 'support',
        icon: faQuestionCircle as IconDefinition,
        label: translate('supportLabel'),
        path: '/support',
        subItems: [
            {
                id: 'contactUs',
                label: 'Contact us',
                path: '#',
                url: 'https://www.livingstonintl.com/contact-us/#client-service',
                farRightIcon: faExternalLink
            },
            {
                id: 'faqs',
                label: 'FAQs',
                path: '/faqs'
            }
        ]
    }
];
