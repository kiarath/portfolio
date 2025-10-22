import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  tags: string[];
}

export function ProjectCard({ title, description, category, imageUrl, tags }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="mb-2 inline-block rounded-full bg-terracotta-100 px-3 py-1 text-xs text-terracotta-600">
          {category}
        </div>
        <h3 className="mb-2">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-terracotta-200 px-3 py-1 text-xs text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}