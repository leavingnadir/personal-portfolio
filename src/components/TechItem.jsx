export default function TechItem({ src, name }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={src} alt={name} className="w-12 h-12" />
      <span className="mt-2 text-sm">{name}</span>
    </div>
  );
}
