export function formatPosts(edges) {
    return edges.map((p) => ({
        path: p.node.fields.slug,
        tags: p.node.frontmatter.tags,
        cover: p.node.frontmatter.cover,
        title: p.node.frontmatter.title,
        date: new Date(p.node.frontmatter.date),
        excerpt: p.node.excerpt,
    }));
}