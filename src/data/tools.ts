export const slugifyTool = (tool: string) =>
  tool.toLowerCase().replace(/[^a-z0-9]+/g, '-')

export function getAllTools(projects: { tools: string[] }[]) {
  const map = new Map<string, string>()
  for (const project of projects) {
    for (const tool of project.tools) {
      map.set(slugifyTool(tool), tool)
    }
  }
  return [...map.entries()]
    .map(([slug, name]) => ({ slug, name }))
    .sort((a, b) => a.name.localeCompare(b.name))
}
