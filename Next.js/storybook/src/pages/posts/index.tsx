import { GetStaticProps, NextPage } from 'next';
import { getPosts } from '@/utils/apis/getPosts';
import { IPost } from '@/types/post';
import Link from 'next/link';

type SSGProps = {
  posts: IPost[];
};

// PostList 컴포넌트 정의
const PostList: NextPage<SSGProps> = ({ posts }: SSGProps) => (
  <div>
    <h1 className="font-bold text-lg">게시물 목록</h1>
    <ul>
      {posts.map((post) => (
        <Link href={`/post/${post.id}`}>
          <li key={post.id}>{post.title}</li>
        </Link>
      ))}
    </ul>
  </div>
);

export const getStaticProps: GetStaticProps<SSGProps> = async () => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};

export default PostList;
