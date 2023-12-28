import React from 'react';
import {ThemeToggle} from "@/src/theme/ThemeToggle";
import {LoginButton} from "@/src/feature/layout/auth/LoginButton";
import {getAuthSession} from "@/lib/auth";
import {UserProfile} from "@/src/feature/layout/auth/UserProfile";
import Link from 'next/link';

export const Header = async () => {
    const session = await getAuthSession();

    return (
        <header className={'border-b border-b-accent fixed top-0 bg-background w-full'}>
            <div className={'container flex items-center py-2 max-w-lg m-auto gap-1'}>
                <Link href={'/'} className={'mr-auto'}>
                    <h2 className={'text-2xl font-bold'}>Githread</h2>
                </Link>
                {session?.user ? (
                    <UserProfile/>
                ) : <LoginButton/>}
                <ThemeToggle/>
            </div>
        </header>
    );
}