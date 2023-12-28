import React from 'react';
import {ThemeToggle} from "@/src/theme/ThemeToggle";
import {LoginButton} from "@/src/feature/layout/auth/LoginButton";

export const Header = async () => {
    return(
        <header className={'border-b border-b-accent'}>
            <div className={'container flex items-center py-2 max-w-lg m-auto gap-1'}>
                <h2 className={'text-2xl font-bold mr-auto'}>Githread</h2>
                <LoginButton />
                <ThemeToggle />
            </div>
        </header>
    );
}