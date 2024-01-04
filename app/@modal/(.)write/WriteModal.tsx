"use client";

import React from 'react';
import {usePathname, useRouter} from "next/navigation";
import {Dialog, DialogContent} from "@/components/ui/dialog";
import {WritePostForm} from "@/app/write/WritePostForm";
import {User} from "@prisma/client";
import {createPost} from "@/app/write/write-post.action";

const WriteModal = ({user, createPost}: {
    user:User,
    createPost: (values: {
        content: string
    }) => Promise<string>
}) => {
    const router = useRouter();
    const pathname = usePathname();
    
    return (
        <Dialog open={pathname === '/write'} onOpenChange={() => {
            router.back();
        }}>
            <DialogContent>
                <WritePostForm user={user} onSubmit={createPost} />
            </DialogContent>
        </Dialog>
    );
};

export default WriteModal;