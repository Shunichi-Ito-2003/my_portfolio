import { getAllPosts } from "@/lib/posts";
import PostList from "@/components/digital-garden/PostList";

export default function DigitalGardenPage() {
    const posts = getAllPosts();

    return <PostList posts={posts} />;
}
