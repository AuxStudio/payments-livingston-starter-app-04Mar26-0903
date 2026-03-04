/**
 * This component represents a user profile image in the application. It is styled as a rounded circle and includes a placeholder icon for the user's profile picture.
 * The component accepts an optional className prop for additional styling.
 */
export const UserProfileImage = () => (
    <svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='25' cy='25' r='25' fill='#E7EEF3' />
        <path
            d='M25 26.202a5.41 5.41 0 0 0 5.409-5.409c0-2.967-2.442-5.408-5.409-5.408a5.41 5.41 0 0 0-5.409 5.408A5.386 5.386 0 0 0 25 26.202Zm4.808 1.202h-2.104c-.826.413-1.727.6-2.704.6-.977 0-1.916-.187-2.742-.6h-2.066c-2.666 0-4.807 2.178-4.807 4.808v.6a1.78 1.78 0 0 0 1.803 1.803h15.625c.976 0 1.802-.788 1.802-1.803v-.6c0-2.63-2.178-4.808-4.807-4.808Z'
            fill='#8DABCD'
        />
    </svg>
);
