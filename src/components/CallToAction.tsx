import Link from "next/link";

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export function CallToAction({ title, description, buttonText, buttonLink }: CallToActionProps) {
  return (
    <div className="not-prose bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center my-8">
      <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <Link
        href={buttonLink}
        className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors no-underline"
      >
        {buttonText}
      </Link>
    </div>
  );
}
