import {PostHome} from "@/src/query/post.query";
import {PostLayout} from "@/src/feature/post/PostLayout";
import Link from "next/link";
import {Heart, MessageCircle} from "lucide-react";
import {Button} from "@/components/ui/button";

type PostProps = {
    post: PostHome
}

export const Post = ({post}: PostProps) => {
    return (
        <PostLayout user={post.user} postId={post.id} createdAt={post.createdAt}>
            <Link href={`/posts/${post.id}`} className={'text-sm text-foreground'}>
                {post.content}
            </Link>
            <div className={'flex gap-2 items-center'}>
                <Button size={'icon'} variant={'ghost'}>
                    <Heart size={20} />
                </Button>
                <Button size={'icon'} variant={'ghost'}>
                    <MessageCircle size={20} />
                </Button>
            </div>
            <div>
                <Link href={`/posts/${post.id}`} className={'text-foreground text-sm'}>
                    {post._count.likes} likes
                </Link>
                {" • "}
                <Link href={`/posts/${post.id}`} className={'text-foreground text-sm'}>
                    {post._count.replies} comments
                </Link>
            </div>
        </PostLayout>
    );
}