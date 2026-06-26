import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteChrome from '@/components/SiteChrome';
import ProjectPageContent from '@/components/ProjectPageContent';
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/content';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found | Klaris',
    };
  }

  return {
    title: `${project.title} | Klaris`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <SiteChrome>
      <ProjectPageContent project={project} />
    </SiteChrome>
  );
}
