interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const Card = ({ title, description, imageUrl }: CardProps) => (
  <div className="border p-4 rounded-lg shadow-md bg-white">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-40 object-cover rounded-md mb-2"
    />
    <h2 className="font-bold text-lg mb-1">{title}</h2>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);
