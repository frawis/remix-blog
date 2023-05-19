import type { V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Button } from '~/components/atoms/button';
import PostsList from '~/components/modules/posts-list';
import { sanityClient } from '~/services/sanity';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Testing Remix with Sanity and Supabase' }];
};

export const loader = async () => {
  const query = `*[_type == "post" && defined(slug.current)]`;
  const posts = await sanityClient.fetch(query);

  return json({ posts });
};

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <div>
      <div>
        Latest posts
        <div>
          <PostsList posts={posts} />
        </div>
      </div>
      <Button>Click me</Button>
    </div>
  );
}
