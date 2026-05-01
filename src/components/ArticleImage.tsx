"use client";

interface ArticleImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackEmoji?: string;
  fallbackGradient?: string;
}

export default function ArticleImage({
  src,
  alt,
  className = "w-full h-auto block",
  fallbackEmoji = "🇵🇰",
  fallbackGradient = "from-green-800 to-green-600",
}: ArticleImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => {
        const img = e.target as HTMLImageElement;
        const parent = img.parentElement;
        if (parent) {
          // Give the fallback a sensible height so the card doesn't collapse
          parent.style.minHeight = "160px";
          parent.innerHTML = `
            <div
              class="w-full h-full min-h-[160px] bg-gradient-to-br ${fallbackGradient} flex items-center justify-center text-5xl select-none"
            >${fallbackEmoji}</div>`;
        }
      }}
    />
  );
}
