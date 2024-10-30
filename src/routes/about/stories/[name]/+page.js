import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const post = await import(`$lib/stories/${params.name}.md`).catch(() => {
    error(404, "That story hasn't been written... yet.");
  });

  const { title, warning, prelude } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    warning,
    prelude,
  };
}
