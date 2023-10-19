export const GoBack = (path: string) => {
  const visible = ['/[id]','/posts/edit','/posts/create']
  return visible.includes(path)
}
export const Menu = (path: string) => {
  const visible = ['/[id]']
  return visible.includes(path)
}