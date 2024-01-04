import React from 'react';

export default function PostPage({ params }: {params: {postId: string}}) {
    const {postId} = params;
    return (
        <div>
            <p>Post ID : {postId}</p>
        </div>
    );
}
