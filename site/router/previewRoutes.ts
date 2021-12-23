import previewDescription from '../../packages/components/previewDescription.json'

export const preViewRoutes = previewDescription.map((cmp) => {
  return {
    name: cmp.dirName,
    path: `${cmp.enName}`,
    component: () => import(`../../packages/components/${cmp.dirName}/docs/basic.doc.md`)
  }
})
