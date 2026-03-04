/**
 * This component represents the footer of the sidebar in the application. It includes a language selector that allows users to choose their preferred language for the application.
 * The component accepts two props: setSidebarVisible, which is a function to toggle the visibility of the sidebar, and isDesktop, which is a boolean indicating whether the user is
 * on a desktop device. The footer displays a label for the language selector and renders the LanguageSelector component, passing down the necessary props for functionality.
 * The component also utilizes a translation hook to fetch the appropriate translated string for the label, ensuring that it supports internationalization.
 */
import { Dispatch, SetStateAction } from 'react';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useTranslation } from '@/utils/hooks/useTranslation';

type SidebarFooterProps = {
    setSidebarVisible: Dispatch<SetStateAction<boolean>>;
    isDesktop: boolean;
};

const SidebarFooter = ({ setSidebarVisible, isDesktop }: SidebarFooterProps) => {
    const translate = useTranslation();
    return (
        <div className='p-3'>
            <small className='text-white fw-medium'>{translate('preferredLanguage')}</small>
            <div className='mt-2'>
                <LanguageSelector setSidebarVisible={setSidebarVisible} isDesktop={isDesktop} />
            </div>
        </div>
    );
};
export default SidebarFooter;
